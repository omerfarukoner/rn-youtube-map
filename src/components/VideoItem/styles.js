import { StyleSheet } from 'react-native'

export default StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  image: {
    width: '30%',
    height: 100
  },
  text: {
    width: '70%',
    fontSize: 18,
    color: '#000',
    paddingLeft: 12,
    alignSelf: 'center'
  }
})
