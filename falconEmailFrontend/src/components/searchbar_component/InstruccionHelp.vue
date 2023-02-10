<template>
    <div>
        <font-awesome-icon icon="fa-solid fa-circle-info" class="dark:text-white hover:text-slate-500"/>
    </div>
</template>

<script setup lang="ts">
import { library } from '@fortawesome/fontawesome-svg-core'
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faCircleInfo)
</script>

<style scoped>

</style>