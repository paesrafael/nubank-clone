import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Menu from '~/components/Menu'

import {
  Content, CardContainer, CardHeader,
  CardContent, Title, Description,
  CardFooter, Annotation
} from './styles'

export default function Cards() {
  let offset = 0
  const translateY = new Animated.Value(0)

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY
        }
      }
    ],
    { useNativeDriver: true }
  )  
  
  async function onHandlerStateChange(event) {
    if (event.nativeEvent.oldState === State.ACTIVE) {
      let opened = false
      const { translationY } = event.nativeEvent

      offset += translationY

      if (translationY >= 100) {
        opened = true
      } else {
        translateY.setValue(offset)
        translateY.setOffset(0)
        offset = 0
      }
      
      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }
  
  return (
    <Content>
      <Menu translateY={translateY} />

      <PanGestureHandler
        onGestureEvent={animatedEvent}
        onHandlerStateChange={onHandlerStateChange}
      >
        <CardContainer style={{
          transform: [{
            translateY: translateY.interpolate({
              inputRange: [-350, 0, 380],
              outputRange: [-50, 0, 380],
              extrapolate: 'clamp'
            })
          }]
        }}>
          <CardHeader>
            <Icon name="attach-money" size={28} color="#666" />
            <Icon name="visibility-off" size={28} color="#666" />
          </CardHeader>
          
          <CardContent>
            <Title>Saldo disponível</Title>
            <Description>R$ 10.999.900,00</Description>
          </CardContent>
          
          <CardFooter>
            <Annotation>
              Transferência de R$ 1.000,00 recebida de Rafael Paes hoje às 20:00
            </Annotation>
          </CardFooter>
        </CardContainer>
      </PanGestureHandler>
    </Content>
  )
}