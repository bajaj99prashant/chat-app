<template>
    <div class="chat container">
        <h2 class="my-5 text-center">Hacked Messenger</h2>
        <div class="card">
            <div class="card-body">
                <ul class="messages list-unstyled">
                    <li v-for="message in messages" :key="message.id">
                        <span class="text-primary font-weight-bolder px-2">{{ message.name }}</span>
                        <span class="text-dark">{{ message.content }}</span>
                        <span class="text-secondary time px-2">{{ message.timestamp }}</span>
                    </li>
                </ul>
            </div>
            <div class="card-footer">
                <NewMessage :name="name" />
            </div> 
        </div>
    </div>
</template>

<script>
import NewMessage from '@/components/NewMessage.vue'
import db from '@/firebase/init.js'
import moment from 'moment'

export default {
    name: 'Chat',
    components: {
        NewMessage
    },
    props: ['name'],
    data() {
        return {
            messages: []
        }
    },
    created(){
        let ref = db.collection('messages').orderBy('timestamp')

        ref.onSnapshot(snapshot => {
            snapshot.docChanges().forEach(change => {
                if(change.type == 'added'){
                    let doc = change.doc
                    // array.unshift is also a method to add messages in reverse order but we will use vue-chat-scroll plugin for learning purpose
                    // we could have used vue-chat-scroll but due to error we have avoided
                    this.messages.unshift({
                        id: doc.id,
                        name: doc.data().name,
                        content: doc.data().content,
                        timestamp: moment(doc.data().timestamp).format('lll')
                    })
                }
            })
        })
    }
}
</script>

<style scoped>
.chat h2 {
    color: white;
    font-size: 2.6em;
}
.card-body ul li span {
    font-size: 1.4em;
}
.card-body ul li {
    margin: 15px auto;
}
.chat .time {
    display: block;
    font-size: 0.8em;
    line-height: 0.8;
}
.card-body {
    max-height: 45vh;
    overflow-y: auto;
    margin: 10px;
}
.card-body::-webkit-scrollbar {
    width: 3px;
}
.card-body::-webkit-scrollbar-thumb {
    background: #180f72;
}
.card-body::-webkit-scrollbar-track {
    background: #ddd;
}
.card-footer {
    background: #fff;
}
</style>
