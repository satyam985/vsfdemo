<template>
  <div id="sale">
    <div class="products-on-sale">
      <SfHeading title="Products on sale" :level="3"/>
    </div>
    <hr>
        <SfBreadcrumbs :breadcrumbs="breadcrumbs" />

    <hr>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi iaculis felis in malesuada fringilla. Quisque mattis pulvinar odio, vitae mattis turpis hendrerit quis. Proin ullamcorper, lectus tristique venenatis luctus, felis libero volutpat lectus, a lobortis neque purus vitae augue. Vivamus sit amet pellentesque eros. Quisque quis est eros. Nulla mauris nulla, ultricies at massa non, mollis dapibus sem. Proin vitae tincidunt nulla, auctor tempus purus. Phasellus facilisis mi quis dui mollis, ut lobortis dolor dapibus. Ut sagittis odio sit amet sem aliquam pulvinar. Vestibulum eget purus id sapien dictum mollis at ut leo. Pellentesque libero enim, efficitur quis finibus eget, varius ac diam.</p>
    <p>Suspendisse scelerisque placerat lacus ut aliquet. Duis a tellus neque. Nam non arcu orci. Nulla non diam id odio fermentum euismod quis quis turpis. Donec porttitor sit amet neque vel rhoncus. Nam luctus diam ac ipsum pretium, sed imperdiet odio condimentum. Nullam sed ullamcorper nunc. Duis in bibendum diam. Sed eget ipsum consequat, rutrum nulla in, consectetur diam. Ut at elit varius felis gravida fermentum posuere a velit. Nam consectetur tincidunt ante nec tristique.</p>
    <SfButton :link="'/'">Homepage</SfButton>
  </div>
</template>
<script>
import {
  SfHeading,
  SfButton,
  SfBreadcrumbs
} from '@storefront-ui/vue';

export default {
  name: 'Sale',
  layout: 'full',
  components: {
    SfHeading,
    SfButton,
    SfBreadcrumbs
  },
  data(){
    return {
      breadcrumbs : [
        {
          "text": "Home",
          "link": "/"
        },
        {
          "text": "Sale",
          "link": "#"
        }
      ]
    }
  }
};
</script>

<style lang="scss">

.products-on-sale {
  --heading-title-color: var(--c-danger);
}

</style>
