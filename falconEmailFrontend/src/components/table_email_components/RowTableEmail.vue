<template>
    <tr class="dark:border-gray-700" :class="{'border-b': !isOpen, 'dark:hover:bg-gray-600': !isOpen, 'bg-gray-600': isOpen, 'dark:bg-gray-800': !isOpen}">
        <td @click="toggleAccordion()" scope="row" class="px-6 py-4 break-words" v-html="email.date ? email.date :'' "/>
        <td @click="toggleAccordion()" class="px-6 py-4 break-words" v-html="email.subject ? email.subject :''"/>
        <td @click="toggleAccordion()" class="px-6 py-4 break-words" v-html="email.from ? email.from :''"/>
        <td @click="toggleAccordion()" class="px-6 py-4 break-keep" v-html="email.to ? email.to :''"/>
    </tr>
    <tr class=" dark:border-gray-700 border-b-4" :class="{'dark:hover:bg-gray-600': !isOpen, 'bg-gray-500': isOpen}" v-show="isOpen">
        <td colspan="4">
            <EmailView :email="email"/>
        </td>
    </tr>
</template>

<script setup lang="ts">
import EmailView from '../EmailView.vue';
import { ref, type PropType } from 'vue';
import type { Email } from "@/models/falconEmailsModels"
import { toRefs } from 'vue';

let isOpen = ref<boolean>(false)

function toggleAccordion(){
    isOpen.value = !isOpen.value;
}

const props = defineProps({
    email: {
        type: Object as PropType<Email>,
        required: true
    }
})

const {email} = toRefs(props)
</script>

<style scoped></style>