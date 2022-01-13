<template>
    <div>
        <template v-if="entries && entries.total > 0 ">
            <GenericPage :content="genericPageData" />
        </template>
        <template v-if="articles && articles.total > 0 ">
            <ArticleDetails :content="articles" />
        </template >
    </div>
</template>

<script>

import GenericPage from '~/components/GenericPage.vue';
import ArticleDetails from '~/components/ArticleDetails.vue';
import {getContentfulEntryItem} from '~/helpers/contentful';
export default {
    components:{
        GenericPage, ArticleDetails
    },
    asyncData ({ $CfClient, error, route}) {
    return Promise.all([
      $CfClient.getEntries({
        'content_type': 'ekaterraPageGeneric',
        'include': 9,
        'fields.slug': `${route.params.pathMatch}`,

      }),
      $CfClient.getEntries({
        'content_type': 'ekaterraPageArticle',
        'include': 9,
        'fields.slug': `${route.params.pathMatch}`,

      })
      ]).then(([entries, articles]) => {
          let [ genericPageData] = [{}];

          if (entries.total === 0 && articles.total === 0) {
                return error({ statusCode: 404, message: 'This page could not be found' });
            }

            if (entries.total > 0 && entries && Object.keys(entries).length) {
                genericPageData = getContentfulEntryItem(entries);
            }

            // console.log('genericPageData', genericPageData)
            // console.log('sections',sections)


        
        return {
          genericPageData,
          entries,
          articles
        
        }
      }).catch(console.error)
  },
}
</script>