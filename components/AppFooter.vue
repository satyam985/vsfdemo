<template>
  <div class="footer-module">
    <div class="footer-module__wrapper">
      <nuxt-link :to="localePath(`/${logo.fields.slug ? logo.fields.slug : ''}`)" class="footer-module__logo">
        <div class="image-wrapper image-wrapper-constrained">
          <div style="max-width: 1996px; display: block;">
            <img :src="logo.fields.image.fields.file.url" alt="" style="max-width: 100%; display: block; position: static;">
          </div>
        </div>
      </nuxt-link> 
      <div class="footer-module__info">
        <div class="footer-module__links">
          <nuxt-link v-for="linkItem,index in footerLinks" :key="index" :to="localePath(`/${linkItem.fields.slug ? linkItem.fields.slug : ''}`)" class="heading heading-4 footer-module__link">
            {{linkItem.fields.title ? linkItem.fields.title : ''}}
          </nuxt-link>
        </div>
        <div class="paragraph">
          <div>
            <div class="paragraph paragraph-2 text">
              <RichTextRenderer :document="copyrightsDescription" />
            </div>
          </div>
        </div>
      </div>
      <div class="footer-module__social-links">
        <div v-for="socialIcon,index in footerSocialIcons" :key="index" class="footer-module__social-link">
          <a :href="socialIcon.fields.slug" target="_blank" v-if="socialIcon.fields.slug">
            <img :src="socialIcon.fields.image.fields.file.url" class="footer__social-image"   :alt="socialIcon.fields.title ? socialIcon.fields.title : ''" width="32" height="32" />
          </a>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';

export default {
  props:{
    logo:{
        type: Object,
        default: () => {},
      },
    footerLinks:{
        type: Array,
        default: () => {},
      },
    footerSocialIcons:{
        type: Array,
        default: () => {},
      },
    copyrightsDescription:{
        type: Object,
        default: () => {},
    }
  },
  components: {
   RichTextRenderer
  },
  data() {
    return {
      aboutUs: ['Who we are', 'Quality in the details', 'Customer Reviews'],
      departments: ['Women fashion', 'Men fashion', 'Kidswear', 'Home'],
      help: ['Customer service', 'Size guide', 'Contact us'],
      paymentsDelivery: ['Purchase terms', 'Guarantee'],
      social: ['facebook', 'pinterest', 'google', 'twitter', 'youtube'],
      isMobile: false,
      desktopMin: 1024
    };
  }
};
</script>

<style lang="scss">
.heading {
  color: inherit;
  font-family: Bilo,sans-serif;
  font-style: normal;
  font-weight: 600;
  line-height: 1.3;

  &.heading-4 {
    // font-size: 1rem;
    margin-bottom: 10px;
  }
}

.footer-module {
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    width: 100%;

    &__wrapper {
      display: flex;
      justify-content: center;
      padding: 43px 0;
      width: 840px;
    }
    &__logo{
      height: 73px;
      margin-right: 83px;
      width: 118px;
    }
    &__info{
      margin-right: 65px;
    }
    &__links {
        margin-bottom: 20px;
      }
    &__link {
      font-size: .75rem;
      margin-right: 40px;
      text-decoration: unset;
    }
    &__social-links {
      display: flex;
    }
    &__social-link{
      margin-right: 20px;
    }
}

.paragraph {
    color: inherit;
    font-family: Bilo,sans-serif;
    font-style: normal;
    font-weight: 400;
    line-height: 1.32;

    &.paragraph-2{
      font-size: .875rem;
      margin-bottom: 20px;

      &.text {
        margin-bottom: 0;
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
