<template>
    
    <NuxtLayout currentItem="home">

        <div class="mt-8 flex">
            <div class="hidden md:flex w-1/3"></div>
            <div class="w-full md:h-2/3 md:w-2/3"><img class="object-cover" src="~/assets/une.png"/></div>
        </div>

        <div v-for="article in articleData" :key="article?.id" class="bg-slate-200 mt-32 h-32 md:h64">
            {{ article?.attributes?.title }} / {{ article?.attributes?.content }}
        </div>

    </NuxtLayout>

</template>
<script setup lang="ts">
    const runtimeConfig = useRuntimeConfig();

    const url = ref(runtimeConfig.baseURL+"/api/articles?populate=*");
    console.log('url : ',url.value);

    const { data: res } = await useFetch(url);
    console.log('data useFetch : ',res.value);

    interface articleInterface {
        id:number,
        attributes: {
            title:String,
            content:String
        },
    };

   const articleData = ref<articleInterface[]>();

    articleData.value = res.value?.data;
    console.log('articleData : ', articleData.value);

</script>