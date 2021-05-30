<template>
  <div>
    抽出ログ
    <br />
    {{ extructionData }}
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
const db = firebase.firestore();
const pourOverRef = db.collection("pour-over");
export default {
  data() {
    return {
      extructionData: [],
    };
  },
  mounted() {
    pourOverRef.get().then((querySnapshot) => {
      querySnapshot.forEach((doc) => {
        console.log(doc.data());
        this.extructionData = doc.data();
      });
    });
  },
};
</script>