import {ActivityIndicator} from 'react-native';
import {FlatList, IFlatListProps} from './FlatList';
import {TEST_IDS} from '../constants/testIds';

export interface IInfinityScrollFlatListProps<T> extends IFlatListProps<T> {
  refreshing: boolean;
  onEndReached: () => void;
  testID?: string;
}

export function InfinityScrollFlatList<T>({
  contentContainerStyle,
  refreshing,
  testID = TEST_IDS.INFINITY_SCROLL_FLAT_LIST,
  ...props
}: IInfinityScrollFlatListProps<T>) {
  return (
    <FlatList
      testID={testID}
      contentContainerStyle={[{flexGrow: 1}, contentContainerStyle]}
      ListFooterComponent={refreshing ? <ActivityIndicator /> : null}
      refreshing={refreshing}
      {...props}
    />
  );
}
