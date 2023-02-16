<template>
    <div class="w-60  h-80 absolute right-0 scellphone:right-0 top-14 scellphone:top-14 transition-opacity duration-100 rounded-md bg-slate-700/50 text-white scrollbar-thin scrollbar-thumb-slate-500 scrollbar-track-slate-600">
        <div class="flex flex-col justify-center items-center p-5">
            <h1 class="w-full flex justify-center text-center font-bold text-xl bg-slate-700 px-5 py-4">
                Guide Sintax
            </h1>
            <div class="flex flex-col gap-2 justify-center items-center pt-2">
                <div v-for="instrucctionHelp in instrucctionsHelp"  class="flex flex-col gap-1 justify-center items-center bg-slate-700 p-5">
                    <h2 class="text-base text-cyan-300 font-semibold text-left">    
                        {{ instrucctionHelp.name }}
                    </h2>
                    <span class="text-slate-300 text-xs text-justify border-t pt-3">
                        {{ instrucctionHelp.information }}  
                        <br/>    
                        <strong class="text-cyan-500">{{ instrucctionHelp.apply }}</strong>
                    </span>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { useFalconEmailStore } from "@/stores/falconEmail"
import { storeToRefs } from "pinia"

const { instrucctionsHelp } = storeToRefs(useFalconEmailStore())
</script>

<style scoped>

</style>