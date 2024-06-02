<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';

const loadStyles = () => {
  const link = document.createElement('link');
  link.id = 'dynamic-styles';
  link.rel = 'stylesheet';
  link.type = 'text/css';
  link.href = '/src/assets/css/front.css';
  document.head.appendChild(link);
};

onMounted(() => {
  loadStyles(); // Initial load
});
</script>
