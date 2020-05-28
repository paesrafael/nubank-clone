import React from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import Menu from '~/components/Menu'

import {
  Content, CardContainer, CardHeader,
  CardContent, Title, Description,
  CardFooter, Annotation
} from './styles'

export default function Cards() {
  return (
    <Content>
      <Menu />
      
      <CardContainer>
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
    </Content>
  )
}