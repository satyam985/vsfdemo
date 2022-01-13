<template>
  <div>
    <LazyHydrate when-idle>
      <AppHeader :logo="logo" :headerMenu="headerMenu" />
    </LazyHydrate>

    <div id="layout">
      <nuxt :key="$route.fullPath"/>
    </div>

    <LazyHydrate when-visible>
      <AppFooter :logo="logo" :footerLinks="footerLinks" :footerSocialIcons="footerSocialIcons" :copyrightsDescription="copyrightsDescription" />
    </LazyHydrate>
  </div>
</template>

<script>
import AppHeader from '~/components/AppHeader.vue';
import AppFooter from '~/components/AppFooter.vue';
import LazyHydrate from 'vue-lazy-hydration';
import { getContentsBySectionKey } from '~/helpers/contentful';

export default {
  name: 'DefaultLayout',
  props : [],
  setup (props, context) {
    let [
      logo,
      headerMenu,
      ourCommitmentSubMenu,
      footerLinks,
      copyrightsDescription,
      footerSocialIcons
      
    ] = [{}, [], [], [], {}, [] ]
    let headerData = JSON.parse(JSON.stringify(context.root.$store.state.headerFooterElements))

    if (headerData && Object.keys(headerData).length) {
        logo = getContentsBySectionKey(headerData, {sectionId: 'logo'})
        headerMenu = getContentsBySectionKey(headerData, {sectionId: 'headerMenu'})      
        ourCommitmentSubMenu = getContentsBySectionKey(headerData, {sectionId: 'ourCommitmentSubMenu'})      
        footerLinks = getContentsBySectionKey(headerData, {sectionId: 'footerLinks'})      
        copyrightsDescription = getContentsBySectionKey(headerData, {sectionId: 'copyrightsDescription'})      
        footerSocialIcons = getContentsBySectionKey(headerData, {sectionId: 'footerSocialIcons'}) 
        
        // console.log('logo',logo.fields.image.fields.file.url)
        // console.log('headerMenu',headerMenu[0])
        // console.log('ourCommitmentSubMenu',ourCommitmentSubMenu)
        // console.log('footerLinks',footerLinks)
        // console.log('copyrightsDescription',copyrightsDescription)
        // console.log('footerSocialIcons',footerSocialIcons)

      
    }
    return {
      logo,
      headerMenu,
      ourCommitmentSubMenu,
      footerLinks,
      copyrightsDescription,
      footerSocialIcons
    }
  },
  components: {
    LazyHydrate,
    AppHeader,
    AppFooter,
  },  
};
</script>

<style lang="scss">
@import "~@storefront-ui/vue/styles";

#layout {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  overflow: hidden;
  padding-top: 58px;
  position: relative;
  @media only screen and (min-width: 1024px){
    padding-top: 100px;
  }
}

.no-scroll {
  overflow: hidden;
  height: 100vh;
}

// Reset CSS
html {
  -webkit-tap-highlight-color: transparent;
  font-size: 100%;
  width: auto;
  @include for-mobile {
    overflow-x: hidden;
  }
}
body {
    margin: 0;
    padding: 0;
    -webkit-text-size-adjust: 100%;
    -webkit-font-smoothing: antialiased;
    background-color: #fff;
    color: #000;
    font-family: Bilo,sans-serif;
    font-size: 1rem;
    line-height: 1.32;
  ::selection {
    background-color: #477d5f;
    color: #fff;
  }
  ::before {
    box-sizing: border-box;
  }
  ::after{
    box-sizing: border-box;
  }
}
a {
  text-decoration: none;
  color: var(--c-link);
  &:hover {
    color: var(--c-link-hover);
  }
}
h1 {
  font-family: var(--font-family--secondary);
  font-size: var(--h1-font-size);
  line-height: 1.6;
  margin: 0;
}
h2 {
  font-family: var(--font-family--secondary);
  font-size: var(--h2-font-size);
  line-height: 1.6;
  margin: 0;
}
h3 {
  font-family: var(--font-family--secondary);
  font-size: var(--h3-font-size);
  line-height: 1.6;
  margin: 0;
}
h4 {
  font-family: var(--font-family--secondary);
  font-size: var(--h4-font-size);
  line-height: 1.6;
  margin: 0;
}
</style>
