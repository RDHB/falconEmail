import { ref, computed } from "vue";
import { defineStore } from "pinia";
import falconEmailAxios from "@/functions/consume_api"
import type { EmailInformation, EmailResponseGetAll, ErrorResponse } from "@/models/falconEmailsModels"
import type { SearchTypes } from "@/models/misscelaneos"


export const useFalconEmailStore = defineStore("falconEmailStore", () => {
    const emailsInformation = ref<Array<EmailInformation>>([])
    const page = ref<number>(1)
    const maxDataPage = ref<number>(5)
    const totalPages = ref<number>(0)
    const inputTextSearch = ref<string>("")
    const searchType = ref<string>("match")
    const searchTypesArray = ref<Array<string>>(["match", "matchphrase", "term", "querystring", "prefix", "wildcard", "fuzzy", "daterange"])
    const searchTypes = ref<Array<SearchTypes>>([
        {
            name: "match", 
            information: "A match query is like a term query, but the input text is analyzed first"
        },
        {
            name: "matchphrase", 
            information: "The match phrase query is like the phrase query, but the input text is analyzed and a phrase query is built with the terms resulting from the analysis"
        },
        {
            name: "term", 
            information: "A term query searches for an exact term"
        }, 
        {
            name: "querystring",
            information: "The query language query allows humans to describe complex queries using a simple syntax"
        },
        {
            name: "prefix",
            information: "The prefix query finds documents containing terms that start with the provided prefix"
        },
        {
            name: "wildcard", 
            information: "The wildcard query finds documents containing term that start with the provided wildcard"
        },
        {
            name: "fuzzy", 
            information: "A fuzzy query is a term query that matches terms within a specified edit distance (Levenshtein distance)"
        },
        {
            name: "daterange",
            information: "The date range query finds documents containing a date value in the specified field within the specified range."
        }
    ])
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
                    return
                } 
            })
            return
        } 
        
        if (pageP > 0 && maxDataPageP > 0 && searchTypesArray.value.includes(searchType.value)){
            falconEmailAxios.getEmailsSearch(pageP, maxDataPageP, searchType.value, inputTextSearch.value)
            .then((response: EmailResponseGetAll | ErrorResponse) => {
                if (response.code == 200) {
                    const res = response as EmailResponseGetAll
                    emailsInformation.value = res.data
                    totalPages.value = res.total_pages
                    page.value = res.page
                    return
                } 
            })
            return
        }

    }

    function setDefaultSearchType() {
        searchType.value = searchTypes.value[0].name
    }

    function setSearchType(type: string) {
        searchType.value = type
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
        setSearchType
    }
})
