<template>
  <main>
    <div class="flex flex-col">
      <SearchBar class="px-8 pt-8" @search-emails="searchEmails"/>
      <!-- first way -->
      <div class="pt-8 px-8 flex flex-col ">
        <EmailTable :headers="headers" :emailsInformation="emailsInformation"/>
        <PaginationTable :page="Number(page)" :total-pages="Number(totalPages)" :max-data-page="Number(maxDataPage)" />
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
import falconEmailAxios from "@/functions/consume_api"
import type { EmailInformation, EmailResponseGetAll, ErrorResponse } from "@/models/falconEmailsModels"
import { ref, onMounted } from "vue"

const headers = ["Date", "Subject", "From", "To"]

let emailsInformation = ref<Array<EmailInformation>>([])
let page = ref<number>(1)
let maxDataPage = ref<number>(10)
let totalPages = ref<number>(0)

onMounted(async () => {
  falconEmailAxios.getAllEmails(page.value, maxDataPage.value)
  .then((response) => {
    if (response.code == 200) {
      const res = response as EmailResponseGetAll
      emailsInformation.value = res.data
      totalPages.value = res.total_pages
      page.value = res.page
    }
  })
})





// functions
function searchEmails(searchString: string){
  if (searchString != "") {
    // falconEmailAxios.getAllEmails()
  }
} 
</script>