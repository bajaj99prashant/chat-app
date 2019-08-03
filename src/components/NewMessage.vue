<template>
    <div class="newMessage">
        <form @submit.prevent="addMessage">
            <label for="new-message" class="text-secondary"><small>New Message (enter to add)</small></label>
            <input type="text" class="foo form-control" name="new-message" v-model="newMessage">
            <p v-if="feedback" class="text-center text-secondary my-1"><small>{{ feedback }}</small></p>
        </form>
    </div>
</template>

<script>
import db from '@/firebase/init.js'

export default {
    name: 'NewMessage',
    props: ['name'],
    data() {
        return {
            newMessage: null,
            feedback: null
        }
    },
    methods: {
        addMessage() {
            if(this.newMessage){
                // communicating with firebase
                db.collection('messages').add({
                    content: this.newMessage,
                    name: this.name,
                    timestamp: Date.now()
                }).then(() => {
                    this.newMessage = null
                    this.feedback = null
                }).catch(err => {
                    console.log(err)
                })
            }else {
                this.feedback = 'You must enter a message in order to send one'
            }
        }
    }
}
</script>

<style scoped>
.foo {
  border: none;
  border-radius: 0;
  border-bottom: 2px solid #868e96;
  background: transparent;
}
.foo:focus {
  box-shadow: none;
  border-bottom: 2px solid #180f72;
}
</style>
