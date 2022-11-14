<template>
  <div class="wrap">
    <svg
      @click="displayCart"
      class="icon-shopping-cart"
      viewBox="0 0 24 24"
      stroke-width="1.5"
      stroke="#ffffff"
      fill="none"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <circle cx="6" cy="19" r="2" />
      <circle cx="17" cy="19" r="2" />
      <path d="M17 17h-11v-14h-2" />
      <path d="M6 5l14 1l-1 7h-13" />
    </svg>
    <i id="quantity">{{ quantity }}</i>
  </div>
</template>

<script>
export default {
  name: 'ShoppingCart',
  data() {
    return {};
  },
  computed: {
    quantity() {
      return this.$store.state.quantity;
    },
  },
  methods: {
    displayCart() {
      this.$emit('displayCart');
    },
  },
};
</script>

<style lang="scss" scoped>
.wrap {
  display: flex;
  justify-content: flex-end;
  width: 100%;
  height: 100%;
}

svg {
  height: 100%;
  cursor: pointer;
}

#quantity {
  top: 0;
  font-size: 0.35em;
  background-color: rgb(254, 45, 97);
  border-radius: 100%;
  padding: 5px;
  aspect-ratio: 1 / 1;
  height: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
