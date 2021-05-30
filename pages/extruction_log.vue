<template>
  <div class="data_box">
    <display-pour-over-data> </display-pour-over-data>
  </div>
</template>


<script>
import DisplayPourOverData from "../components/PourOver/DisplayPourOverData.vue";
export default {
  middleware: "login-user-only",
  components: {
    DisplayPourOverData,
  },
};
</script>

<style scoped>
</style>