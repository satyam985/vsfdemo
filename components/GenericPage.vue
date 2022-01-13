<template>
    <div class="">
        <LazyHydrate when-idle v-for="section,index in sections" :key="index">
            <GenericPageSection :content="section.fields" />   
        </LazyHydrate>
        <LazyHydrate>
        <ArticleListingSection :content="articles" v-if="articles && articles.length > 0" />
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
        sections = getSectionsFromPageData(props.content)
        articles = getArticlesThumbnailForAPage(props.content)
        return{
            sections,
            articles
        }
    },
}
</script>