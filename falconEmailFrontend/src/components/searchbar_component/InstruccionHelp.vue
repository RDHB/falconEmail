<template>
    <div>
        <div @click="toggle()">
            <div>
                <font-awesome-icon icon="fa-solid fa-circle-info" class="dark:text-white hover:text-slate-500"/>
            </div>
        </div>
        <ModalInformation  v-show="open"/>
    </div>
</template>

<script setup lang="ts">
import ModalInformation from "@/components/ModalInformation.vue"
import { library } from "@fortawesome/fontawesome-svg-core"
import { faCircleInfo } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome"
import { ref } from "vue"
 
library.add(faCircleInfo)

const open = ref<boolean>(false)

function toggle() {
    open.value = !open.value
}
</script>

<style scoped></style>