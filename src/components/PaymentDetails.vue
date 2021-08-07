<template>
  <div class="bg-gray-100 shadow-lg">
    <div class="px-6 md:w-1/2">
      <h3 class="pt-7 pb-4 text-lg font-semibold"
          :class="{'text-gray-400': hideSection, 'header-text': !hideSection}">
        Payment Details
      </h3>
      <div :class="{'hide-section': hideSection }">
        To be developed (mocks not given)
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: 'PaymentDetails',
  props: {
    hideSection: Boolean,
  }
}
</script>

<style lang="scss" scoped>
 .header-text {
  color: #156B8A;
 }
</style>
