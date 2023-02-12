<template>
    <div class="flex flex-col scellphone:flex-row flex-wrap justify-center items-center">
        <div class="relative flex flex-row flex-1">
            <div class="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="dark:text-white" />
            </div>
            <input type="text" v-model="inputTextSearch" id="input-group-1" class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-12" placeholder="Write phrase here" @keyup.enter="getFalconEmails(page, maxDataPage)">
            <div class="absolute inset-y-0 right-0 hidden scellphone:flex flex-row">
                <InstruccionHelp class="flex items-center px-3 invisible scellphone:visible"/>
                <SearchButtom @click=""/>
            </div>
            <InstruccionHelp class="absolute inset-y-0 right-0 flex scellphone:hidden items-center px-3"/>
        </div>
        <div class="flex flex-row scellphone:hidden justify-center w-full py-2">
            <SearchButtom class="w-full" @click="getFalconEmails(page, maxDataPage)"/>
        </div>
    </div>
</template>

<script setup lang="ts">
import InstruccionHelp from './searchbar_component/InstruccionHelp.vue';
import SearchButtom from './searchbar_component/SearchButtom.vue';
import { library } from '@fortawesome/fontawesome-svg-core'
import {faMagnifyingGlass, faCircleInfo} from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { ref } from 'vue';
import { useFalconEmailStore } from "@/stores/falconEmail"
import { storeToRefs } from "pinia";

library.add(faMagnifyingGlass, faCircleInfo)

const { inputTextSearch, page, maxDataPage } = storeToRefs(useFalconEmailStore())
const getFalconEmails = useFalconEmailStore().getFalconEmails

// let inputTextSearch = ref<string>("")
    // @keyup.enter="emit('searchEmails', inputTextSearch)"
</script>

<style scoped></style>