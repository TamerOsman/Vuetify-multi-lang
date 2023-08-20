<template>
  HOme View chlid 2
  <br />
  <p>Current Language: {{ currentLanguage }}</p>

  <RouterView />
</template>

<script setup>
import { RouterView, useRoute } from "vue-router";
const router = useRoute();
const currentLanguage = router.params.lang || "en";
</script>
