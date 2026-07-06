<template>
  <div class="page-wrapper">
    <div v-if="project">{{ project.description }}</div>
    <div v-else>error</div>
  </div>
</template>

<script setup lang="ts">
const route = useRoute();
const name = route.params.name?.toString();

const { data: project } = await useAsyncData(`project:${name}`, () => {
  return queryCollection("projects")
    .where("name", "=", name ?? "")
    .first();
});
</script>
