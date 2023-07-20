import axios from 'axios'
export const auth = {
    namespaced: true,
    state: {
        dataUser: null,
        isLoggedIn: false,
    },
    getters: {
        dataUser(state) {
            return state.dataUser
        },
        isLoggedIn(state) {
            return state.isLoggedIn
        },
    },
    mutations: {
        set_data_user(state, data) {
            state.dataUser = data
            state.isLoggedIn = true
        },
        set_is_login(state, data) {
            state.isLoggedIn = data
        },
        reset_data_user(state) {
            state.dataUser = null
            state.isLoggedIn = false
        },
    },
    actions: {
        login({commit,state }, data) {
            return new Promise((resolve, reject) => {
                axios.post('login', data)
                    .then(response => {
                        const token = response.data.data.token.access_token
                        localStorage.setItem('secure_app',token);
                        commit('set_data_user',  response.data.data.record)
                        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token
                        resolve(response)
                    })
                    .catch(err => {
                        commit('reset_data_user')
                        reject(err)
                    })
            })
        },
        logout({ commit }) {
            return new Promise((resolve, reject) => {
                axios.post('logout')
                    .then(response => {
                        commit('reset_data_user')
                        delete axios.defaults.headers.common['Authorization']
                        localStorage.removeItem('secure_app')
                        resolve(response)
                    })
                    .catch(err => {
                        commit('reset_data_user')
                        delete axios.defaults.headers.common['Authorization']
                        localStorage.removeItem('secure_app')
                        reject(err)
                    })
            })
        },
        async isValidLogin ({commit}){
            const getToken = localStorage.getItem('secure_app');
            if (getToken){
                try {
                    let response = await axios.get('cek-token')
                    commit('set_data_user',  response.data.data.record)
                    return true
                } catch (error) {
                    commit('reset_data_user')
                    delete axios.defaults.headers.common['Authorization']
                    localStorage.removeItem('secure_app')
                    return false;
                }
            } else {
                commit('reset_data_user')
                delete axios.defaults.headers.common['Authorization']
                localStorage.removeItem('secure_app')
                return false;
            }


        }
    }


}