import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createDepartments = async (deps) => {
    const {data} = await $authHost.post('api/departments', deps)
    return data
}

export const fetchDepartments = async () => {
    const {data} = await $host.get('api/departments')
    return data
}

export const fetchOneDepartments = async (id) => {
    const {data} = await $host.get('api/departments/' + id)
    return data
}