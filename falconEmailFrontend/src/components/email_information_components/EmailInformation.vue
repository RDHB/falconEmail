<template>
    <div id="accordion-flush" data-accordion="collapse" data-active-classes="bg-white dark:bg-gray-900 text-gray-900 dark:text-white" data-inactive-classes="text-gray-500 dark:text-gray-400" class="w-full dark:bg-slate-700 px-3 pb-6 rounded-xl">
        <EmailItemHeader class="px-3"/>
        <EmailItem class="px-3"/>
        <EmailItem class="px-3"/>
    </div>
</template>

<script setup lang="ts">
import EmailItem from './EmailItem.vue';
import EmailItemHeader from './EmailItemHeader.vue';
import HeaderTableEmail from '../table_email_components/HeaderTableEmail.vue';
</script>

<style scoped>

</style>