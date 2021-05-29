<template>
  <div>
    <div v-if="isAuthenticated">
      {{ user.email }}でログイン中です<br />
      <button v-on:click="logout">ログアウト</button><br />
    </div>
    <div v-else>
      メール<br />
      <input type="text" v-model="email" /><br />
      パスワード<br />
      <input type="password" v-model="password" /><br />
      <button v-on:click="login">ログイン</button>
    </div>
  </div>
</template>

<script>
import firebase from "~/plugins/firebase";
import { mapActions, mapState, mapGetters } from "vuex";
export default {
  data() {
    return {
      email: "",
      password: "",
    };
  },
  computed: {
    ...mapState(["user"]),
    ...mapGetters(["isAuthenticated"]),
  },
  mounted() {
    firebase.auth().onAuthStateChanged((user) => {
      this.setUser(user);
    });
  },
  methods: {
    ...mapActions(["setUser"]),
    login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then((user) => {
          // ログインした後に遷移するページなどを指定
          // this.$router.push("")
        })
        .catch((error) => {
          // 例外処理を記述
          alert(error);
        });
    },
    logout() {
      firebase
        .auth()
        .signOut()
        .then(() => {
          this.setUser(null);
        })
        .catch((error) => {
          alert(error);
        });
    },
  },
};
</script>