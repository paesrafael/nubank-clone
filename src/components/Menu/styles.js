import { StyleSheet } from 'react-native'
import styled from 'styled-components'

const Container = styled.ScrollView.attrs({
  contentContainerStyle: { alignItems: 'center' }
})`
  margin: 0 30px;
`

const Code = styled.View`
  padding: 10px;
  background: #FFF;
`

const Nav = styled.View`
  margin-top: 30px;
  width: 100%;
  border-top-width: ${StyleSheet.hairlineWidth}px;
  border-top-color: rgba(255, 255, 255, 0.8);
`

const NavItem = styled.View`
  padding: 10px 0;
  border-bottom-width: ${StyleSheet.hairlineWidth}px;
  border-bottom-color: rgba(255, 255, 255, 0.8);
  flex-direction: row;
  align-items: center;
`

const NavText = styled.Text`
  margin-left: 10px;
  color: #FFF;
  font-size: 15px;
`

const SignOutButton = styled.TouchableOpacity`
  padding: 10px;
  margin-top: 15px;
  width: 100%;
  border-width: ${StyleSheet.hairlineWidth}px;
  border-color: rgba(255, 255, 255, 0.8);
  border-radius: 4px;
  justify-content: center;
  align-items: center;
`

const SignOutButtonText = styled.Text`
  color: #FFF;
  font-size: 13px;
  font-weight: bold;
`

export {
  Container, Code,
  Nav, NavItem, NavText,
  SignOutButton, SignOutButtonText
}