<template>
  {{ lang.Customerservicecharter }}
  <br />
  <!-- <p>Current Language: {{ currentLanguage }}</p> -->
</template>

<script setup>
import { page } from "@/assets/helpers/lang";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
const router = useRoute();
const currentLanguage = router.params.lang || "en";
const lang = ref({});

onMounted(async () => {
  lang.value = await page(currentLanguage, router.name);
});
</script>
