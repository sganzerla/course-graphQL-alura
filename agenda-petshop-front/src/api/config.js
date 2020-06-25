import axios from 'axios'

export const api = axios.create({
  baseURL: 'http://localhost:4000',
  timeout: 10000,
  headers: {
    'content-type': 'application/json',
  }
})

export const enderecoApi = 'http://localhost:4000'

export const opcoesFetch = (query) => ({
  method: 'post',
  headers: {
    'Content-Type': 'application/json'
  },
  body: JSON.stringify({
    query
  })
})