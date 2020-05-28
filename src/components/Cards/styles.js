import { Animated } from 'react-native'
import styled from 'styled-components'

const Content = styled.View`
  max-height: 400px;
  flex: 1;
  z-index: 5;
`

const CardContainer = styled(Animated.View)`
  position: absolute;
  top: 0;
  left: 0;
  margin: 0 20px;
  height: 100%;
  border-radius: 4px;
  background: #FFF;
  flex: 1;
`

const CardHeader = styled.View`
  padding: 20px;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const CardContent = styled.View`
  padding: 0 20px;
  flex: 1;
  justify-content: center;
`

const Title = styled.Text`
  color: #999;
  font-size: 13px;
`

const Description = styled.Text`
  margin-top: 5px;
  color: #333;
  font-size: 32px;
`

const CardFooter = styled.View`
  padding: 20px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  background: #eee;
`

const Annotation = styled.Text`
  color: #333;
  font-size: 12px;
`

export {
  Content, CardContainer, CardHeader,
  CardContent, Title, Description,
  CardFooter, Annotation
}