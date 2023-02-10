<template>
    <thead class="text-lg text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400 font-bold">
        <tr>
            <th v-for="header in headers" scope="col" class="px-6 py-3">
                {{ header }}
            </th>
            <!-- <th class=""></th> -->
        </tr>
    </thead>
</template>

<script setup lang="ts">
import { toRefs } from 'vue';

const props = defineProps({
    headers: Array<String>
})

const {headers} = toRefs(props)
</script>

<style scoped></style>