import axios from 'axios'

export default {

    async get(endpoint, params) {
        return await new Promise((resolve, reject) => {
            axios.get(endpoint, { params })
                .then(response => {
                    resolve(response.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },

    async post(endpoint, params,header) {
        return await new Promise((resolve, reject) => {
            axios.post(endpoint, params, header)
                .then(response => {
                    resolve(response.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    

    async put(endpoint, params) {
        return await new Promise((resolve, reject) => {
            axios.put(endpoint, params)
                .then(response => {
                    resolve(response.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },
    async delete(endpoint, params) {
        return await new Promise((resolve, reject) => {
            axios.delete(endpoint, params)
                .then(response => {
                    resolve(response.data)
                })
                .catch(err => {
                    reject(err)
                })
        })
    },



}
