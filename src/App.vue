<template>
  <div id="app">
    <Header />
    <Navigation />
    <router-view/>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import Header from '@/components/Header.vue';

export default {
  data() {
    return {
      src: '',
    };
  },
  components: {
    Header,
    Navigation,
  },
};
</script>

<style lang="scss">
*, *::after, *::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-size: 16px;
}

h1, h2, h3, h4, h5, h6 {
  display: block;
  color: #fff;
}

h1 {
  font-size: 2rem;
  margin: 0.67rem 0;
  font-weight: bold;
}

h2 {
  font-size: 1.5rem;
  margin: 0.83rem 0;
  font-weight: bold;
}

h3 {
  font-size: 1.17rem;
  margin: 1rem 0;
  font-weight: bold;
}

h4 {
  font-size: 1rem;
  margin: 1.33rem 0;
  font-weight: bold;
}

h5 {
  font-size: .83rem;
  margin: 1.67rem 0;
  font-weight: bold;
}

h6 {
  font-size: .67rem;
  margin: 2.33rem 0;
  font-weight: bold;
}

#app {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;
  max-width: 1024px;
  height: 100vh;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin: 0 auto;
}
</style>
