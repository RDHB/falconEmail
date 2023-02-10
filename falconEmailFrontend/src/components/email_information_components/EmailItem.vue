<template>
    <div>
        <h2 id="accordion-flush-heading-1">
            <button 
                type="button" 
                @click="toggleAccordion()"
                class="flex items-center justify-between w-full py-5 font-medium text-left text-gray-500 border-gray-600 dark:border-gray-600 dark:text-gray-400 gap-2" 
                :class="{'border-b': !isOpen}"
                data-accordion-target="#accordion-flush-body-1" 
                :aria-expanded="isOpen" 
                :aria-controls="`collapse`"
            >
                <span class="font-bold break-words h-full">2023-01-01</span>
                <span class="font-bold break-words h-full">Las lamentaciones pueden ser largas</span>
                <span class="font-bold break-words h-full">example_29@gmail.com</span>
                <span class="font-bold break-keep h-full">example_30@gmail.com, example_31@gmail.com, example_32@gmail.com</span>
                <svg data-accordion-icon class="w-6 h-6 shrink-0" :class="{'rotate-180': isOpen, 'rotate-0': !isOpen}" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </h2>
        <div :id="`collapse`" v-show="isOpen">
            <div class="py-5 font-light border-b border-gray-100 dark:border-gray-500">
                <p class="mb-2 text-gray-500 dark:text-gray-400">Flowbite is an open-source library of interactive components built on top of Tailwind CSS including buttons, dropdowns, modals, navbars, and more.</p>
                <p class="text-gray-500 dark:text-gray-400">Check out this guide to learn how to <a href="/docs/getting-started/introduction/" class="text-blue-600 dark:text-blue-500 hover:underline">get started</a> and start developing websites even faster with components on top of Tailwind CSS.</p>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'

let isOpen = ref<boolean>(false)
function toggleAccordion(){
    isOpen.value = !isOpen.value;
}
</script>

<style scoped>

</style>