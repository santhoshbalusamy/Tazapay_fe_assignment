<template>
  <div id="app">
    <main class="md:flex">
      <Sidebar></Sidebar>
      <div class="flex flex-col w-full bg-gray-100">
        <header class="hidden md:grid bg-white py-4 pr-10 justify-items-end">
          <button class="max-w-xs flex text-sm items-center gap-2.5" aria-expanded="false" aria-haspopup="true">
                    <span class="sr-only">Open user menu</span>
                    <img class="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="">
                    Nathan Keller
          </button>
        </header>
        <section class="mx-20">
          <router-view></router-view>
        </section>
      </div>
    </main>
  </div>
</template>

<script>
import Sidebar from './components/Sidebar.vue';

export default {
  name: 'App',
  components: {
    Sidebar,
  },
}
</script>
