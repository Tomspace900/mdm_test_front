<template>
  <div id="app">
    <Header />
    <router-view />
  </div>
</template>

<script>
import Header from './components/Header.vue';

export default {
  name: 'App',
  components: { Header },
  data() {
    return {
      cart: [],
    };
  },
  async mounted() {
    await this.getCart();
  },
  methods: {
    async getCart() {
      this.cart = [];
      await fetch('http://localhost:3000/cart', {
        method: 'GET',
      })
        .then((res) => res.json())
        .then((response) => {
          Object.values(response).forEach((item) => {
            this.cart.push(item);
          });
        });
      this.$store.commit('setCart', this.cart);
      this.$store.commit('setQuantity');
      this.$store.commit('setTotal');
    },
  },
};
</script>

<style lang="scss">
@import './../src/style/reset.css';
@import './../src/style/index.css';

#app {
  font-family: var(--font-main);
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  width: 100vw;
  min-height: 100vh;
  position: absolute;
}
</style>
