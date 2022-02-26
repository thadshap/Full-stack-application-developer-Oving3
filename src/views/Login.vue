<template>
  <div id="loginContainer">
    <div id="loginTitle">
      <label>Please login!</label>
    </div>
    <div id="username">
      <label id="usernameLabel">Username:</label>
      <input v-model="username" id="u">
    </div>
    <div id="password">
      <label id="passwordLabel">Password: </label>
      <input v-model="password" id="p">
      <p id="header">{{header}}</p>
      <div v-if="showRegisterURL"><router-link to="/register">Register</router-link></div>
      <button v-on:click="handleClickSignin" id="logging">Sign in</button>
    </div>
  </div>
</template>

<script>
import Welcome from "./Welcome";

export default {

  name: 'LoginComponent',
  created() {
    this.$store.dispatch('fetchProfiles')
  },

  methods: {
    handleClickSignin (){
      this.showRegisterURL = false
      this.$store.dispatch('fetchProfile', this.username)
      const fetchedProfile = this.$store.state.register

      if(
          fetchedProfile.username === this.username &&
          fetchedProfile.password === this.password
      ){
        this.$router.push({
          name: 'Welcome',
          component: Welcome,
        })
      }else if (fetchedProfile.username === this.username){
           this.header = 'Wrong password'
      }
      else {
        this.header = 'Login failed'
        this.showRegisterURL = true
      }
    }
  },
  data() {
    return {
      username: '',
      password: '',
      name: '',
      header: '',
      showRegisterURL: false
    }
  }
}
</script>

<style scoped>
input{
  margin: 10px;
}
#loginContainer {
  display: grid;
  justify-content: center;
  margin: 40px;
}

#loginTitle {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 20px;
}

#username, #password {
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
}

#usernameLabel, #passwordLabel {
  width: 100px;
}

</style>
