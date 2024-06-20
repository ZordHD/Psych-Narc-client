import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createServicesRB = async (services) => {
    const {data} = await $authHost.post('api/servicesRB', services)
    return data
}

export const fetchServicesRB = async (page, limit=8) => {
    const {data} = await $host.get('api/servicesRB', {params: {
        page, limit
    }})
    return data
}

export const fetchOneServicesRB = async (id) => {
    const {data} = await $host.get('api/servicesRB/' + id)
    return data
}