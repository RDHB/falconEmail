<template>
    <div class="flex">
        <!-- Dropdown menu -->
        <div class="flex z-10 bg-white divide-y divide-gray-100 rounded-lg shadow w-full  dark:bg-gray-700 dark:divide-gray-600">
            <button id="dropdownDefaultButton" data-dropdown-toggle="dropdown" class="w-full flex flex-col justify-center items-center text-white bg-gradient-to-l ring-1 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm px-5 py-2.5 text-center rounded-t-lg scellphone:rounded-none" disabled type="button"  @click="">
                <input type="text" class="w-full text-white bg-gradient-to-l ring-2 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-sm text-center" v-model="searchType" disabled/>
                <span class="text-xs text-slate-200"> type search</span>
            </button>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFalconEmailStore } from "@/stores/falconEmail"
import { storeToRefs } from "pinia";

const { searchType, searchTypes } = storeToRefs(useFalconEmailStore())



</script>

<style scoped>

</style>