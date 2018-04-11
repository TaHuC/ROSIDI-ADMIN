<template>
    <div class="row">
        <div class="col-4 offset-4 text-left">
            <div class="card">
                <div class="card-header bg-info text-white" >
                    <h3>Регистрация</h3>
                </div>
                <div class="card-body">
                    <form v-on:submit.prevent="singup()">
                        <div class="form-group">
                            <label for="exampleInputEmail1">Email адрес</label>
                            <input type="email" class="form-control" id="exampleInputEmail1" autocomplate="off" v-model="email" aria-describedby="emailHelp" placeholder="Enter email">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword1">Парола</label>
                            <input type="password" class="form-control" v-model="password" autocomplate="off" id="exampleInputPassword1" placeholder="Парола">
                        </div>
                        <div class="form-group">
                            <label for="exampleInputPassword2">Повтори паролата</label>
                            <input type="password" class="form-control" v-model="confrPass" autocomplate="off" id="exampleInputPassword2" placeholder="Повтори паролата">
                        </div>
                        <button type="submit" class="btn btn-outline-primary float-right" >Регистрирай се</button>
                    </form>
                    <p>Ако вече сте регистрирани, влезте от <router-link to="/login">тук</router-link></p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import {db} from '../firebase';

    export default {
        name: 'SingUp',
        data: function(){
            return{
                email: '',
                password: '',
                confrPass: ''
            }
        },
        methods: {
            singup: function(){
                //alert(this.password + ' - ' + this.confrPass);
                if (this.password === this.confrPass) {
                    db.auth().createUserWithEmailAndPassword(this.email, this.password)
                    .then((user) => this.$toastr('success', 'Регитрацията мина успешно'))
                    .catch((error) => { this.$toastr('warning', error.message)});
                }
                
            }
        }
    }
</script>

<style scope>
    
</style>