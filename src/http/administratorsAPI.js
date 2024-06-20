import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createAdministrators = async (admins) => {
    const {data} = await $authHost.post('api/administrators', admins)
    return data
}

export const fetchAdministrators = async (page, limit=3) => {
    const {data} = await $host.get('api/administrators', {params: {
        page, limit
    }})
    return data
}

export const fetchOneAdministrators = async (id) => {
    const {data} = await $host.get('api/administrators/' + id)
    return data
}