import { falconEmailAxiosSearch } from "@/plugins/falconEmailAxios"
import axios, {AxiosError} from "axios";
import type { EmailResponseGetAll, EmailResponseSearch, ErrorResponse } from "@/models/falconEmailsModels"
import configFalconEmail from "@/configs/constantsFalconEmail"
import constants from "@/configs/constants"

function errorHandling(e: any): ErrorResponse { //caul es el mejor tipo aquí 
    const error = e as AxiosError
    if (axios.isAxiosError(error) && error.response) {
        return error.response.data
    } else {
        const errorResponse = {
            "code": 400,
            "message": "At this time it has not been possible to connect to our services. ",
            "details": "error",
        }
        return errorResponse
    }
}

async function getAllEmails(page: number, maxDataPage: number): Promise<EmailResponseGetAll | ErrorResponse> {
    try {
        let response = await falconEmailAxiosSearch.request({
            method: constants.methodPost,
            url: `/${configFalconEmail.faconEmailIndex}/get_all`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "page": page,
                "max_data_page": maxDataPage
            },
            transformResponse: (data) => JSON.parse(data)
        })
        return response.data
    } catch (e) {
        return errorHandling(e)
    }
}

async function getEmailsSearch(page: number, maxDataPage: number, search_type: string, term: string, tagHighlightname: string, classTagHighlight: string): Promise<EmailResponseSearch | ErrorResponse> {
    try {
        let response = await falconEmailAxiosSearch.request({
            method: constants.methodPost,
            url: `/${configFalconEmail.faconEmailIndex}/search_emails`,
            headers: {
                'Content-Type': 'application/json'
            },
            data: {
                "page": page,
                "max_data_page": maxDataPage,
                "search_type": search_type,
                "term": term,
                "tag_highlight_name": tagHighlightname,
                "class_tag_highlight": classTagHighlight
            },
            transformResponse: (data) => JSON.parse(data)
        })
        return response.data
    } catch (e) {
        return errorHandling(e)
    }
}


export default {
    getAllEmails,
    getEmailsSearch
}