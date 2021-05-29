<template>
  <div class="container" style="background: #5a5a5a; position: relative">
    <img src="@/assets/svg/coffee_drip.svg" style="width: 100%" />
    <div class="input__roaster--name">
      <input v-model="roaster" placeholder="ロースター" />
      <div>{{ roaster }}</div>
    </div>
    <div class="input__beans--var">
      <input v-model="beans" placeholder="豆の種類" />
      <div>{{ beans }}</div>
    </div>
    <div class="input__water--temp">
      <input v-model="temprature" placeholder="湯温" />
      <div>{{ temprature }}</div>
    </div>
    <div class="input__water--amount">
      <input v-model="waterAmount" placeholder="湯量" />
      <div>{{ waterAmount }}</div>
    </div>
    <div class="stop--watch">
      <stop-watch></stop-watch>
    </div>
  </div>
</template>

<script>
import StopWatch from "~/components/PourOver/StopWatch";
export default {
  components: { StopWatch },
  middleware: "login-user-only",
  data() {
    return {
      temprature: "",
      waterAmount: "",
      beans: "",
      roaster: "",
    };
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
  top: 150px;
  left: 50px;
}

.input__water--temp {
  position: absolute;
  top: 250px;
  left: 50px;
}

.input__water--amount {
  position: absolute;
  top: 350px;
  left: 50px;
}

.stop--watch {
  position: absolute;
  top: 450px;
  left: 50px;
}
</style>