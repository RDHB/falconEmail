<template>
  <main>
    <div class="flex flex-col">
      <SearchBar class="px-8 pt-8"/>
      <!-- first way -->
      <div class="pt-8 px-8 flex flex-col ">
        <EmailTable :headers="headersTableEmails" :emailsInformation="emailsInformation"/>
        <PaginationTable/>
      </div>
      <!-- second way --> 
      <!-- <div class="flex flex-col md:flex-row justify-center items-stretch px-8 pt-8 gap-5">
        <div class="w-full md:w-8/12">
            <EmailTable :headers="headers" :emailsInformation="emailsInformation"/>
            <PaginationTable/>
        </div>
        <EmailView class="w-full md:w-4/12" :emailsInformation="emailsInformation"/> 
      </div>-->
    </div>
  </main>
</template>

<script setup lang="ts">
import EmailTable from "@/components/EmailTable.vue"
import EmailView from "@/components/EmailView.vue"
import SearchBar from "@/components/SearchBar.vue"
import PaginationTable from "@/components/table_email_components/PaginationTable.vue"
import { useFalconEmailStore } from "@/stores/falconEmail"
import { storeToRefs } from "pinia";

let { emailsInformation, headersTableEmails, page, maxDataPage, totalPages, inputTextSearch} = storeToRefs(useFalconEmailStore())

useFalconEmailStore().initEmailsInformation()
</script>