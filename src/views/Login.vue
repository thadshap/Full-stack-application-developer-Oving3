<template>
  <div id="loginContainer">
    <div id="loginTitle">
      <label>Please login!</label>
    </div>
    <div id="username">
      <label id="usernameLabel">Username:</label>
      <textarea v-model="username"></textarea>
    </div>
    <div id="password">
      <label id="passwordLabel">Password: </label>
      <textarea v-model="password"></textarea>
      <button v-on:click="handleClickSignin">Sign in</button>
    </div>
  </div>
</template>


<script>
export default {
  name: 'LoginComponent',
  methods: {
    handleClickSignin (){
      alert("You entered, username: " + this.username);
    }
  },
  data() {
    return {
      username: '',
      password: '',
    }
  }

}
</script>

<style scoped>
textarea{
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
