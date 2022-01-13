<template>
  <div class="header_module">
    <nuxt-link :to="localePath(`/${logo.fields.slug ? logo.fields.slug : ''}`)" class="footer-module__logo">
      <div class="image-wrapper image-wrapper-constrained header_module__logo">
        <div style="max-width: 1996px; display: block;">
          <img :src="logo.fields.image.fields.file.url" alt="" style="max-width: 100%; display: block; position: static;">
        </div>
      </div>    
    </nuxt-link> 
    
    <div v-for="menuItem, index in headerMenu" :key="index" class="heading heading4 headerlink_module">
        <nuxt-link :to="localePath(`/${menuItem.fields.slug ? menuItem.fields.slug : ''}`)">
          {{menuItem.fields.title ? menuItem.fields.title : ''}}
        </nuxt-link>
    </div>
  </div>
</template>

<script>
export default {
  props:{
    logo:{
        type: Object,
        default: () => {},
      },
    headerMenu: {
      type: Array,
      default:() => {}
    }
  },
  components: {
    
  },
  setup(props, { root }) {


    return {
  
    };
  }
};
</script>

<style lang="scss" scoped>

.header_module{
  align-items: center;
  background-color: #fff;
  box-shadow: 0 5px 15px #e2dfec8a;
  display: none;
    height: 100px;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 10;
    @media only screen and (min-width: 1024px){
      display: flex;
    }

    &__logo{
      margin: 0 85px 0 90px;
      width: 65px;
    }

}
.heading {
  color: inherit;
  font-family: Bilo,sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;

  &.heading4{
    font-size: 1rem;
    margin-bottom: 10px;

    &.headerlink_module{
    align-items: flex-end;
    display: flex;
    height: 100%;
    margin-bottom: 0;
    margin-right: 40px;
    padding-bottom: 23px;
    @media only screen and (max-width: 1279px){
      font-size: .875rem;
      margin-right: 20px;
    }
    
  }
  
    &.headerlink_popover {
      position: relative
    }
  }
}

.image-wrapper {
    position: relative;
    overflow: hidden;
}
.image-wrapper-constrained {
  display: inline-block;
  vertical-align: top;
}
</style>
