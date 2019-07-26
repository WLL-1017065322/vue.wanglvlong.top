<template>
  <div>
    <div>123</div>
    <button @click="add()">+1</button>
     <button @click="func()">dd</button>

    <div>{{$store.getters.changeAdd}}</div>
    <input type="text" v-model="$store.state.number" />
  </div>
</template>

<script>
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
    add(){
      this.$store.commit('add')
    },
    func(){
      this.$store.commit("func",{c:3,d:4})
    }
  }
 
  
};
</script>

<style scoped lang="scss">
</style>

