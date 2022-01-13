<template>
    <div class="image_modules">
        <template v-if="type == 'Brew Connoisseurs' || type == 'It’s all in the leaves'">
            <div class="image_wrapper ">
                <div class="gallery">
                    <template>
                        <div class="col1">
                            <img :src="images[0].fields.file.url" alt="">
                        </div>
                        <div class="col2">
                            <div v-for="image,index in images.slice(1)" :key="index">
                                <img :src="image.fields.file.url" alt="">
                            </div>
                        </div>
                    </template>
                </div>
            </div>
        </template>
        <template v-else>
            <div class="image_wrapper" v-for="image,index in images" :key="index">
                <img :src="image.fields.file.url" alt="">
            </div>
        </template>
    </div>
</template>

<script>
export default {
    props:{
        images:{
            type:Array,
            default: () => {}
        },
        type:{
            type:String,
            default: ""
        }

    },
    setup() {
        
    },
}
</script>