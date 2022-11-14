<template>
  <div class="item">
    <div class="item-left">
      <span class="item-name">{{ item.name }}</span>
      <div class="item-infos">
        <span class="item-reference">Ref: {{ item.reference }}</span>
        <div class="item-price">
          <span>{{ item.price.base.formatted }}</span>
        </div>
        <div class="item-qty">
          Quantity: <input v-model="item.qty" type="number" min="0" v-on:change="updateQty" />
        </div>
      </div>
    </div>
    <div class="item-right">
      <img :src="item.images[1].large" />
    </div>
  </div>
</template>

<script>
export default {
  name: 'Item',
  data() {
    return {
      qty: null,
    };
  },
  props: {
    item: Object,
  },
  methods: {
    updateQty() {
      this.$emit('updateQty');
    },
  },
};
</script>

<style lang="scss" scoped>
.item {
  display: flex;
  min-height: 250px;
  height: 42vh;
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
    font-size: 1.8em;
    font-weight: 700;
    height: 50%;
    color: var(--main-grey);
  }

  &-infos {
    height: 45%;
    margin-top: 5%;
    justify-self: flex-end;
    display: flex;
    flex-direction: column;
  }

  &-reference {
    flex: 1;
    font-style: italic;
  }

  &-price {
    flex: 1;

    & span {
      background-color: var(--main-grey);
      padding: 4px 8px;
      border-radius: 8px;
      color: #ffffff;
    }
  }

  &-qty {
    flex: 1;

    & input {
      width: 50px;
      border: solid var(--main-grey) 1px;
      border-radius: 5px;
    }
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

@media screen and (max-width: 600px) {
  .item {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
    min-height: 600px;
  }
}
</style>
