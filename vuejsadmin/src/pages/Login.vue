<template>
  <form class="a" @submit="checkform">
    <md-card class="login">
      <md-card-header class="text-center" data-background-color="green">
        <h4 class="title">Login</h4>
      </md-card-header>

      <md-card-content>
        <div class="mx-auto txtcenter" v-if="errors.length">
          <p>
            <b>Please fix the following errors</b>
          </p>
          <div class="border border-danger">
            <ol class="text-danger sm-txt">
              <li v-for="(error,i) in errors" :key="i">{{error}}</li>
            </ol>
          </div>
        </div>
        <div class="md-layout">
          <div class="md-layout-item md-small-size-50 md-size-100 text-center">
            <md-field>
              <label>Email </label>
              <md-input v-model="username" placeholder="birja@kusmail.com" id="username" name="username" type="text"></md-input>
            </md-field>
          </div>
          <div class="md-layout-item md-small-size-50 md-size-100 text-center">
            <md-field>
              <label>Password</label>
              <md-input v-model="password"  placeholder="Password" id="password" name="password" type="password"></md-input>
            </md-field>
          </div>

          <div class="md-layout-item md-size-100 text-center">
             <button class="md-raised md-success"  @click="submit()">Submit</button>
          </div>
        </div>
      </md-card-content>
    </md-card>
  </form>
</template>
<script>
import axios from "axios";
export default {
  name: "Login",
  props: {
    dataBackgroundColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      formvalue:[],
      username: null,
      password: null,
       errors: []
    };
  },
  methods:{
  checkform(e)
  {
  this.formvalue=[];
  this.errors = [];

      if (!this.username) {
         this.errors.push("Username is required");
      }  
      if (!this.password) {
        this.errors.push("Password is required");
      }
        e.preventDefault();
  },
  submit() {
      var data  = new FormData();
      data.append ("username",this.username),
      data.append("password",this.password);
      
      for (var fields of data.entries()){
        console.log(fields[0] +","+fields[1]);
      }
      // axios
      // ({
      //   method: "post",
      //   url: "http://localhost:3003/auth/",
      //   data: this.username,
        
      // }).then(function(res){
      //   console.log(res);
      // });
      // axios.post('http://localhost:3003/auth/',data);


      axios({
        method: "post",
        url: "http://localhost:3003/auth/",
        // withCredentials: true,
        crossdomain: true,
        data: data,
        headers: {
          "Content-Type": "'X-Requested-With': 'XMLHttpRequest'",
      "Cache-Control": "no-cache",
      "Postman-Token": "42e6c291-9a09-c29f-f28f-11872e2490a5"
        }
      });
      

      // this.$router.push("/dashboard");
    }
},
};
</script>
<style>
.login {
  max-width: 600px;
  margin: auto;
  margin-right: 500px;
  display: block;
  float: right;
}
.a {
  padding: 10% 26%;
}
</style>
<style scoped>
.txtcenter {
  text-align: center;
  padding-bottom: 10px;
  width: 50%;
  margin: auto;
}
.txtcenter ol {
  width: 80%;
margin: auto;
border: 1px solid red;
}
.txtcenter ol li{
  padding-right: 18%;
}
</style>

