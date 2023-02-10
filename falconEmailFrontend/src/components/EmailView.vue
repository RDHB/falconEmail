<template>
    <div class="p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow">
    <!-- <div class="p-6"> -->
        <p><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ email.subject}}</h5></p>
        <div class="text-white font-semibold text-base">
            <p><h5>from: <span class="text-slate-300"> {{ email.from }} </span></h5></p>
            <p><h5>to: <span class="text-slate-300"> {{ email.to }} </span></h5></p>
            <p><h5>cc: <span class="text-slate-300"> {{ email.cc }} </span></h5></p>
            <p><h5>bcc: <span class="text-slate-300"> {{ email.bcc }} </span></h5></p>
        </div>
        <p class="mb-3 font-normal text-base text-gray-700 dark:text-gray-100 pt-3">{{ email.message }}</p>   
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';

export interface Email {
    bcc: String,
    cc: String,
    date: String,
    from: String,
    message: String,
    subject: String,
    to: String
}

const props = defineProps({
    email: {
        type: Object as PropType<Email>,
        required: true
    }
})
</script>

<style scoped></style>