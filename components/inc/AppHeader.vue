<template>
<!--
    <nav class="bg-white px-2 sm:px-4 py-2.5 rounded dark:bg-gray-800">
        <div class="container flex flex-wrap justify-between items-center mx-auto">
            <a href="/" class="flex items-center">
                <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Marie-Sophie Robert</span>
            </a>
            <button data-collapse-toggle="mobile-menu" type="button" class="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu" aria-expanded="false">
            <span class="sr-only">Open main menu</span>
            <svg class="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clip-rule="evenodd"></path></svg>
            <svg class="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
            <div class="hidden w-full md:block md:w-auto" id="mobile-menu">
                <ul class="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li v-for="(menu, index) in menuItems">
                        <a :href="menu.url" :class="(menu.code == props.currentItem)? active : notActive">
                            {{ menu.label }}
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    ------>
    <!-- Responsive Navbar -->
    <div class="bg-white">
        <div class="flex justify-between items-center p-6 px-6 lg:px-0 container mx-auto">
            <!-- MENU -->
            <div class="flex space-x-4 ml-4">
                <!-- Brand Name or Logo -->
                <a href="/" class="flex items-center mr-12">
                    <span class="self-center text-xl font-semibold whitespace-nowrap dark:text-white">Marie-Sophie Robert</span>
                </a>
            
                <!-- Desktop menu -->
                <ul class="hidden items-center md:flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
                    <li v-for="(menu, index) in menuItems">
                        <a :href="menu.url" :class="(menu.code == props.currentItem)? active : notActive">
                            {{ menu.label }}
                        </a>
                    </li>
                </ul>

                <!-- button show mobile menu -->
                <div class="md:hidden flex items-center" @click="toggle">
                    <i class="fa-solid fa-bars"></i>
                </div>
            </div>
        </div>
    </div>
    <!-- Mobile menu -->
    <div v-if="showMobileMenu" class="md:hidden">
        <a class="text-sm font-semibold block py-2 px-4 hover:text-blue-500" v-for="(menu, index) in menuItems" :href="menu.url">
            {{ menu.label }}
        </a>
    </div>
    <!-- End Responsive Navbar -->

</template>

<script setup lang="ts">
    // Interfaces
    interface Props {
        currentItem: string
    };

    // Props & Emit
    const props = defineProps<Props>();

    // Variables
    const active = ref('md:text-blue-700');
    const showMobileMenu = ref(false);
    const notActive = ref('link link-underline link-underline-blue md:hover:text-blue-700');
    const menuItems = [{"code":"home", "label": "Home", "url": "/"},
        {"code":"portfolio", "label": "Portfolio", "url": "/portfolio"}, 
        {"code":"about", "label": "About me", "url": "/about"},
        {"code":"contact" , "label": "Contact", "url": "/contact"}
    ];

    //Functions
    const toggle = () => {
        showMobileMenu.value = !showMobileMenu.value;
    }        
</script>