<template>
  <div>
    <city-header></city-header>
    <city-search :cities="cities"></city-search> 
    <!-- 父子传值 cities -->
    <city-list
        :cities="cities"
        :hot="hotCities"
        :letter="letter"></city-list>
    <city-alphabet
        :cities="cities"
        @change="handleLetterChange"></city-alphabet>
        <!-- 子父传值 触发事件 -->
  </div>
</template>
<script>
import CityHeader from '@/components/CityHeader.vue';
import CitySearch from '@/components/CitySearch.vue';
import CityList from '@/components/CityList.vue';
import CityAlphabet from '@/components/CityAlphabet.vue';

import axios from 'axios';

export default {
  name: 'City',
  components: {
    CityHeader,
    CitySearch,
    CityList,
    CityAlphabet,
  },
  data() {
    return {
      cities: {},
      hotCities: [],
      letter: '',
    };
  },
  methods: {
    getCityInfo() {
      axios.get('/api/city.json').then(this.handleGetCityInfoSucc);
    },
    handleGetCityInfoSucc(res) {
      res = res.data;
      if (res.ret && res.data) {
        const { data } = res;
        this.cities = data.cities;
        this.hotCities = data.hotCities;
      }
    },
    handleLetterChange(letter) {
      // console.log(letter)
      this.letter = letter;
    },
  },
  mounted() {
    this.getCityInfo();
  },
};
</script>
<style lang="scss" scoped>
</style>
