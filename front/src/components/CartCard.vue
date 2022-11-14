<template>
  <div class="loading" v-if="loading">Loading...</div>
  <div class="cartcard" v-else>
    <div v-if="quantity <= 0" class="empty">
      <svg
        class="icon icon-tabler icon-tabler-shopping-cart-x"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="#37434f"
        fill="none"
        stroke-linecap="round"
        stroke-linejoin="round"
      >
        <path stroke="none" d="M0 0h24v24H0z" fill="none" />
        <circle cx="6" cy="19" r="2" />
        <circle cx="17" cy="19" r="2" />
        <path d="M17 17h-11v-14h-2" />
        <path d="M6 5l7.999 .571m5.43 4.43l-.429 2.999h-13" />
        <path d="M17 3l4 4" />
        <path d="M21 3l-4 4" />
      </svg>
      Your cart is empty !
    </div>
    <div v-else>
      <div v-for="item in cart" :key="item.reference">
        <Item :item="item" @updateQty="updateQty" />
      </div>
      <div class="total">
        <span>Total of products: {{ quantity }}</span>
        <span>
          Total price: <span id="total-price">{{ total }} €</span>
        </span>
      </div>
    </div>
  </div>
</template>

<script>
import Item from './Item.vue';

export default {
  name: 'CartCard',
  data() {
    return {
      cart: this.$store.state.cart,
    };
  },
  watch: {},
  computed: {
    loading() {
      if (!this.$store.state.loading) {
        this.setCart();
        return false;
      }
      return true;
    },
    total() {
      return this.$store.state.total;
    },
    quantity() {
      return this.$store.state.quantity;
    },
  },
  methods: {
    setCart() {
      if (!this.$store.state.loading) {
        this.cart = this.$store.state.cart;
      }
    },

    updateQty() {
      this.cart.forEach((item) => {
        if (item.qty <= 0) {
          if (window.confirm('Do you really want to delete this item from your cart ?')) {
            this.cart.splice(this.cart.indexOf(item), 1);
          }
        }
      });
      this.$store.commit('setQuantity');
      this.$store.commit('setTotal');
      fetch('http://localhost:3000/cart', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(this.cart),
      });
    },
  },
  components: { Item },
};
</script>

<style lang="scss" scoped>
.cartcard {
  display: flex;
  justify-content: center;
  width: 70%;
  min-width: 550px;
}

.empty {
  margin-top: 10vh;
  font-size: 2em;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  color: var(--main-grey);

  & svg {
    height: 20vh;
  }
}

.total {
  margin: 20px 0;
  font-size: 1.5em;
  font-weight: 500;
  width: 100%;
  height: 10vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

#total-price {
  background-color: var(--main-grey);
  padding: 1px 4px;
  border-radius: 8px;
  color: #ffffff;
}
</style>
