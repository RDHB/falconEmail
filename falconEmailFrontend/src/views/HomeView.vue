<template>
  <main>
    <div class="flex flex-col">
      <SearchBar class="px-8 pt-8"/>
      <div class="pt-8 px-8 flex flex-col ">
        <EmailTable :headers="headersTableEmails" :emailsInformation="emailsInformation"/>
        <PaginationTable/>
      </div>
    </div>
  </main>
</template>

<script setup lang="ts">
import EmailTable from "@/components/EmailTable.vue"
import SearchBar from "@/components/SearchBar.vue"
import PaginationTable from "@/components/table_email_components/PaginationTable.vue"
import { useFalconEmailStore } from "@/stores/falconEmail"
import { storeToRefs } from "pinia";

let { emailsInformation, headersTableEmails} = storeToRefs(useFalconEmailStore())

useFalconEmailStore().initEmailsInformation()
</script>