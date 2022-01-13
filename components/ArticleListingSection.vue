<template>
    <div class="section" :style="content.heading == 'Apply via our job listings page' ? 'background: rgba(71,125,95,.1); padding: 40px 0; margin-bottom: 0px;' : ''">
        <div class="container" :key="index" style="display:flex;">
            <div v-for="article,index in content" :key="index" style="width:33%;">
                <!-- <ImageWrapper :images="[article.fields.thumbnailImage]" :type="article.fields.thumbnailTitle" v-if="article.fields.thumbnailImage" /> -->
                <img :src="article.fields.thumbnailImage.fields.file.url" :alt="article.fields.name" height="300px" width="300px">
                <nuxt-link :to="article.fields.slug" :key="index">
                    <h4 class="section-heading" v-if="article.fields.thumbnailTitle"> {{article.fields.thumbnailTitle}}</h4>
                </nuxt-link>
                
                {{article.fields.thumbnailDescription}}
                <!-- <div class="description sf-heading__description" v-if="article.fields.thumbnailDescription" :key="index">
                    <RichTextRenderer :document="article.fields.thumbnailDescription" />
                </div> -->
                <!-- <div class="video_wrapper" v-if="content.video">
                    <iframe
                        :src="`https://www.youtube.com/embed/${getYouTubeId(content.video[0].fields.file.url)}`"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        title="Ekaterra Video"
                        ></iframe>
                </div> -->
                <!-- <a :href="content.cta[0].fields.slug" target="_balnk" v-if="content.cta && content.cta.length">
                    <button class="btn btn__primary btn__center" :aria-disabled="false" link="" >
                        {{content.cta[0].fields.title}}
                    </button>
                </a> -->
            </div>
        </div>
    </div>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import ImageWrapper from '~/components/ImageWrapper.vue';
export default {
    props: {
        content : {
            type: Array,
        }
    },
    components:{ImageWrapper, RichTextRenderer },
    methods:{
        getYouTubeId(youTubeUrl){
            if (!youTubeUrl) {
                return null;
            }

            let id = null;

            if (youTubeUrl.includes('youtu.be/')) {
                id = youTubeUrl.split('youtu.be/')[1];
            } else {
                let url = youTubeUrl.replace(/(>|<)/gi, '').split(/(vi\/|v=|\/v\/|youtu\.be\/|\/embed\/)/);
                if (url[2] !== undefined) {
                id = url[2].split(/[^0-9a-z_\-]/i);
                id = id[0];
                }
                else {
                id = url;
                }
            }

            return id;
        }
    },
    setup() {
        
    },
}
</script>