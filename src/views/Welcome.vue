<template>
  <div id = "welcome-page">
    <h1>Hei {{register.fullName}}</h1>
    <p>You have access to our services!!!</p>
  </div>
</template>

<script>
export default {
  computed: {
    register() {
      return this.$store.state.register
    }
  },
}
</script>

<style scoped>
#welcome-page{
  display: grid;
  justify-content: center;
  margin: 40px;
}
</style>