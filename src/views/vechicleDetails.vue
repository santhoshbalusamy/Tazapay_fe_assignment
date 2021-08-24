<template>
 <div class="my-12" v-if="isDataFetched">
   <div class="bg-white shadow overflow-hidden sm:rounded-lg">
    <div class="px-4 py-5 sm:px-6">
      <h3 class="text-lg leading-6 font-medium text-gray-900">
        Vehicle Information
      </h3>
      <p class="mt-1 max-w-2xl text-sm text-gray-500">
        Vehicle details and its Information.
      </p>
    </div>
    <div class="border-t border-gray-200">
      <dl>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Name
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{ vehicle.name }}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Model
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{vehicle.model}}
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Manufacturer
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{vehicle.manufacturer}}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Cost
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            ${{vehicle.cost_in_credits}}
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Cargo Capacity
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{vehicle.cargo_capacity}}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Vehicle Class
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            ${{vehicle.vehicle_class}}
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Consumables
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{vehicle.consumables}}
          </dd>
        </div>
        <div class="bg-white px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Atmosphering Speed
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            ${{vehicle.max_atmosphering_speed}}
          </dd>
        </div>
        <div class="bg-gray-50 px-4 py-5 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-6">
          <dt class="text-sm font-medium text-gray-500">
            Passengers
          </dt>
          <dd class="mt-1 text-sm text-gray-900 sm:mt-0 sm:col-span-2">
            {{vehicle.passengers}}
          </dd>
        </div>
      </dl>
    </div>
  </div>
 </div>
</template>

<script>
import { mapGetters } from 'vuex';
export default {
  name: 'vechicle-details',
  watch: {
    $route() {
      this.getVechicleDetails();
    },
  },
  mounted() {
    this.getVechicleDetails();
  },
  data() {
    return {
      vehicle: null,
    };
  },
  computed: {
    ...mapGetters([
      'isDataFetched',
    ]),
    vehicleName() {
      return this.$route.params.name;
    },
    vechicleId() {
      return this.$route.params.id;
    }
  },
  methods: {
    async getVechicleDetails() {
      try {
        await this.$store.dispatch('getVechicleDetails', { vechicleId: this.vechicleId, vechicleName: this.vehicleName });
        this.vehicle = this.$store.getters.vechicleDetail(this.vehicleName);
      } catch (error) {
        console.log('getVechicleDetails', error);
      }
    }
  }
}
</script>

<style scoped>

</style>
