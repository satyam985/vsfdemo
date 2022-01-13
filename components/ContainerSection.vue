<template>
    <div class="section" :style="content.heading == 'Contact Us' ? 'background: rgba(71,125,95,.1); padding: 40px 0; margin-bottom: 0px;' : ''">
        <template v-if="content.heading === 'All About Tea'">
            <div class="column_section_wrapper">
                <div class="section__column">
                    <div class="left_col">
                        <h2 class="section-heading" v-if="content.heading"> {{content.heading}}</h2>
                        <div class="description sf-heading__description" v-if="content.description">
                            <RichTextRenderer :document="content.description" />
                        </div>
                        <button class="btn btn__primary btn__center" :aria-disabled="false" link="" v-if="content.cta && content.cta.length">
                            {{content.cta[0].fields.title}}
                        </button>
                    </div>
                </div>
                <div class="section__column">
                    <ImageWrapper :images="content.image" :type="content.heading" v-if="content.image"/>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="container">
                <h2 class="section-heading" v-if="content.heading"> {{content.heading}}</h2>
                <div class="description sf-heading__description" v-if="content.description">
                    <RichTextRenderer :document="content.description" />
                </div>
                <ImageWrapper :images="content.image" :type="content.heading" v-if="content.image"/>
                
                <button class="btn btn__primary btn__center" :aria-disabled="false" link="" v-if="content.cta && content.cta.length">
                    {{content.cta[0].fields.title}}
                </button>
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
    setup() {
        
    },
}
</script>