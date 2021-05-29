<template>
  <div v-if="loaded">
    <slot />
  </div>
</template>


<script>
//コンポーネントを使用してアクセス制限をかけようとすると、
// 制限先が一瞬表示されるので、middlewareを用いて制限するのが得策。
import { mapGetters, mapState } from "vuex";
export default {
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    ...mapGetters(["isAuthenticated"]),
  },
  created() {
    if (!this.isAuthenticated) {
      // ログインしていなかった場合の遷移先を指定。
      this.$router.push({ name: "index" });
    }
    this.loaded = true;
  },
};
</script>