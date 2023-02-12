<template>
    <div class="flex flex-row justify-center items-center">
        <div class="w-full overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <HeaderTableEmail :headers="headers"/>
                <tbody>
                   <RowTableEmail v-for="emailInformation in emailsInformation" :email="emailInformation._source" />
                </tbody>
            </table>
        </div>
    </div>
</template>

<script setup lang="ts">
import HeaderTableEmail from './table_email_components/HeaderTableEmail.vue';
import RowTableEmail from './table_email_components/RowTableEmail.vue';
import type { EmailInformation } from "@/models/falconEmailsModels"
import { toRefs } from 'vue';

const props = defineProps({
    headers: {
        type: Array<String>,
        required: true
    },
    emailsInformation: {
        type: Array<EmailInformation>,
        required: true
    }
})

const {headers} = toRefs(props)
const {emailsInformation} = toRefs(props)
</script>

<style scoped></style>