<template>
<div>
  <div class="header-text my-6">
    <h2 class="text-lg font-semibold">Create your first transfer agreement</h2>
  </div>
  <div v-if="isDataFetched">
    <Agreement
    :email="agreements.email"
    :exportingTo="agreements.exportingTo"
    :invoiceAmount="agreements.invoiceAmount"
    :company="agreements.company"
    :contactPerson="agreements.contactPerson"
    @save-agreement="saveAgreement"></Agreement>
    <ProductDetails @fileChange="handleFileChange" :hideSection="hideProductSection">
    </ProductDetails>
    <ShippingInformation :hideSection="hideShipping"></ShippingInformation>
    <ReleaseConditions :hideSection="hideReleaseConditions"></ReleaseConditions>
    <PaymentDetails :hideSection="PaymentDetails" class="pb-10"></PaymentDetails>
  </div>
</div>
</template>


<script>
import Agreement from '../components/Agreement.vue';
import ProductDetails from '../components/ProductDetails.vue';
import ShippingInformation from '../components/ShippingInformation.vue';
import ReleaseConditions  from '../components/ReleaseConditions.vue';
import PaymentDetails from '../components/ProductDetails.vue';

import { mapGetters } from 'vuex';

export default {
  name: 'Transfer',
  data() {
    return {
      hideProductSection: false,
      hideShipping: true,
      hideReleaseConditions: true,
      PaymentDetails: true,
    };
  },
  components: {
    Agreement,
    ProductDetails,
    ShippingInformation,
    ReleaseConditions,
    PaymentDetails,
  },
  computed: {
    ...mapGetters([
      'agreements',
      'isDataFetched',
    ]),
  },
  methods: {
    async saveAgreement(data) {
      this.$store.dispatch('saveAgreement', data);
    },

    handleFileChange() {
      this.hideProductSection = true;
      this.hideShipping = false;
    },
  },
  async mounted() {
    try {
      await this.$store.dispatch('loadAgreements');
    } catch (error) {
      console.log(error);
    }
  }
}
</script>

<style scoped>
 .header-text {
  color: #156B8A;
 }
</style>
