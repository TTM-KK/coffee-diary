<template>
  <div>
    <div class="header__box">
      <nuxt-link to="/" class="header__text">COFFEE DIARY</nuxt-link>
    </div>
    <Nuxt />
  </div>
</template>

<style scoped>
.header__box {
  display: flex;
  justify-content: center;
  align-items: center;
  background: #cbb77d;
  height: 30px;
}

.header__text {
  text-decoration: none;
  color: #000;
}

.header__link {
  color: #000;
}
</style>
