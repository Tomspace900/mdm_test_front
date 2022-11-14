<template>
  <div id="nav">
    <router-link to="/" class="link"><span>Home</span></router-link>
    <router-link to="/cart" class="link"><span>Cart</span></router-link>
    <ShoppingCart class="svg" @displayCart="handleCart" />
    <FloatingCard v-show="displayCart" />
  </div>
</template>

<script>
import ShoppingCart from '../assets/ShoppingCart.vue';
import FloatingCard from './FloatingCard.vue';

export default {
  name: 'Header',
  data() {
    return {
      displayCart: false,
    };
  },
  methods: {
    handleCart() {
      this.displayCart = !this.displayCart;
    },
  },
  components: { ShoppingCart, FloatingCard },
};
</script>

<style lang="scss" scoped>
#nav {
  position: fixed;
  width: 100%;
  height: 18vh;
  padding: 35px;
  background-color: var(--main-grey);
  font-size: 2em;
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;

  .link {
    font-weight: bold;
    margin: 0 4vw 0 4vw;

    &.router-link-exact-active span {
      border-bottom: solid white 2px;
      transition: border-bottom 0.2s;
    }
  }

  .svg {
    height: 1.4em;
    margin-left: 2vw;
  }

  .floating-card {
    position: absolute;
    top: 80%;
    right: 10px;
    width: 300px;
  }
}
</style>
