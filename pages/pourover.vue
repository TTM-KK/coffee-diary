<template>
  <div class="container" style="background: #5a5a5a; position: relative">
    <img src="@/assets/svg/coffee_drip.svg" style="width: 100%" />
    <div class="input__roaster--name">
      <input v-model="roaster" placeholder="ロースター" />
    </div>
    <div class="input__beans--var">
      <input v-model="beans" placeholder="豆の種類" />
    </div>
    <div class="input__water--temp">
      <input v-model="temprature" placeholder="湯温" />
    </div>
    <div class="input__water--amount">
      <input v-model="waterAmount" placeholder="湯量" />
    </div>
    <div class="stop--watch">
      <stop-watch v-bind:laps="laps"></stop-watch>
    </div>
    <div class="input__comment">
      <input v-model="comment" placeholder="コメント" />
    </div>
    <div class="submit_box">
      <button v-if="!submitFlag" @click="registerExtructionData">送信</button>
      <div v-if="submitFlag">送信が完了しました</div>
    </div>
  </div>
</template>

<script>
import StopWatch from "~/components/PourOver/StopWatch";
import firebase from "~/plugins/firebase";
const db = firebase.firestore();

export default {
  components: { StopWatch },
  middleware: "login-user-only",
  data() {
    return {
      submitFlag: false,
      temprature: "",
      waterAmount: "",
      beans: "",
      roaster: "",
      comment: "",
      laps: [], // stopWathコンポーネントで使用するためのデータ。
    };
  },
  methods: {
    registerExtructionData() {
      const d = new Date();
      db.collection("pour-over")
        .add({
          day: d,
          beans: this.beans,
          extruction_time: this.laps,
          roaster: this.roaster,
          temprature: this.temprature,
          waterAmount: this.waterAmount,
          comment: this.comment,
          user_uid: firebase.auth().currentUser.uid,
        })
        .then((docRef) => {
          this.submitFlag = true;
          console.log("written with ID:", docRef.id);
        })
        .catch((error) => {
          console.log("Error", error);
        });
    },
  },
};
</script>

<style scoped>
.input__roaster--name {
  position: absolute;
  top: 50px;
  left: 50px;
}

.input__beans--var {
  position: absolute;
  top: 100px;
  left: 50px;
}

.input__water--temp {
  position: absolute;
  top: 150px;
  left: 50px;
}

.input__water--amount {
  position: absolute;
  top: 200px;
  left: 50px;
}

.stop--watch {
  position: absolute;
  top: 250px;
  left: 50px;
}

.input__comment {
  position: absolute;
  bottom: 50px;
  left: 50px;
}

.submit_box {
  position: absolute;
  bottom: 50px;
  right: 50px;
}
</style>