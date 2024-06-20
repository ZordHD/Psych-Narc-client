import {$authHost, $host} from "./index";
import jwt_decode from "jwt-decode";

export const createVacancies = async (vacs) => {
    const {data} = await $authHost.post('api/vacancies', vacs)
    return data
}

export const fetchVacancies = async () => {
    const {data} = await $host.get('api/vacancies')
    return data
}

export const fetchOneVacancies = async (id) => {
    const {data} = await $host.get('api/vacancies/' + id)
    return data
}