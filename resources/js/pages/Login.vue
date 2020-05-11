<template>
    <div class="container">
        <div class="login-box">
            <div class="login-logo">
                <router-link :to="{ name: 'home'}"><b>OH</b>Laundry</router-link>
            </div>
            <div class="login-box-body">
                <p class="login-box-msg">Sign in to start your session</p>

                <div class="form-group has-feedback" :class="{'has-error': errors.email}">
                    <input type="email" class="form-control" placeholder="Email" v-model="data.email">
                    <span class="glyphicon glyphicon-envelope form-control-feedback"></span>
                    <p class="text-danger" v-if="errors.email">{{ errors.email[0] }}</p>
                </div>
                <div class="form-group has-feedback" :class="{'has-error' : errors.password}">
                    <input type="password" class="form-control" placeholder="Password" v-model="data.password">
                    <span class="glyphicon glyphicon-lock form-control-feedback"></span>
                    <p class="text-danger" v-if="errors.password">{{ errors.password }}</p>
                </div>
                <div class="alert alert-dange" v-if="errors.invalid">{{ errors.invalid }}</div>
                <div class="row">
                    <div class="col-xs-8">
                        <div class="checkbox">
                            <label for="">
                                <input type="checkbox" v-model="data.remember_me">Remeber me
                            </label>
                        </div>
                    </div>
                    <div class="col-xs-4">
                        <button type="submit" class="btn btn-primary btn-block btn-flat" @click.prevent="postLogin">Login</button>
                    </div>
                </div>

                <a href="#">I forgot my password</a>
            </div>
        </div>
    </div>
</template>
<script>
import { mapActions, mapMutations, mapGetters, mapState } from "vuex";

export default {
    data(){
        return{
            data: {
                email:'',
                password:'',
                remember_me: false
            }
        }
    },
    // sebelum component di render
    created(){
        // melakukan pengecekan jika sudah login dimana value isauth bernilai true
        if (this.isAuth) {
            // diriderct ke route dengan name home
            this.$router.push({ name: 'home' })
        }
    },
    computed: {
        ...mapGetters(['isAuth']), // mengambil getters isauth dari vuex
        ...mapState(['errors'])
    },
    methods: {
        ...mapActions('auth',['submit']),
        ...mapMutations(['CLEAR_ERRORS']),

        postLogin(){
            this.submit(this.data).then(() => {
                if (this.isAuth) {
                    this.CLEAR_ERRORS()
                    this.$router.push({ name: 'home' })
                }
            })
        }
    }
}
</script>