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

    interface articleInterface {
        id:number,
        attributes: {
            title:String,
            content:String
        },
    };
    const response = await fetch(runtimeConfig.baseURL+'/api/articles?populate=*', {headers: {
        "Access-Control-Allow-Origin": "https://mariesophie-book.vercel.app",
        "Access-Control-Allow-Methods": "*",
    }});

   const articleData = ref<articleInterface[]>();

    articleData.value = (await response.json()).data;
    console.log('articleData : ', articleData.value);

</script>