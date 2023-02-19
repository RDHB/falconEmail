import { ref } from "vue";
import { defineStore } from "pinia";
import falconEmailAxios from "@/functions/consume_api"
import type { EmailInformation, EmailResponseGetAll, EmailResponseSearch, ErrorResponse } from "@/models/falconEmailsModels"
import type { SearchTypes, InstrucctionHelp } from "@/models/misscelaneos"


export const useFalconEmailStore = defineStore("falconEmailStore", () => {
    const emailsInformation = ref<Array<EmailInformation>>([])
    const page = ref<number>(1)
    const maxDataPage = ref<number>(5)
    const totalPages = ref<number>(0)
    const inputTextSearch = ref<string>("")
    const tagHighlightname= ref<string>("span") 
    const classTagHighlight= ref<string>("text-cyan-300")
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
    ])
    const instrucctionsHelp = ref<Array<InstrucctionHelp>>([
        {
            name: '"Word"',
            information: "When your search for a word, just type the word inside the text box. ",
            apply: "Apply for: matchphrase, match, term, querystring."
        },
        {
            name: '"Column:Word"',
            information: 'When searching for a word in an email in any of the displayed columns, including: message, cc, bcc. Type the column name, followed by the word you want to search for, separated by a colon. ',
            apply: 'Apply for: querystring.'
        },
        {
            name: '"-Column:Word"',
            information: 'When searching for an email that does not contain a word in any of the displayed columns, including: message, cc, bcc. Type " - ", followed by the column name, followed by the word you want to search for, separated by a colon.',
            apply: 'Apply for: querystring.'
        },
        {
            name: '"Column:Word1 Word2"',
            information: 'When searching for an email containing any of the words in any of the displayed columns, including: message, cc, bcc. Type the column name, followed by the words you want to search for (separated by a space).',
            apply: 'Apply for: querystring.'
        },
    ])
    const headersTableEmails = ref<Array<string>>(["Date", "Subject", "From", "To"])

    function setStateMaxDataPage(maxDataPageC: number | string){
        if (maxDataPageC > 0 && maxDataPageC != null) {
            const maxDataPageCC = maxDataPageC as number
            maxDataPage.value = maxDataPageCC
            page.value = 1
            return
        }

        if (maxDataPageC <= 0 || maxDataPageC == "") {
            maxDataPage.value = 1
            return
        }
    }

    function setStatePage(pageC: number | string){
        if (pageC > 0 && pageC != null) {
            const pageCC = pageC as number
            page.value = pageCC
            return
        }

        if (pageC <= 0 || pageC == "") {
            page.value = 1
            return
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
            falconEmailAxios.getEmailsSearch(
                pageP, 
                maxDataPageP, 
                searchType.value, 
                inputTextSearch.value, 
                tagHighlightname.value, 
                classTagHighlight.value
            )
            .then((response: EmailResponseSearch | ErrorResponse) => {
                if (response.code == 200) {
                    const res = response as EmailResponseSearch
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
        instrucctionsHelp,
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
