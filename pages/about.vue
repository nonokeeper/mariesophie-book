<template>

    <NuxtLayout currentItem="about">

        <div class="mt-8 grid place-items-center">
            <div>
                <img class="rounded-full w-44" :src="baseURL + aboutData?.profile.data.attributes.url"/>
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

<script setup>

    const more = ref(false);
    const aboutData = ref('');
    const moreText = ref('');
    const hideText = ref('');
    const runtimeConfig = useRuntimeConfig();
    const baseURL = runtimeConfig.baseURL;
    const url = ref(baseURL+"/api/about?populate=*");
    console.log('url : ',url.value);

    const { data: res } = await useFetch(url);
    //console.log('data useFetch : ',res.value);

    aboutData.value = res.value?.data?.attributes;

    //console.log('profile image url : ',baseURL + aboutData.value?.profile.data.attributes.url);

    if (aboutData.value) {
        moreText.value = aboutData.value.moreText;
        hideText.value = aboutData.value.hideText;
    }

</script>