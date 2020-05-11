import Vue from 'vue'
import Vuex from 'vuex'

// import module section
import auth from './stores/auth.js'

Vue.use(Vuex)
// Define root store
const store = new Vuex.Store({
    // semua module yang dibuat akan ditetapkan didalam bagian ini dan dipisahkan dengan koma untuk setiap modulenya
    module:{
        auth
    },
    // 
    state:{
        token: localStorage.getItem('token'),
        errors: []
    },
    getters:{
        // 
        // 
        // 
        isAuth: state => {
            return state.token != "null" && state.token != null
        }
    },
    mutations:{
        // 
        SET_TOKEN(state, payload){
            state.token = payload
        },
        SET_ERRORS(state, payload){
            state.errors = payload
        },
        CLEAR_ERRORS(state){
            state.errors = []
        }
    }
})

export default store