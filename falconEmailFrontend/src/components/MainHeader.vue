<script setup lang="ts">
import { RouterLink } from 'vue-router';
</script>

<template>
    <!-- <header class="sticky top-0 bg-background-secondary shadow-lg"> -->
    <header class="top-0 bg-background-secondary shadow-lg">
        <nav class="flex flex-col sm:flex-row items-center gap-4 text-white py-6">
            <RouterLink :to="{name:'home'}" class="flex flex-1">
                <div class=" flex flex-row flex-wrap items-center justify-center gap-3 flex-1 ">
                    <img
                        alt="Falcon logo"
                        src="@/assets/falcon_logo.svg"
                        width="120"
                        height="120"
                    />
                    <span class="text-2xl sm:text-3xl md:text-6xl font-Pacifico">FalconEmail</span>
                </div>
            </RouterLink>
        </nav>
    </header>
</template>
