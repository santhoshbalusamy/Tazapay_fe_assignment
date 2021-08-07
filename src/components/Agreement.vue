<template>
<div class="bg-white shadow-lg">
  <h3 class="pt-7 pb-4 divide text-lg mx-6">Transfer Agreement #1 </h3>
  <div class="flex flex-col md:flex-row mt-4 pb-4 px-6">
   <div class="md:w-72 sm:w-full pr-9">
    <div class="primary-color text-base font-semibold pb-4">Buyer’s Email</div>
    <div>{{email}}</div>
   </div>
   <div class="md:w-72 sm:w-full pr-9">
    <div class="primary-color text-base font-semibold pb-4">Exporting To</div>
     <div>{{exportingTo}}</div>
   </div>
   <div class="md:w-72 sm:w-full">
    <div class="primary-color text-base font-semibold pb-4">Invoice Amount</div>
    <div>USD {{invoiceAmount}}</div>
   </div>
  </div>
  <div class="flex flex-col md:flex-row pt-4 pb-8 bg-gray-50 px-6">
   <div class="md:w-72 sm:w-full pr-9 md:block flex justify-between">
    <div class="primary-color text-base font-semibold pb-4">Buyer’s details</div>
    <a v-if="!isEditable" class="text-sm edit" @click="handleEdit">Edit</a>
    <a v-else class="text-sm edit" @click="handleSave">Save</a>
   </div>
   <div class="md:w-72 sm:w-full pr-9">
    <div class="primary-color text-base font-semibold pb-4">company</div>
     <div v-if="!isEditable">{{company_data}}</div>
     <textarea v-else rows="3" class="pl-2 md:w-full border-gray-300 rounded-md" placeholder="company" v-model="company_data" />
   </div>
   <div class="md:w-72 sm:w-full">
    <div class="primary-color text-base font-semibold pb-4">Contact Person</div>
    <div v-if="!isEditable">{{contactPerson_data}}</div>
    <input v-else type="text" class="pl-2 md:w-full border-gray-300 rounded-md h-9" placeholder="Contact Person" v-model="contactPerson_data" />
   </div>
  </div>
</div>
</template>

<script>
export default {
  name: 'Agreement',
  props: {
    email: String,
    exportingTo: String,
    invoiceAmount: String,
    company: String,
    contactPerson: String,
  },
  data() {
    return {
      isEditable: false,
      company_data: this.company,
      contactPerson_data: this.contactPerson,
    };
  },
  methods: {
    handleEdit() {
      this.isEditable = true;
    },

    handleSave() {
      this.isEditable = false;

      this.$emit('save-agreement', {
        company: this.company_data,
        contactPerson: this.contactPerson_data,
      });
    }
  }
}
</script>

<style scoped>
 .divide {
  border-bottom: 1.5px dashed #A0AEC0;
 }

 .edit {
  color: #58C5ED;
  cursor: pointer;
 }

 textarea, input {
    border: 1px solid rgba(209, 213, 219, var(--tw-border-opacity));
 }
</style>
