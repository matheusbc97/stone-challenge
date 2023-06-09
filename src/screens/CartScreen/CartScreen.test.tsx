import {PropsWithChildren} from 'react';
import {fireEvent, render, renderHook} from '@testing-library/react-native';

import {IRouteProp} from '../../shared/types';
import {GlobalStoreProvider} from '../../core/providers';

import {TEST_IDS} from '../../shared/constants/testIds';
import {useAddProductToCart} from '../../shared/hooks';
import {mockedProducts} from '../../shared/mocks/products';

import {CartScreen} from './index';

const mockNavigation: any = {
  pop: jest.fn(),
  navigate: jest.fn(),
};

const mockRoute: IRouteProp<'Cart'> = {key: 'test', name: 'Cart'};

describe('CartScreen', () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it('should render', () => {
    const wrapper = ({children}: PropsWithChildren) => (
      <GlobalStoreProvider>{children}</GlobalStoreProvider>
    );

    render(<CartScreen navigation={mockNavigation} route={mockRoute} />, {
      wrapper,
    });
  });

  it('should add and after remove a product from cart', async () => {
    const wrapper = ({children}: PropsWithChildren) => (
      <GlobalStoreProvider>{children}</GlobalStoreProvider>
    );

    const {getByTestId, getAllByTestId} = render(
      <CartScreen navigation={mockNavigation} route={mockRoute} />,
      {wrapper},
    );

    const {result} = renderHook(() => useAddProductToCart(), {wrapper});

    const mockProduct = mockedProducts[0];

    result.current(mockProduct);

    const flatList = getByTestId(TEST_IDS.CART_SCREEN_FLAT_LIST);

    expect(flatList.props.data).toStrictEqual([mockProduct]);

    const flatListItems = getAllByTestId(TEST_IDS.CART_LIST_ITEM);

    const element = flatListItems[0].findByProps({
      testID: TEST_IDS.CART_LIST_ITEM_REMOVE_BUTTON,
    });

    fireEvent(element, 'press');

    expect(flatList.props.data).toStrictEqual([]);
  });
});
