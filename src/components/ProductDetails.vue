<template>
  <div class="bg-gray-100 shadow-lg">
    <div class="px-6 md:w-1/2">
      <h3 class="pt-7 pb-4 text-lg font-semibold"
          :class="{'text-gray-400': hideSection, 'header-text': !hideSection}">
        Product Details
      </h3>
      <div :class="{'hide-section': hideSection }">
        <span class="text-sm help">Placeholder for subtitle</span>
        <div class="divider pt-4"></div>
        <div class="mt-6">
          <div class="text-lg font-semibold text-gray-600 pb-6">
            Upload your Proforma Invoice
          </div>
          <div class="hidden md:block">
            <div class="bg-orange-50 mt-1 h-44 flex items-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md" ref="filePicker" :class="{'dragged': isDragged}"
            @dragover="handleFileDrag" @dragleave="handleFileLeave">
              <div class="space-y-1">
                <div class="flex">
                <svg class="mx-auto h-6 w-6 text-indigo-500" stroke="currentColor" fill="none" viewBox="0 0 48 48" aria-hidden="true">
                  <path d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>
                <label class="pl-4 text-lg font-semibold text-indigo-500">Drop Proforma Invoice Here</label>
                </div>
                <div class="flex text-sm text-gray-600">
                  <label class="pr-1">or</label>
                  <label for="file-upload" class="relative cursor-pointer text-indigo-500">
                    <span>browse</span>
                    <input id="file-upload" name="file-upload" type="file" ref="fileInput"
                    @change="emitChangeEvent"
                    class="sr-only" />
                  </label>
                  <p class="pl-1">from your computer </p>
                </div>
                <p class="text-xs text-gray-500">
                  Acceptable formats - pdf, .jpg. png, .csv, excel
                </p>
              </div>
            </div>
          </div>
          <div class="md:hidden">
            <div class="bg-orange-50 mt-1 h-44 flex items-center justify-center px-6 pt-5 pb-6 border-2 border-gray-300 border-dashed rounded-md" ref="filePicker">
              <div class="space-y-1">
                <div class="flex">
                  <label for="file-upload" class="p-2 pl-7 pr-7 relative cursor-pointer primary-bg border border-transparent shadow-sm text-sm font-medium rounded-md text-white">
                    <span>use Camera</span>
                    <input id="file-upload" name="file-upload" type="file"
                    @change="emitChangeEvent" capture="camera"
                    class="sr-only" />
                    <input id="file-upload" name="file-upload" type="file" ref="fileInputMobile"
                    @change="emitChangeEvent"
                    class="sr-only" />
                  </label>
                </div>
                <div class="text-center text-gray-600 text-xs">or</div>
                <p class="text-xs text-indigo-500" @click="OpenGallery">
                  Select from the gallery
                </p>
              </div>
            </div>
          </div>

          <div class="pt-7">
            <label class="another-doc cursor-pointer" @click="openFilePicker">+  Upload another document</label>
          </div>
          <div class="divider pt-4"></div>
          <div>
            <div class="py-3 text-right">
              <button type="button" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white" :class="{'bg-gray-400': !filesSelected.length , 'primary-button': filesSelected.length }"
              :disabled="!filesSelected.length" @click="handleFileSelected">
                Next
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ProductDetails',
  props: {
    hideSection: Boolean,
  },
  data() {
    return {
        isDragged : false,
        filesSelected: [],
        supportedTypes: [
          'application/pdf',
          'image/jpeg',
          'image/png',
          'image/jpg',
          '.csv',
          'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
          'application/vnd.ms-excel'
        ]
    };
  },
  methods: {
    openFilePicker() {
      this.$refs.fileInput.value = null;
      this.$refs.fileInput.click();
    },

    OpenGallery() {
      this.$refs.fileInputMobile.value = null;
      this.$refs.fileInputMobile.click();
    },

    handleFileDrag(e) {
      e.preventDefault();
      this.isDragged = true;
      return false;
    },

    isFile(input) {
      return Boolean(input && input instanceof File);
    },

    isSupportedFileTypes(file) {
      return this.isFile(file)
            && this.supportedTypes.includes(file.type);
    },

    async emitChangeEvent(event) {
      const { files } = event.type === 'drop' ? event.dataTransfer : event.target;
      if (files.length) {
        this.filesSelected = Array.from(files).filter(file => this.isSupportedFileTypes(file));
        if(!this.filesSelected.length) {
          this.$toasted['error']('Please select the valid file format');
        }
      }
    },

    handleFileDrop(e) {
      this.isDragged = false;
      e.preventDefault();
      this.emitChangeEvent(e);
    },

    handleFileLeave(e) {
      e.preventDefault();
      this.isDragged = false;
      return false;
    },

    handleFileSelected() {
      this.$emit('fileChange',  this.filesSelected);
    }
  },

  mounted() {
    this.$refs.filePicker.ondrop = this.handleFileDrop;
  },
}
</script>
<style lang="scss" scoped>
 .header-text {
  color: #156B8A;
 }

 .primary-button {
   background-color: #1FA7D9
 }

 .help {
   color: #756F86;
 }

 .divider {
  border-bottom: 1px solid #E5E5E5;
 }

 .dragged {
   @apply bg-orange-100;
   @apply border-gray-500;
 }

.another-doc {
  color: #6676F3
}
</style>
