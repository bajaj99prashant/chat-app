// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyDZBCjecDlrFlWrbVwOJEsK7cQyTu8FXOs",
    authDomain: "vue-chat-app-76ee1.firebaseapp.com",
    databaseURL: "https://vue-chat-app-76ee1.firebaseio.com",
    projectId: "vue-chat-app-76ee1",
    storageBucket: "vue-chat-app-76ee1.appspot.com",
    messagingSenderId: "766192913771",
    appId: "1:766192913771:web:0be10a06683a7136"
  };
  // Initialize Firebase
  const firebaseApp = firebase.initializeApp(firebaseConfig);

  export default firebaseApp.firestore()