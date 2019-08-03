<template>
  <div class="welcome container">
    <div class="card shadow-lg mx-auto">
      <div class="card-body text-center">
        <h2 class="card-title my-5">Welcome</h2>
        <form @submit.prevent="enterChat">
          <div class="form-group mx-5">
            <label for="name" class="text-left w-100 mx-2"><h5>Enter your name:</h5></label>
            <input type="text" class="form-control input" name="name" v-model="name">
          </div>
          <div class="form-group py-2">
            <p v-if="feedback">{{ feedback }}</p>
            <button class="btn bttt">Enter Chat</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Welcome',
  data () {
    return {
      name: null,
      feedback: null
    }
  },
  methods: {
    enterChat(){
      if(this.name){
        this.$router.push({ name: 'Chat', params: { name: this.name } })
      }else{
        this.feedback = 'You must enter a name to join the chat'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.input {
  border: none;
  border-radius: 0;
  border-bottom: 2px solid #868e96;
}
.input:focus {
  box-shadow: none;
  border-bottom: 2px solid #180f72;
}

.welcome .card {
  max-width: 600px;
  margin: 20vh auto;
  min-height: 60vh;
}

.welcome .card .card-title {
  color:  #180f72;
}

.bttt{
  background-color:  #180f72;
  margin: 30px auto;
  color: white;
}
</style>
