<template>
  <div id="registerContainer">
    <div id="registerTitle">
      <label>Register yourself!</label>
    </div>
    <div id="fullName">
      <label id="fullNameLabel">Full name:</label>
      <textarea v-model="fullName"></textarea>
    </div>
    <div id="address">
      <label id="addressLabel">Address: </label>
      <textarea v-model="address"></textarea>
    </div>
    <div id="username">
      <label id="usernameLabel">Username:</label>
      <textarea v-model="username"></textarea>
    </div>
    <div id="password">
      <label id="passwordLabel">Password: </label>
      <textarea v-model="password"></textarea>
    </div>
    <div id="email">
      <label id="emailLabel">Email: </label>
      <textarea v-model="email"></textarea>
    </div>
    <div id="phone">
      <label id="phoneLabel">Phone: </label>
      <textarea v-model="phone"></textarea>
    </div>
    <div id="handleClickRegister">
      <button v-on:click="handleClickRegister">Register</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'LoginComponent',
  methods: {
    handleClickRegister (){
      alert("You entered, username: " + this.username);
    }
  },
  data() {
    return {
      fullName: '',
      address:'',
      username: '',
      password: '',
      email: '',
      phone: ''
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