<template>
    <div class="p-6 bg-white border border-gray-200 rounded-lg dark:bg-gray-800 dark:border-gray-700 shadow">
    <!-- <div class="p-6"> -->
        <p><h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white" v-html="email.subject ? email.subject :'' "/></p>
        <div class="text-white font-semibold text-base">
            <p><h5>from: <span class="text-slate-300" v-html="email.from ? email.from :'' "/> </h5></p>
            <p><h5>to: <span class="text-slate-300" v-html="email.to ? email.to :'' "/> </h5></p>
            <p><h5>cc: <span class="text-slate-300" v-html="email.cc ? email.cc :'' "/> </h5></p>
            <p><h5>bcc: <span class="text-slate-300" v-html="email.bcc ? email.bcc :'' "/> </h5></p>
        </div>
        <p class="mb-3 font-normal text-base text-gray-700 dark:text-gray-100 pt-3" v-html="email.message"></p>   
    </div>
</template>

<script setup lang="ts">
import type { PropType } from 'vue';
import type { Email } from "@/models/falconEmailsModels"
import { toRefs } from 'vue';

const props = defineProps({
    email: {
        type: Object as PropType<Email>,
        required: true
    }
})

const {email} = toRefs(props)
</script>

<style scoped></style>