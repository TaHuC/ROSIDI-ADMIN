<template>
    <div class="row">
        <div class="col-4 offset-4 text-left">
            <div class="card">
                <div class="card-header bg-info text-white" >
                    <h3>Вход</h3>
                </div>
                <div class="card-body">
                    <form v-on:submit.prevent="singIn">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email адрес</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" v-model="email" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Парола</label>
                            <input type="password" class="form-control" id="exampleInputPassword1" v-model="password" placeholder="Password">
                        </div>
                        <button type="submit" class="btn btn-outline-primary float-right">Вход</button>
                    </form>
                    <p>Ако нямате регистрация. Може да се регистрирате от <router-link to="/sing-up" >тук</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import {db} from '../firebase';
    export default {
        name: 'Login',
        data: function(){
            return {
                email: '',
                password: ''
            }
        },
        methods: {
            singIn: function(){
                db.auth().signInWithEmailAndPassword(this.email, this.password)
                .then((user) => {
                    this.$toastr('success', 'Добре дошли!');
                    this.$router.replace('/');
                },
                (err) => {
                    this.$toastr('warning', err.message);
                });
                
            }
        }
    }
</script>

<style scoped>
</style>