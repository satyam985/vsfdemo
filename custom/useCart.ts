import { useCart as originalUseCart } from '@vue-storefront/commercetools';

const useCart = () => {
  const props = originalUseCart();

  const addItem = async (args) => {
    console.log('Call Google Analytics...', args)

    return props.addItem(args)
  }

  return {
    ...props,
    addItem
  }
}

export default useCart;
