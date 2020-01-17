<template>
    <div>
        <p>login</p>
        <input type="text" v-model="username" name="username" placeholder="Username">
        <input type="password" v-model="password" placeholder="Password">
        <button @click="senddata()">login</button>
    </div>
</template>

<script>
import Axios from 'axios';
import { type } from 'os';
import LogRocket from 'logrocket';
LogRocket.init('1z17at/vueadmin');
export default {
    data(){
        return{
            username:'',
            password:''
        }
    },
    methods:{
        senddata(){
      
            // alert('ok');
            // var data = new FormData();
            // data.append('username',this.username),
            // data.append('password',this.password);

            let username = this.username;
            let password = this.password;
            
            let data = {
                username:username,
                password : password
            }

            this.$axios.post('http://localhost:3003/test/',data)
            .then(
                function(res){
                    console.log('logged in '+ res);
                }
            )
            .catch(
                (err)=>{
                    console.log("cant logged in "+err[0]);
                }
            );

            // this.$axios(
            //     {
            //         method :'post',
            //         url:"http://localhost:3003/auth/",
            //         data : data,
            //     }
            // )
        }
    }

}   
</script>

<style scoped>

</style>