<template>

    <NuxtLayout currentItem="about">

        <div class="mt-8 grid place-items-center">
            <div>
                <img class="rounded-full w-44" :src="baseURL + aboutData.profile.data.attributes.url"/>
            </div>
            <div class="font-bold">{{ aboutData?.title }}</div>
            <div class="font-light text-sm">{{ aboutData?.subTitle }}</div>
            <span class="my-10 w-2/3 font-light text-gray-500 dark:text-gray-400">{{ aboutData?.content }}</span>
            <div class="mb-5 text-blue-600 cursor-pointer" @click="more = !more">
                {{ more? hideText : moreText }}
            </div>
            <span v-if="more" class="w-2/3 mb-5 font-light text-gray-500 dark:text-gray-400">{{ aboutData?.moreContent }}</span>
        </div>
        
    </NuxtLayout>

</template>

<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig();
    console.log('baseURL : ',runtimeConfig.baseURL);

    interface aboutInterface {
        title:string,
        subTitle:string,
        content:string,
        moreText:string,
        hideText:string,
        moreContent:string,
        profile: {
            data: {
                id:number,
                attributes: {
                    url:string,
                    name:string,
                    formats: {
                        thumbnail: {
                            url:string
                        }
                    }
                }
            }
        }
    };

    const aboutData = ref<aboutInterface>();

    const baseURL :string = runtimeConfig.baseURL;
    const response = await fetch(baseURL+"/api/about?populate=*", {headers: {
        "Access-Control-Allow-Headers": "Origin, X-Requested-With, Content-Type, Accept, Authorization",
        "Access-Control-Allow-Origin": "https://mariesophie-book.vercel.app",
        "Access-Control-Allow-Methods": "*",
    }});
    
    aboutData.value = (await response.json()).data.attributes;
    console.log('aboutData : ', aboutData.value);
    const moreText : string = aboutData.value.moreText;
    const hideText : string = aboutData.value.hideText;
    const more = ref(false);

</script>