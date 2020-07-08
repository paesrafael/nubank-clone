import styled from 'styled-components'

const Container = styled.View`
  padding: 40px 0 30px;
  align-items: center;
`

const Top = styled.View`
  margin-bottom: 10px;
  flex-direction: row;
  align-items: center;
`

const Logo = styled.Image``

const Title = styled.Text`
  margin-left: 8px;
  color: #FFF;
  font-size: 18px;
  font-weight: bold;
`

const InputView = styled.View``

const Input = styled.TextInput`
  padding: 15px;
  margin: 15px;
  margin-bottom: 0;
  font-size: 18px;
  border-radius: 8px;
  border: 1px solid #FFF;
  background-color: #FFF;
`

export {
  Container, Top,
  Logo, Title,
  InputView, Input,
}
