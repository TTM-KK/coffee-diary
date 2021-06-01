<template>
  <div>
    抽出ログ
    <br />
    <div v-for="data in extructionData" :key="data.id">
      <div>date: {{ data.day | timestampToDate }}</div>
      <div>
        Roaster<br />
        <span class="data__detail">{{ data.roaster }}</span>
      </div>
      <div>
        Beans <br />
        <span class="data__detail">{{ data.beans }}</span>
      </div>
      <div>
        Temprature
        <br />
        <span class="data__detail">{{ data.templature }}</span>
      </div>
      <div>
        Water Amount
        <br />
        <span class="data__detail">{{ data.water_amount }}</span>
      </div>
      <div>
        <!--  合計時間も表示する -->
        Times
        <br />
        <span class="data__detail">
          <li
            v-for="(time, value) in data.extruction_time"
            :key="time.id"
            style="list-style: none"
          >
            {{ value + 1 }}：{{ time | decimalPointTruncation }}
          </li></span
        >
      </div>
      <div>
        Comments
        <br />
        <span class="data__detail"> {{ data.comment }}</span>
      </div>
      <hr />
    </div>
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
  filters: {
    sum(value) {},
    decimalPointTruncation(value) {
      // "00:10:788" のような構造の文字列用
      if (typeof value == "string") {
        return value.slice(0, -4);
      }
      return value;
    },
    timestampToDate(value) {
      console.log(typeof value);
      if (typeof value == "object") {
        console.log(value);
        let date = new Date(value.seconds);
        return (
          date.getFullYear() +
          "." +
          (date.getMonth() + 1) +
          "." +
          date.getDate()
        );
      }
      return "";
    },
  },
  created() {
    pourOverRef.get().then((querySnapshot) => {
      // querySnapshot.forEach((doc) => {
      // });
      const docs = querySnapshot.docs;
      this.extructionData = docs.map((doc) => doc.data());
      console.log(this.extructionData);
    });
  },
};
</script>

<style scoped>
.data__detail {
  display: inline-block;
  padding-left: 20px;
}
</style>