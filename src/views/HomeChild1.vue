<template>
  chlid 1
  <br />
  <p>Current Language: {{ currentLanguage }}</p>
</template>

<script setup>
import { useRoute } from "vue-router";
const router = useRoute();
const currentLanguage = router.params.lang || "en";
</script>
