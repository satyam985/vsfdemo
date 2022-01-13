<template>
  <div id="product">
    <h1>{{ productGetters.getName(product) }}</h1>
    
    <p>
      <span class="attribute">Description:</span> {{ productGetters.getDescription(product) }}
    </p>
    <p>
      <span class="attribute">Slug:</span> {{ productGetters.getSlug(product) }}
    </p>
    <p>
      <span class="attribute">Custom getter:</span> {{ productGetters.getCustomAttribue(product) }}
    </p>
    
    <img :src="productGetters.getCoverImage(product)" />

    <SfAddToCart
      :stock="stock"
      v-model="qty"
      :disabled="loading"
      :canAddToCart="stock > 0"
      @click="addItem({ product, quantity: parseInt(qty) })"
    />

  </div>
</template>
<script>

import { computed, ref } from '@vue/composition-api';
import { useProduct } from '@vue-storefront/commercetools';
import { productGetters } from '@/custom/productGetters';
import useCart from '@/custom/useCart';
import { onSSR } from '@vue-storefront/core';

import {
  SfAddToCart,
} from '@storefront-ui/vue';

export default {
  name: 'CustomProduct',
  components: {
    SfAddToCart
  },
  setup(props, context) {
    const qty = ref(1);
    const stock = ref(5);
    const { id } = context.root.$route.params;
    const { products, search } = useProduct('products');
    const { addItem, loading } = useCart();

    const product = computed(() => productGetters.getFiltered(products.value, { master: true, attributes: context.root.$route.query })[0]);
    
    onSSR(async () => {
      await search({ id });
    });

    return {
      product,
      productGetters,
      addItem,
      loading,
      qty,
      stock
    };

  }
};
</script>

<style lang="scss" scoped>
  .attribute {
    font-weight: bold;
  }
</style>
