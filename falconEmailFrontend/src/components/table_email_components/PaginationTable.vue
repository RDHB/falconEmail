<template>
    <div class="w-full flex flex-col items-center justify-center py-3 bg-slate-400">
        <div class="w-full flex  flex-col xscellphone:flex-row  items-center justify-center">
            <span class="text-sm text-gray-100 flex justify-center dark:text-gray-900 font-bold p-2 border-gray-900 border-0 xscellphone:border-r-2">
                Showing 
                <input type="number" min="1" step="1"  class="font-semibold text-gray-900 dark:text-white mx-1 w-12 bg-slate-400 text-center border-slate-500 border" v-model="maxDataPage" @keyup.enter="setStateMaxDataPage(maxDataPage); getFalconEmails(page, maxDataPage)"/> 
                emails  
            </span>
            <span class="text-sm text-gray-100 flex justify-center dark:text-gray-900 font-bold p-2">
                Page
                <input type="number" min="1" :max="totalPages" step="1"  class="font-semibold text-gray-900 dark:text-white mx-1 w-12 bg-slate-400 text-center border-slate-500 border" v-model="page" @keyup.enter="setStatePage(page); getFalconEmails(page, maxDataPage)"/>
                of 
                <span class="font-semibold text-gray-900 dark:text-white mx-1">{{ totalPages }} </span> 
            </span>
        </div>
        <div class="w-full inline-flex justify-center mt-2 xs:mt-0">
            <!-- Buttons -->
            <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 rounded-l hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white" @click="paginationPrev(page)">
                <svg aria-hidden="true" class="w-5 h-5 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.707 14.707a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 1.414L5.414 9H17a1 1 0 110 2H5.414l2.293 2.293a1 1 0 010 1.414z" clip-rule="evenodd"></path></svg>
                Prev
            </button>
            <button class="inline-flex items-center px-4 py-2 text-sm font-medium text-white bg-gray-800 border-0 border-l border-gray-700 rounded-r hover:bg-gray-900 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white"  @click="paginationNext(page)">
                Next
                <svg aria-hidden="true" class="w-5 h-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-2.293-2.293a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFalconEmailStore } from "@/stores/falconEmail"
import { storeToRefs } from "pinia";

let { page, maxDataPage, totalPages } = storeToRefs(useFalconEmailStore())
const setStateMaxDataPage = useFalconEmailStore().setStateMaxDataPage
const setStatePage = useFalconEmailStore().setStatePage
const paginationNext = useFalconEmailStore().paginationNext
const paginationPrev = useFalconEmailStore().paginationPrev
const getFalconEmails = useFalconEmailStore().getFalconEmails

</script>

<style scoped></style>