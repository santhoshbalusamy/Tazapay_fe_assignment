<template>
  <div>
    <div class="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 class="sr-only">Vechicle</h2>
      <div class="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        <router-link tag="a" :to="{ name: 'VechicleDetails', params: { name: vechicle.name, id: getVechicleId(vechicle) } }" v-for="vechicle in vechicles" :key="vechicle.name" class="group bg-white cursor-pointer">
          <div class="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
            <img src="https://www.truebluedeal.com/Content/images/logo/notavailable.jpg" :alt="vechicle.imageAlt" class="w-full h-full object-center object-cover opacity-75" />
          </div>
          <h3 class="mt-4 ml-2 text-sm text-gray-700">
            {{ vechicle.name }}
          </h3>
          <p class="mt-1 ml-2 text-lg font-medium text-gray-900">
            {{ vechicle.cost_in_credits }}
          </p>
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>
export default {
 name: 'vechicle',
 props: {
  vechicles: Array
 },

 methods: {
   getVechicleId(vehicle) {
     const split = vehicle.url.split('/')
     return split[split.length-2];
   }
 }
}
</script>

<style scoped>

</style>
