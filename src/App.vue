<script setup>
  import Navbar from './components/layout/Navbar.vue';
  import Footer from './components/layout/Footer.vue';
</script>

<template>
  <div class="flex flex-col h-screen">
    <Navbar />
    <main class="flex-grow mb-auto">
      <router-view />
    </main>
    <Footer />
  </div>
</template>

<style scoped>
</style>
