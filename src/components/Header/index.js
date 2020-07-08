import React, { useState } from 'react'
import Icon from 'react-native-vector-icons/MaterialIcons'

import {
  Container, Top,
  Logo, Title,
  InputView, Input,
} from './styles'
import logo from '~/assets/Nubank_Logo.png'

export default function Header() {
  const [name, setName] = useState('Rafael')
  const [editName, setEditName] = useState(false)

  function onHandleName() {
    setEditName(true)
  }

  function changeName(nameItem) {
    setName(nameItem)

    setTimeout(() => {
      setEditName(false)
    }, 3000)
  }

  return (
    <Container>
      <Top>
        <Logo source={logo} />
        <Title onPress={onHandleName}>
          {name}
        </Title>
      </Top>

      {!!editName && (
        <InputView>
          <Input
            placeholder="Qual seu nome?"
            value={name}
            onChangeText={(nameItem) => changeName(nameItem)}
          />
        </InputView>
      )}

      <Icon name="keyboard-arrow-down" size={20} color="#FFF" />
    </Container>
  )
}
