<template>
  <div class="md:w-1/5">
    <!-- large screen menu -->
    <div class="md:flex hidden flex-col h-screen header">
      <header class="p-8">
        <div class="bg-white px-7 py-2 text-base rounded-lg">
          Company Logo
        </div>
      </header>
      <nav class="flex flex-col py-8 h-full">
        <router-link
          tag="a"
          :to="{ name: 'home' }"
          class="text-gray-300 hover:text-white px-8 py-4 text-sm font-medium"
          @click.native="routeHandler('Home')">
          Home
        </router-link>
        <router-link
          tag="a"
          :to="{ name: 'transfer' }"
          class="text-gray-300 hover:text-white px-8 py-4 text-sm font-medium"
          @click.native="routeHandler('Transfer')">
          Transfer
        </router-link>
        <router-link
          tag="a"
          :to="{ name: 'account' }"
          class="text-gray-300 hover:text-white px-8 py-4 text-sm font-medium"
          @click.native="routeHandler('Account')">
          Account
        </router-link>
        <router-link
          tag="a"
          :to="{ name: 'documents' }"
          class="text-gray-300 hover:text-white px-8 py-4 text-sm font-medium"
          @click.native="routeHandler('Documents')">
          Documents
        </router-link>
        <router-link
          tag="a"
          :to="{ name: 'reports' }"
          class="text-gray-300 hover:text-white px-8 py-4 text-sm font-medium"
          @click.native="routeHandler('Reports')">
          Reports
        </router-link>
      </nav>
    </div>
    <!-- mobile Menu -->
    <div class="-mr-2 pl-2 flex md:hidden header">
      <button type="button" class="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-gray-400 text-2xl" aria-controls="mobile-menu" aria-expanded="false" @click="toggleMenu">
            <span class="sr-only">Open main menu</span>
            <svg :class="{'block': !isMobileOpened, 'hidden': isMobileOpened }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
            <svg :class="{'block': isMobileOpened, 'hidden': !isMobileOpened }" class="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
            <span class="pl-4">{{routeName}}</span>
          </button>
    </div>
    <div class="md:hidden h-screen" id="mobile-menu" v-if="isMobileOpened">
      <div class="pb-3 space-y-1">
        <router-link
          tag="a"
          :to="{ name: 'home' }"
          class="block px-4 py-2 text-base font-medium"
          @click.native="routeHandler('Home')">
          Home
        </router-link>
        <router-link
          tag="a"
          :to="{ name: 'transfer' }"
          class="block px-4 py-2 text-base font-medium"
          @click.native="routeHandler('Transfer')">
          Transfer
        </router-link>
        <router-link
          tag="a"
          :to="{ name: 'account' }"
          class="block px-4 py-2 text-base font-medium"
          @click.native="routeHandler('Account')">
          Account
        </router-link>
        <router-link
          tag="a"
          :to="{ name: 'documents' }"
          class="block px-4 py-2 text-base font-medium"
          @click.native="routeHandler('Documents')">
          Documents
        </router-link>
        <router-link
          tag="a"
          :to="{ name: 'reports' }"
          class="block px-4 py-2 text-base font-medium"
          @click.native="routeHandler('Reports')">
          Reports
        </router-link>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  name: 'Sidebar',
  data() {
    return {
      isMobileOpened: false,
      routeName: 'Home',
    };
  },
  methods: {
    toggleMenu() {
      this.isMobileOpened =  !this.isMobileOpened;
    },
    routeHandler(name) {
      this.isMobileOpened = false;
      this.routeName = name;
    },
  }
}
</script>

<style scoped>
.header {
    background: #156B8A;
  }

  .router-link-exact-active {
    background-color: #1FA7D9;
    @apply text-white;
  }
</style>
