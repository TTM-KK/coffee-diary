<template>
  <div class="stop--watch__box">
    <!-- <div @click="start">start</div> -->
    <font-awesome-icon
      icon="play"
      v-if="!flag"
      @click="start"
    ></font-awesome-icon>
    <font-awesome-icon
      icon="stop"
      v-if="flag"
      @click="stop"
    ></font-awesome-icon>
    <span v-if="!flag" @click="reset">Reset</span>
    <span v-if="flag" @click="lap">Lap</span>
    <div class="stop--watch">
      {{ checkMinutes | zeroPadding }}:{{ checkSecond | zeroPadding }}:{{
        checkMiliSecond | zeroPaddingMiliSecond
      }}
    </div>
    <div v-for="time in laps" :key="time">
      <!-- <div>{{checkMinutes(time) | zeroPadding }}:{{checkSecond(time) | zeroPadding }}:{{checkMiliSecond(time) | zeroPaddingMiliSecond}}</div> -->
      {{ time }}
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      hours: 0,
      minutes: 0,
      second: 0,
      milisecond: 0,
      laps: [],

      startTime: 0,
      endTime: 0,
      diffTime: 0,

      flag: false,
      animationId: 0,
    };
  },

  filters: {
    zeroPadding(value) {
      return value.toString().padStart(2, 0);
    },
    zeroPaddingMiliSecond(value) {
      return value.toString().padStart(3, 0);
    },
  },
  methods: {
    setStartTime(time) {
      this.startTime = performance.now() - time;
    },
    start() {
      console.log("start");
      if (this.flag) {
        console.log("cancel start");
        return false;
      }
      this.flag = true;
      this.setStartTime(this.diffTime);
      this.progress();
    },
    progress() {
      this.endTime = performance.now();
      this.diffTime = this.endTime - this.startTime;
      // [this.second, this.milisecond] = [
      //   Math.floor(this.diffTime / 1000),
      //   Math.floor(this.diffTime % 1000),
      // ];

      // if (this.second >= 60) {
      //   this.second = 0;
      //   this.minutes++;
      // }
      this.animationId = window.requestAnimationFrame(this.progress);
    },
    stop() {
      this.flag = false;
      window.cancelAnimationFrame(this.animationId);
    },
    reset() {
      if (this.flag) {
        return false;
      }
      this.startTime = 0;
      this.diffTime = 0;
      this.laps = [];
    },
    lap() {
      let time =
        (Math.floor(this.diffTime / 1000 / 60) % 60).toString().padStart(2, 0) +
        ":" +
        (Math.floor(this.diffTime / 1000) % 60).toString().padStart(2, 0) +
        ":" +
        Math.floor(this.diffTime % 1000)
          .toString()
          .padStart(3, 0);

      this.laps.push(time);
    },
  },
  computed: {
    checkHousrs() {
      return Math.floor(this.diffTime / 1000 / 3600);
    },
    checkMinutes() {
      return Math.floor(this.diffTime / 1000 / 60) % 60;
    },
    checkSecond() {
      return Math.floor(this.diffTime / 1000) % 60;
    },
    checkMiliSecond() {
      return Math.floor(this.diffTime % 1000);
    },
  },
};
</script>

<style scoped>
.stop--watch__box {
  /* width: 80%; */
  /* padding: 50px 100px; */
  /* height: 100px; */
  /* background: #000; */
  position: absolute;
}
.stop--watch {
  font-family: "Share Tech Mono", monospace;
  color: #ffffff;
}
</style>