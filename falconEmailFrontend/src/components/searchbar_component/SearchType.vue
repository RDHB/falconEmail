<template>
        <div class="w-full flex flex-col">
            <div class="w-full flex" @click="toggle()">
                <button class="w-full flex flex-col justify-center items-center bg-gradient-to-l ring-1 from-cyan-500 to-blue-500 hover:bg-gradient-to-bl focus:ring-2 focus:outline-none focus:ring-cyan-300 dark:focus:ring-cyan-800 font-medium text-center rounded-t-lg scellphone:rounded-none text-sm px-4 py-1.5">
                    <span type="text" class="text-white font-medium text-sm text-center">
                        {{ searchType }}
                    </span>
                    <div class="flex flex-row justify-center items-center gap-1.5">
                        <span class="w-full text-xs text-center text-slate-200"> type search </span>
                        <font-awesome-icon icon="fa-solid fa-angle-down" class="text-slate-200" />
                    </div>
                </button>
            </div>
            <div v-show="open" class="w-full h-48 scellphone:h-80 flex scellphone:absolute scellphone:inset-x-0 scellphone:top-14 bg-slate-700/60 rounded-none scellphone:rounded-md transition-opacity duration-150 ease-in">
                <ul class="w-full flex flex-col gap-2 px-5 py-4 scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-600"> <!-- custom scrolbar -->
                    <li v-for="typeSearch in searchTypes" class="text-white">
                        <div class="flex items-center px-5 py-3 rounded bg-slate-700 hover:bg-gray-600" :class="{'bg-gray-600': typeSearch.name==searchType}" @click="selectSearchType(typeSearch.name)">
                            <label :for="typeSearch.name" class="text-gray-300 text-left font-bold">
                                {{ typeSearch.name }}
                                <p class="text-xs font-normal text-gray-300 text-justify border-t pt-2">{{ typeSearch.information }}</p>
                            </label>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
</template>

<script setup lang="ts">
import { useFalconEmailStore } from "@/stores/falconEmail"
import { storeToRefs } from "pinia"
import { ref } from "vue"
import { library } from '@fortawesome/fontawesome-svg-core'
import { faAngleDown } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faAngleDown)

const { searchType, searchTypes } = storeToRefs(useFalconEmailStore())

let open = ref<boolean>(false)

function selectSearchType(type: string) {
    useFalconEmailStore().setSearchType(type)
    open.value = !open.value
}

function toggle() {
    open.value = !open.value
}
</script>

<style scoped>

</style>