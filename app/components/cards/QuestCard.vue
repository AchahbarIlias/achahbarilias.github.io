<template>
  <div class="quest-card" @click="handleRoute">
    <div class="quest-header">
      <h3>{{ project.name }}</h3>
    </div>
    <p class="quest-description">
      {{ project.description_short }}
    </p>
    <div class="quest-rewards">
      <span class="reward" v-for="skill in project.skills.slice(0, 5)" :key="skill">{{
        skill
      }}</span>
      <span class="reward">more</span>
    </div>
    <a href="#" class="quest-link">Enter the Realm →</a>
  </div>
</template>

<script setup lang="ts">
import type { ProjectsCollectionItem } from "@nuxt/content";
const router = useRouter();

const { project } = defineProps({
  project: {
    type: Object as PropType<ProjectsCollectionItem>,
    required: true,
  },
});

function handleRoute() {
  router.push(`/project/${project.name}`)
}
</script>

<style scoped>
.quest-card {
  border: 2px solid var(--accent);
  border-radius: 8px;
  padding: 2rem;
  position: relative;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);
  animation: slideInCard 0.8s ease-out backwards;
  cursor: pointer;
}

@keyframes slideInCard {
  from {
    opacity: 0;
    transform: translateY(40px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.quest-card:hover {
  border-color: var(--accent);
  transform: translateY(-10px);
  box-shadow: 0 20px 40px var(--accent);
}

.quest-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    90deg,
    transparent,
    var(--accent),
    transparent
  );
  transition: left 0.5s;
}

.quest-card:hover::before {
  left: 100%;
}

.quest-header {
  display: flex;
  justify-content: space-between;
  align-items: start;
  margin-bottom: 1rem;
  position: relative;
  z-index: 2;
}

.quest-header h3 {
  font-size: 1.5rem;
  color: var(--accent);
  flex: 1;
}

.quest-description {
  margin-bottom: 1.5rem;
  line-height: 1.7;
  position: relative;
  z-index: 2;
}

.quest-rewards {
  display: flex;
  flex-wrap: wrap;
  gap: 0.7rem;
  margin-bottom: 1.5rem;
  position: relative;
  z-index: 2;
}

.reward {
  border: 1px solid var(--accent);
  color: var(--text-color);
  padding: 0.4rem 0.8rem;
  border-radius: 4px;
  font-size: 0.85rem;
}

.quest-link {
  color: var(--accent);
  text-decoration: none;
  font-weight: bold;
  position: relative;
  z-index: 2;
  transition: all 0.3s;
  display: inline-block;
}

.quest-link::after {
  content: "";
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 2px;
  background: var(--accent);
  transition: width 0.3s;
}

.quest-card:hover .quest-link::after {
  width: 100%;
}
</style>
