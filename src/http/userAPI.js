import { $authHost, $host } from ".";
import {jwtDecode} from "jwt-decode"

export const registration = async (name, surname, email, phone_num, password, permission) => {
    const  {data} = await $host.post('api/users/registration', {name, surname, email, phone_num, password, permission})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const login = async (email, password) => {
    const {data} = await $host.post('api/users/login', {email, password})
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const check = async () => {
    const {data} = await $authHost.get('api/users/auth')
    localStorage.setItem('token', data.token)
    return jwtDecode(data.token)
}

export const fetchUsers = async () => {
    const { data } = await $authHost.get('api/users');
    return data;
};

export const updateUserRole = async (id, permission) => {
    const { data } = await $authHost.put(`api/users/${id}`, { permission });
    return data;
};

export const updateUser = async (id, updatedUserData) => {
    try {
      const token = localStorage.getItem('token');
  
      if (!token) {
        throw new Error('Токен авторизации не найден');
      }
  
      const response = await $authHost.patch(`api/users/${id}`, updatedUserData, {
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };