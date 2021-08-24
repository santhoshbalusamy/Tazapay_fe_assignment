<template>
  <div v-if="isDataFetched">
    <Vechicle :vechicles="vechicles" />
  </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Vechicle from '../components/Vechicle.vue';

export default {
 name: 'vechicles',
 components: {
   Vechicle,
 },
 computed: {
    ...mapGetters([
      'vechicles',
      'isDataFetched',
    ]),
  },
 async mounted() {
    try {
      await this.$store.dispatch('getVechicleList');
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>

</style>
