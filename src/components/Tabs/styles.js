import { Animated } from 'react-native'
import styled from 'styled-components'

const Container = styled(Animated.View)`
  margin-top: 20px;
  height: 100px;
`

const TabsContainer = styled.ScrollView.attrs({
  horizontal: true,
  contentContainerStyle: {
    paddingRight: 10,
  },
  showHorizontalScrollIndicator: false,
})``

const TabItem = styled.View`
  padding: 10px;
  margin-left: 10px;
  width: 100px;
  height: 100px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 3px;
  justify-content: space-between;
`

const TabText = styled.Text`
  font-size: 13px;
  color: #FFF;
`

export {
  Container, TabsContainer,
  TabItem, TabText,
}
