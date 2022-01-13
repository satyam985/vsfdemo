import { productGetters as originalProductGetters } from '@vue-storefront/commercetools';

export const productGetters = {
  ...originalProductGetters,
  getCustomAttribue: (product) => {
    return `${product._name} ${product._id}`
  }
}
