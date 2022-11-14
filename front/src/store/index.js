import Vue from 'vue';
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    loading: true,
    quantity: 0,
    total: 0,
    cart: [],
  },
  mutations: {
    setCart(state, payload) {
      state.cart = payload;
      state.loading = false;
    },
    setQuantity(state) {
      let n = 0;
      state.cart.forEach((item) => {
        n += parseInt(item.qty, 10);
      });
      state.quantity = n;
    },
    setTotal(state) {
      let price = 0;
      state.cart.forEach((item) => {
        price += item.qty * item.price.base.amount;
      });
      state.total = price;
    },
  },
  actions: {},
  modules: {},
});
