<template>
  <div class="login__box">
    <div v-if="isAuthenticated">
      {{ user.email }}でログイン中です<br />
      <button v-on:click="logout">ログアウト</button><br />
    </div>
    <div v-else>
      <div class="login__text">Mail</div>
      <input type="text" v-model="email" /><br />
      <div class="login__text mt-2">Pass</div>
      <input type="password" v-model="password" /><br />
      <div class="text-right">
        <button v-on:click="login" class="mt-4">LOGIN</button>
      </div>
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

<style scoped>
.login__box {
  width: 200px;
  display: inline-block;
  margin-left: 0;
  margin-right: 0;
}
.login__text {
  text-align: left;
}
</style>