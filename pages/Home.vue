<template>
  <div id="home">
    <LazyHydrate when-idle v-for="section,index in sections" :key="index">
    <ContainerSection :content="section.fields" />
     <!-- <template>
      <div class="section">
        <div class="container container__banner">
          <div class="banner_wrapper">
            <div class="image">
              <div style="max-width: 1440px; display: block;">
                <img src="https://cdn.sanity.io/images/7g7h3o8k/production/f92873fb144281ff179f4119efbbbf3714148234-1440x546.png?w=1440&h=546&auto=format" alt="">
              </div>
            </div>
          </div>
        </div>
      </div>
    </template> -->

    </LazyHydrate>

    <!-- <LazyHydrate when-idle>
      <ContainerSection 
      :content="{
        heading: 'We believe in the power of people and plants',
        img: ['https://cdn.sanity.io/images/7g7h3o8k/production/a54c3531fe74890fca614ce962a977422a6b914f-267x267.png?w=267&h=267&auto=format',
              'https://cdn.sanity.io/images/7g7h3o8k/production/0b3ff50dfee29f8b701ccd69411c552d2089c2a9-267x267.png?w=267&h=267&auto=format',
              'https://cdn.sanity.io/images/7g7h3o8k/production/d7b9dfe4a8884dee36b987984f332c8a2f788060-267x267.png?w=267&h=267&auto=format'],
        description: 'Green is our favourite colour - when it comes to our teas and our company mission. We’re growing a world of wellbeing that gives back to the planet and enriches the lives of everyone connected to our business.'
        }" />
    </LazyHydrate> 

    <LazyHydrate when-idle>
      <ContainerSection 
      :content="{
        heading: 'Our Brands',
        cta_title:'DISCOVER',
        img: ['https://cdn.sanity.io/images/7g7h3o8k/production/b576e875229c6e066bc0981214ac62f64cf8f107-203x106.png?w=203&h=106&auto=format',
              'https://cdn.sanity.io/images/7g7h3o8k/production/fbac0795f60e43910d417d4447360cf13a681ea2-105x105.png?w=105&h=105&auto=format',
              'https://cdn.sanity.io/images/7g7h3o8k/production/8f39c5cbe765d7b5227d1def41439da274caf0f4-117x84.png?w=117&h=84&auto=format',
              'https://cdn.sanity.io/images/7g7h3o8k/production/ee34232042db1e7ecb11fe6021131f22d85bf700-129x106.png?w=129&h=106&auto=format',
              'https://cdn.sanity.io/images/7g7h3o8k/production/3a2d1d6bcfe4a0fe70373238954fbe725a690607-203x106.png?w=203&h=106&auto=format',
              'https://cdn.sanity.io/images/7g7h3o8k/production/799ce73bee91222bc7322e948a475dbd1cf4cb57-203x106.png?w=203&h=106&auto=format'


              ],
        description: 'brands, outstanding quality. Our 34-strong portfolio with some of the world’s most popular teas and herbal infusions is constantly evolving to meet the needs of our consumers.'
        }" />

    </LazyHydrate> 

    <LazyHydrate when-idle>
      <ContainerSection
        :content="{
          type: 'column-section',
          heading: 'All About Tea',
          cta_title:'UNEARTH MORE', 
          img: ['https://cdn.sanity.io/images/7g7h3o8k/production/eb03f7e5203d5c8b66c07f11ee652176e82f4216-712x491.png?w=712&h=491&auto=format'],  
          description: 'We serve circa 385 million consumers every day. That means we need to source tea at an enormous scale, all while reducing our environmental impact'
          }" />
    </LazyHydrate>

    <LazyHydrate when-idle>
      <ContainerSection
        :content="{
          heading: 'Our Commitments',
          cta_title:'LEARN MORE', 
          img: ['https://cdn.sanity.io/images/7g7h3o8k/production/9a663bcf6a3a1e8cc3ecaf1d2ea81b7c41368511-696x270.png?w=696&h=270&auto=format'],  
          description: 'Green is our favourite colour - when it comes to our teas and our company mission. We’re growing a world of wellbeing that gives back to the planet and enriches the lives of everyone connected to our business.'
          }" />
    </LazyHydrate> 

    <LazyHydrate when-idle>
      <ContainerSection
        :content="{
          image_module_type: 'grid-view',
          heading: 'Brew Connoisseurs',
          cta_title:'SIP THE FACTS', 
          img: ['https://cdn.sanity.io/images/7g7h3o8k/production/b8734b2bca10ba51ffa8833768d9433df7c1c351-712x491.png?w=712&h=491&auto=format',
                'https://cdn.sanity.io/images/7g7h3o8k/production/5fffb78597df0a3c8488025b2052d513ca3bdc43-338x235.png?w=338&h=235&auto=format',
                'https://cdn.sanity.io/images/7g7h3o8k/production/33587df98961c9b5694b1e612f7b42310c4ab34b-338x235.png?w=338&h=235&auto=format'
          ],  
          description: 'From what gives tea and herbal infusions their unique flavours to its various notable benefits; there’s a lot brewing behind the humble plants.'
          }" />
    </LazyHydrate> 

    <LazyHydrate when-idle>
      <ContainerSection :content="{heading: 'Careers', cta_title:'JOIN OUR BLEND', description: 'for everyone is at the core of ekaterra. We’re a connected community where those that want to do better, belong. Be a part of this amazing blend.'}"></ContainerSection>
    </LazyHydrate> 

    <LazyHydrate when-idle>
      <ContainerSection :content="{heading: 'Contact Us', cta_title:'CONTACT US',backgroundColor:'rgba(71,125,95,.1)', description: 'you need us, we\'re here for you and your needs.'}"></ContainerSection>  
    </LazyHydrate>  -->
  </div>
</template>
<script>
import LazyHydrate from 'vue-lazy-hydration';
import { getContentfulEntryItem,getSectionsFromPageData, getPageSectionWiseData } from '~/helpers/contentful';
import ContainerSection from '~/components/ContainerSection.vue';
export default {
  name: 'Home',
  components: {
    LazyHydrate, ContainerSection
  },
  asyncData (context) {
    return Promise.all([
      context.$CfClient.getEntries({
        'content_type': 'homePage',
        'include': 9,
      })
      ]).then(([entries]) => {
        let [ 
          homePageData,
          sections,
        ] = [ {},[] ]
        if (entries && Object.keys(entries).length) {
          // console.log('entries',entries.items[0].fields.sections)
          homePageData =  getContentfulEntryItem(entries);
          sections = getSectionsFromPageData(homePageData);
          // powerOfPeopleSectionData =  getPageSectionWiseData(entries,'sectionHero');
          // ourBrandsSectionData =  getPageSectionWiseData(entries,'sectionHero');
          // allAboutTeaSectionData =  getPageSectionWiseData(entries,'sectionHero');
          // brewConnoisseursSectionData =  getPageSectionWiseData(entries,'sectionHero');
          // carrersSectionData =  getPageSectionWiseData(entries,'sectionHero');
          // contactUsSectionData =  getPageSectionWiseData(entries,'sectionHero');
          console.log('sections',sections[3].fields.cta);
          // console.log('powerOfPeopleSectionData',powerOfPeopleSectionData);
          // console.log('allAboutTeaSectionData',allAboutTeaSectionData);
          // console.log('brewConnoisseursSectionData',brewConnoisseursSectionData);
          // console.log('carrersSectionData',carrersSectionData);
          // console.log('contactUsSectionData',contactUsSectionData);


        }
        return {
          homePageData,
          sections,
        
        }
      }).catch(console.error)
  },
};
</script>

<style lang="scss" scoped>
#home {
  flex: 1 1 auto;
  padding-top: 40px;
}
</style>
