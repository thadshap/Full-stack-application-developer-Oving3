<template>
  <div id="registerContainer">
    <div id="registerTitle">
      <label>Register yourself!</label>
    </div>
    <div id="fullName">
      <label id="fullNameLabel">Full name:</label>
      <textarea v-model="registerInfo.fullName"></textarea>
    </div>
    <div id="address">
      <label id="addressLabel">Address: </label>
      <textarea v-model="registerInfo.address"></textarea>
    </div>
    <div id="username">
      <label id="usernameLabel">Username:</label>
      <textarea v-model="registerInfo.username"></textarea>
    </div>
    <div id="password">
      <label id="passwordLabel">Password: </label>
      <textarea v-model="registerInfo.password"></textarea>
    </div>
    <div id="email">
      <label id="emailLabel">Email: </label>
      <textarea v-model="registerInfo.email"></textarea>
    </div>
    <div id="phone">
      <label id="phoneLabel">Phone: </label>
      <textarea v-model="registerInfo.phone"></textarea>
    </div>
    <div id="handleClickRegister">
      <button v-on:click="handleClickRegister">Register</button>
    </div>
  </div>
</template>


<script>
import { v4 as uuidv4 } from 'uuid'
export default {
  name: 'LoginComponent',
  data() {
    return {
      registerInfo: {
        fullName: '',
        address: '',
        username: '',
        password: '',
        email: '',
        phone: '',
        id: '',
        organizer: ''
      }
    }
  },
  methods: {
    handleClickRegister() {
      const registerInfo={
        ...this.registerInfo,
        id : uuidv4(),
        organizer : this.$store.state.user
      }
      this.$store.dispatch('createUser',registerInfo)
      this.$router.push({
        name: 'Login',
      })
    }
  }
}
</script>

<style scoped>
textarea{
  margin: 10px;
}
#registerContainer {
  display: grid;
  justify-content: center;
  margin: 40px;
}

#registerTitle {
  font-size: x-large;
  font-weight: bold;
  margin-bottom: 20px;
}

#fullName, #address, #username, #password, #email, #phone, #handleClickRegister{
  display: flex;
  flex-direction: row;
  align-items: center;
  column-gap: 20px;
}

#fullNameLabel, #addressLabel, #usernameLabel, #passwordLabel, #emailLabel, #phoneLabel{
  width: 100px;
}
#handleClickRegister{
  margin: 10px 0 0 40%;
}
button{
  width: 80px;
}
</style>