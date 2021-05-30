<template>
  <div class="container">
    <div class="control_box">
      <div class="">
        <font-awesome-icon icon="home" />
        <nuxt-link to="/pourover/">COFFEE POUR OVER</nuxt-link><br />
        <nuxt-link to="">抽出記録を表示</nuxt-link>
      </div>
      <div class="login_box">
        <account-auth></account-auth>
      </div>
      <div class="data_box">
        <display-pour-over-data> </display-pour-over-data>
      </div>
    </div>
  </div>
</template>

<script>
import AccountAuth from "~/components/account/AccountAuth.vue";
import DisplayPourOverData from "../components/PourOver/DisplayPourOverData.vue";
export default {
  components: { AccountAuth, DisplayPourOverData },
};
</script>

<style scoped>
.container {
  /* margin: 0 auto; */
  min-height: 100vh;
  /* display: flex;
  justify-content: center;
  align-items: center;
  text-align: center; */
}

.control_box {
  text-align: center;
  padding-top: 100px;
}

.login_box {
  margin-top: 100px;
}

.data_box {
  margin-top: 100px;
}

.title {
  font-family: "Quicksand", "Source Sans Pro", -apple-system, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
