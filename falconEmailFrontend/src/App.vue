<template>
  <div class="flex flex-col min-h-screen font-Mukta bg-background-primary">
    <MainHeader/>
    <RouterView />
  </div>
</template>

<script setup lang="ts">
  import { RouterLink, RouterView } from "vue-router";
  import MainHeader from "./components/MainHeader.vue";
</script>

<style scoped></style>