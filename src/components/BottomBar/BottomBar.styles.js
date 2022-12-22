import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    position: 'absolute',
    backgroundColor: 'white',
    bottom: 0,
    left: 0,
    right: 0,
    height: '8%',
  },
  innerContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: 40,
    alignItems: 'center',
    marginBottom: '2%',
  },
  renderItemTitle: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});
