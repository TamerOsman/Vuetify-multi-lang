<template>
  <NavBar />
  <RouterView />
</template>

<script setup>
import { RouterView } from "vue-router";
import NavBar from "@/components/Nav.vue";
</script>
