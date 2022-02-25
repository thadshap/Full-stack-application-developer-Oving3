import { createStore } from 'vuex'
import RegisterService from "../services/RegisterService.js";


export default createStore({
  state: {
    user: 'Thadshajini Paramsothy',
    registers:[],
    register:{},
    username: ''
  },
  mutations: {
    ADD_USER(state, register){
      state.registers.push(register)
    },
    SET_PROFILE(state, register) {
      state.register = register
    },
    SET_USERNAME(state, username) {
      state.username = username
    },
  },
  actions: {
    createUser({commit}, registerInfo) {
      RegisterService.postContact(registerInfo)
          .then(() => {
            commit('ADD_USER', registerInfo)
          })
          .catch(error => {
            console.log(error)
          })
    },
    fetchProfile({commit, state}, username){
      const existingProfile = state.registers.find(register => register.username === username)
      if(existingProfile){
        commit('SET_PROFILE', existingProfile)
        commit('SET_USERNAME', username)
      } else{
        RegisterService.getProfile(username)
            .then(response => {
              commit('SET_PROFILE', response.data)
            })
            .catch(error =>{
              console.log('User' + username + 'not found' + error)
            })
      }
    }
  },
  modules: {}
})
