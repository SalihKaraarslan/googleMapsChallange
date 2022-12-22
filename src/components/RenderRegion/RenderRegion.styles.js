import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  renderItemWrapper: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    marginVertical: 10,
    height: 80,
    paddingLeft: 30,
    borderRadius: 10,
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.15,
    shadowRadius: 3,
  },
  renderItemTitle: {
    color: 'black',
    fontSize: 20,
    fontFamily: 'Poppins-SemiBold',
  },
});
