import { ref, computed } from "vue";
import { defineStore } from "pinia";
import falconEmailAxios from "@/functions/consume_api"
import type { EmailInformation, EmailResponseGetAll, ErrorResponse } from "@/models/falconEmailsModels"


export const useFalconEmailStore = defineStore("falconEmailStore", () => {
    const emailsInformation = ref<Array<EmailInformation>>([])
    const page = ref<number>(1)
    const maxDataPage = ref<number>(5)
    const totalPages = ref<number>(0)
    const inputTextSearch = ref<string>("")
    const searchType = ref<string>("match")
    const searchTypes = ref<Array<string>>(["match", "matchphrase", "term", "querystring", "prefix", "wildcard", "fuzzy", "daterange"])
    const headersTableEmails = ref<Array<string>>(["Date", "Subject", "From", "To"])

    function setStateMaxDataPage(maxDataPageC: number){
        if (maxDataPageC > 0 && maxDataPageC != null) {
            maxDataPage.value = maxDataPageC
        }
    }

    function setStatePage(pageC: number){
        if (pageC > 0 && pageC != null) {
            page.value = pageC
        }
    }

    function paginationNext(pageC: number) {
        if (pageC >= 1 && pageC <= totalPages.value - 1) {
            page.value = pageC + 1
            getFalconEmails(page.value, maxDataPage.value)
        }
    }

    function paginationPrev(pageC: number) {
        if (pageC >= 2 && pageC <= totalPages.value) {
            page.value = pageC - 1
            getFalconEmails(page.value, maxDataPage.value)
        }
    }

    function initEmailsInformation() {
        falconEmailAxios.getAllEmails(page.value, maxDataPage.value)
        .then((response: EmailResponseGetAll | ErrorResponse) => {
            if (response.code == 200) {
                const res = response as EmailResponseGetAll
                emailsInformation.value = res.data
                totalPages.value = res.total_pages
                page.value = res.page
            }
        })
    }

    function getFalconEmails(pageP: number, maxDataPageP: number) {
        if (inputTextSearch.value == "" && pageP > 0 && maxDataPageP > 0) {
            falconEmailAxios.getAllEmails(pageP, maxDataPageP)
            .then((response: EmailResponseGetAll | ErrorResponse) => {
                if (response.code == 200) {
                    const res = response as EmailResponseGetAll
                    emailsInformation.value = res.data
                    totalPages.value = res.total_pages
                    page.value = res.page
                } 
            })
        } else if (pageP > 0 && maxDataPageP > 0 && searchTypes.value.includes(searchType.value)){
            falconEmailAxios.getEmailsSearch(pageP, maxDataPageP, searchType.value, inputTextSearch.value)
            .then((response: EmailResponseGetAll | ErrorResponse) => {
                if (response.code == 200) {
                    const res = response as EmailResponseGetAll
                    emailsInformation.value = res.data
                    totalPages.value = res.total_pages
                    page.value = res.page
                } 
            })
        }

    }

    function setDefaultSearchType() {
        searchType.value = searchTypes.value[0]
    }

    return { 
        emailsInformation, 
        page, 
        maxDataPage, 
        totalPages, 
        inputTextSearch, 
        headersTableEmails,
        searchType,
        searchTypes,
        initEmailsInformation,
        getFalconEmails,
        setStateMaxDataPage,
        setStatePage,
        paginationNext,
        paginationPrev,
        setDefaultSearchType,
    }
})
