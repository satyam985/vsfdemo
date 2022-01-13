<template>
    <div class="section" :style="content.heading == 'Apply via our job listings page' || content.heading == 'Herbal teas: a flavour infusion' ? 'background: rgba(71,125,95,.1); padding: 40px 0; margin-bottom: 0px;' : ''">
        <template>
            <div class="container">
                <ImageWrapper :images="[content.image[0]]" :type="content.heading" v-if="content.image && content.image.length > 0"/>
                <h2 class="section-heading" v-if="content.heading"> {{content.heading}}</h2>
                <div class="description sf-heading__description" v-if="content.description">
                    <RichTextRenderer :document="content.description" />
                </div>
                <ImageWrapper :images="[content.image[1]]" :type="content.heading" v-if="content.image && content.image.length > 1"/>
                <div class="video_wrapper" v-if="content.video">
                    <iframe
                        :src="`https://www.youtube.com/embed/${getYouTubeId(content.video[0].fields.file.url)}`"
                        frameBorder="0"
                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                        loading="lazy"
                        title="Ekaterra Video"
                        ></iframe>
                    <!-- <iframe :src="content.video[0].fieldsiframe.file.url" frameborder="0"></iframe> -->
                </div>
                <a :href="content.cta[0].fields.slug" target="_balnk" v-if="content.cta && content.cta.length">
                    <button class="btn btn__primary btn__center" :aria-disabled="false" link="" >
                        {{content.cta[0].fields.title}}
                    </button>
                </a>
                <div v-if="content.subSection && content.subSection.length > 0" >
                    <template v-for="subsection, index in content.subSection" style="display:flex">
                        <div v-if="content.heading == 'By the people, for the people'" :key="index" style="width:33%" >
                            <div >
                                <h4 class="section-heading" v-if="subsection.fields.title" :key="index"> {{subsection.fields.title}}</h4>
                                <ImageWrapper :images="subsection.fields.image" :type="subsection.fields.title" v-if="subsection.fields.image"  :key="index" />
                                <div class="video_wrapper" v-if="content.video">
                                    <iframe
                                        :src="`https://www.youtube.com/embed/${getYouTubeId(content.video[0].fields.file.url)}`"
                                        frameBorder="0"
                                        allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                                        allowFullScreen
                                        loading="lazy"
                                        title="Ekaterra Video"
                                        ></iframe>
                                    <!-- <iframe :src="content.video[0].fieldsiframe.file.url" frameborder="0"></iframe> -->
                                </div>
                                <div class="description sf-heading__description" v-if="subsection.fields.description" :key="index"> 
                                    <RichTextRenderer :document="subsection.fields.description"  />
                                </div>
                            </div>
                        </div>
                        <div v-else :key="index">
                            <h4 class="section-heading" v-if="subsection.fields.title" :key="index"> {{subsection.fields.title}}</h4>
                            <ImageWrapper :images="subsection.fields.image" :type="subsection.fields.title" v-if="subsection.fields.image"  :key="index" />
                            <div class="description sf-heading__description" v-if="subsection.fields.description" :key="index"> 
                                <RichTextRenderer :document="subsection.fields.description"  />
                            </div>
                        </div>
                        <!-- <h4 class="section-heading" v-if="subsection.fields.title" :key="index"> {{subsection.fields.title}}</h4>
                        <ImageWrapper :images="subsection.fields.image" :type="subsection.fields.title" v-if="subsection.fields.image"  :key="index" />
                        <div class="description sf-heading__description" v-if="subsection.fields.description" :key="index"> 
                            <RichTextRenderer :document="subsection.fields.description"  />
                        </div> -->
                    </template>
                </div>
            </div>
        </template>
    </div>
</template>

<script>
import RichTextRenderer from 'contentful-rich-text-vue-renderer';
import ImageWrapper from '~/components/ImageWrapper.vue';
export default {
    props: {
        content : {
            type: Object,
            default: () => {},
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