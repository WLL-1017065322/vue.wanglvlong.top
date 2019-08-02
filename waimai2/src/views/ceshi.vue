<template>
  <div>
    <div>123</div>
    <button @click="add()">+1</button>
    <button @click="func()">dd</button>

    <div>{{$store.getters.changeAdd}}</div>
    <input type="text" v-model="$store.state.number" />
    <button @click="firstClick">1111</button>
    <mt-button type="default">default</mt-button>
    <mt-button type="primary">primary</mt-button>
  </div>
</template>

<script>
import Vue from 'vue';
import { MessageBox, Button } from 'mint-ui';

Vue.component(Button.name, Button);
export default {
  data() {
    return {};
  },
  components: {},
  // computed: {
  //   number() {
  //     return store.state.number;
  //   }
  // }
  methods: {
    add() {
      this.$store.commit('add');
    },
    func() {
      this.$store.commit('func', { c: 3, d: 4 });
    },
    firstClick() {
      MessageBox.alert('Success!').then((action) => {});
    },
  },
};
</script>

<style scoped lang="scss">
</style>
