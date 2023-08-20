<script setup>
import { component } from "@/assets/helpers/lang";
import { useRoute } from "vue-router";
import { onMounted, ref } from "vue";
const router = useRoute();
const currentLanguage = router.params.lang || "en";
const navbar = ref([]);

onMounted(async () => {
  const ll = await component(currentLanguage, "nav");
  navbar.value = [{ title: ll.home }, { title: ll.about }];
});

// console.log(ll);
</script>

<template>
  <v-list lines="one">
    <v-list-item
      v-for="(item, i) in navbar"
      :key="i"
      :title="item.title"
      subtitle="..."
    ></v-list-item>
  </v-list>
</template>
