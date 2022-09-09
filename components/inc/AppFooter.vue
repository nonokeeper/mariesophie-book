<template>
    <div class="bg-slate-900 text-white text-center p-8 h-24">
        &copy; {{new Date().getFullYear()}} {{ props.brandName}}. Created with <a target="_blank" href="https://v3.nuxtjs.org/">Nuxt 3</a> and <a target="_blank" href="https://tailwindcss.com/">Tailwind</a>
    </div>
</template>
<script setup lang="ts">
    // Interfaces
    interface Props {
        brandName: string
    };

    // Props & Emit
    const props = defineProps<Props>();
</script>