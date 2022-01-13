<template>
    <div class="">
        <!-- {{content.items[0].fields.content}} -->
        <LazyHydrate>
            <GenericPageSection :content="{heading:'', image : content.items[0].fields.image, description : content.items[0].fields.description} " />
        </LazyHydrate>
        <LazyHydrate when-idle v-for="section,index in sections" :key="index">
            <GenericPageSection :content="section.fields" />   
        </LazyHydrate>
    </div>
</template>

<script>
import LazyHydrate from 'vue-lazy-hydration';
import GenericPageSection from '~/components/GenericPageSection.vue';
import ArticleListingSection from '~/components/ArticleListingSection.vue';
import {getSectionsFromPageData, getArticlesThumbnailForAPage} from '~/helpers/contentful';
export default {
    props:{
        content:{
            type:Object,
            default: ()=> {}
        }
    },
    components: { GenericPageSection, ArticleListingSection, LazyHydrate },
    setup(props) {
        let [sections, articles] = [[],[]];
        sections = getSectionsFromPageData(props.content.items[0].fields)
        // console.log('sections', sections)
        // articles = getArticlesThumbnailForAPage(props.content)
        return{
            sections,
            // articles
        }
    },
}
</script>