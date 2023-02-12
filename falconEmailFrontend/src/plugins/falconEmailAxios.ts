import axios from "axios";
import configFalconEmail from "@/configs/constantsFalconEmail"

export const falconEmailAxiosSearch = axios.create({
    baseURL: configFalconEmail.falconEmailURLBaseSearch,
    headers: {
        Authorization: `Bearer ${configFalconEmail.token}`,
    }
})