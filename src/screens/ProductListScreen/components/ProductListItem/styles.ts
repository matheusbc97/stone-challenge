import {StyleSheet} from 'react-native';
import {spacing} from '../../../../shared/theme';

export default StyleSheet.create({
  container: {
    backgroundColor: '#FFF',
    borderRadius: 3,

    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 5,

    margin: spacing.small,
    padding: spacing.medium,
  },
});