<template>
  <header class="header">
      <h1>Vue 3 Composition API</h1>
      <p>An example of using Vue 3 Composition API</p>
  </header>
</template>

<script>
export default {

};
</script>

<style lang="scss">
.header {
  background: #484F66;
  padding: 10px 30px;
  width: 100%;
  color: #fff;
  text-align: center;

  p {
      margin-top: 0;

      @media only screen and (max-width: 767px) {
        font-size: .8rem;
      }

  }

  h1 {
      margin-bottom: 10px;

      @media only screen and (max-width: 767px) {
        font-size: 1.5rem;
      }
  }
}
</style>
