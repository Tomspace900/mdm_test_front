<template>
  <div class="floating-card">
    <div v-for="item in cart" :key="item.reference">
      <div class="item">
        <div class="item-left">
          <span class="item-name">{{ item.name }}</span>
          <div class="item-infos">
            <span class="item-reference">Ref: {{ item.reference }}</span>
            <div class="item-price">
              <span>{{ item.price.base.formatted }}</span>
            </div>
            <span class="item-qty">Quantity: {{ item.qty }}</span>
          </div>
        </div>
        <div class="item-right">
          <img :src="item.images[1].small" />
        </div>
      </div>
    </div>
    <div class="total">
      <span>Total of products: {{ quantity }}</span>
      <span
        >Total price: <span id="total-price">{{ total }} €</span></span
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'FloatingCard',

  computed: {
    cart() {
      return this.$store.state.cart;
    },
    total() {
      return this.$store.state.total;
    },
    quantity() {
      return this.$store.state.quantity;
    },
  },
};
</script>

<style lang="scss" scoped>
.floating-card {
  font-size: 0.4em;
  color: black;
  background-color: #ffffff;
  width: 100px;
  border-radius: 8px;
  border: var(--main-grey) solid 1px;
  padding: 0 10px;
}

.item {
  display: flex;
  width: 100%;
  border-bottom: var(--main-grey) solid 1px;
  margin-top: 2vh;
  padding: 2vh 0;

  &-left {
    width: 50%;
    display: flex;
    flex-direction: column;
    height: 100%;
  }

  &-name {
    font-size: 1.4em;
    font-weight: 700;
    height: 50%;
    color: var(--main-grey);
  }

  &-infos {
    height: 50%;
    justify-self: flex-end;
    display: flex;
    flex-direction: column;
  }

  &-reference {
    flex: 1;
    font-style: italic;
    margin: 3px;
  }

  &-price {
    flex: 1;
    margin: 3px;

    & span {
      background-color: var(--main-grey);
      padding: 2px 4px;
      border-radius: 8px;
      color: #ffffff;
    }
  }

  &-qty {
    flex: 1;
    margin: 3px;
  }

  &-right {
    width: 50%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;

    & img {
      height: 100%;
      width: 100%;
      object-fit: contain;
    }
  }
}

.total {
  font-size: 1.2em;
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
