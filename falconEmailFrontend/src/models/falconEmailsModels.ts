
export interface Email {
    bcc?: string,
    cc?: string,
    date: string,
    from: string,
    message: string,
    subject?: string,
    to: string
}

export interface EmailResponseGetAll{
    code: number
    message: string
    total_data: number
    total_pages: number
    page: number
    data: Array<EmailInformation>
}

export interface EmailInformation {
    _index: string
    _type: string
    _id: string
    _score: number
    timeStamp: string
    _source: Email
}

export interface ErrorResponse {
    code: number
    message: string
    details: string
}