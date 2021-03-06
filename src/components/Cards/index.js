import React, { useState, useEffect } from 'react'
import Icon from 'react-native-vector-icons/FontAwesome5'
import { Animated } from 'react-native'
import { PanGestureHandler, State } from 'react-native-gesture-handler'

import Menu from '~/components/Menu'
import Tabs from '~/components/Tabs'

import {
  Content, CardContainer, CardHeader,
  CardContent, Title, Text, Description,
  CardFooter, Annotation,
} from './styles'

export default function Cards() {
  const [soma, setSoma] = useState(50)
  const [saldo, setSaldo] = useState('')
  let offset = 0
  const translateY = new Animated.Value(0)

  useEffect(() => {
    if (soma) setSaldo(soma)
  }, [soma])

  const animatedEvent = Animated.event(
    [
      {
        nativeEvent: {
          translationY: translateY,
        },
      },
    ],
    { useNativeDriver: true },
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

      if (translationY < 10) {
        const numberRand = Math.floor(Math.random() * 1000) + 100
        const calcular = saldo + numberRand
        setSoma(calcular)
      }

      Animated.timing(translateY, {
        toValue: opened ? 380 : 0,
        duration: 200,
        useNativeDriver: true,
      }).start(() => {
        offset = opened ? 380 : 0
        translateY.setOffset(offset)
        translateY.setValue(0)
      })
    }
  }

  return (
    <>
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
                extrapolate: 'clamp',
              }),
            }],
          }}
          >
            <CardHeader>
              <Text>
                <Icon name="coins" size={25} color="#666" /> Conta
              </Text>
              <Icon name="eye" size={25} color="#666" />
            </CardHeader>

            <CardContent>
              <Title>Saldo disponível</Title>
              <Description>R$ {saldo}</Description>
            </CardContent>

            <CardFooter>
              <Annotation>
                Transferência de R$ 1.000,00 recebida de Rafael Paes hoje às 20:00
              </Annotation>
            </CardFooter>
          </CardContainer>
        </PanGestureHandler>
      </Content>

      <Tabs translateY={translateY} />
    </>
  )
}
