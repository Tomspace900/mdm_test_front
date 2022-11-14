<template>
  <div class="cartpage">
    <span id="title">Your cart</span>
    <CartCard />
  </div>
</template>

<script>
import CartCard from '../components/CartCard.vue';

export default {
  name: 'Cart',
  data() {
    return {};
  },
  components: { CartCard },
};
</script>

<style lang="scss" scoped>
.cartpage {
  margin-top: 18vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100vw;
  min-height: 100vh;
}

#title {
  font-size: 4em;
  font-weight: 700;
  margin: 10px;
}
</style>
