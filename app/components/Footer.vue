<template>
  <footer class="status-bar">
    <div class="status-left">
      <span class="status-ready">
        <span class="ready-dot"></span>
        READY
      </span>
      <span class="status-sep">|</span>
      <span class="status-item">Scene: Portfolio</span>
      <span class="status-sep hidden sm:inline">|</span>
      <span class="status-item hidden sm:inline">© {{ currentYear }} Ilias Achahbar</span>
    </div>
    <div class="status-right">
      <a href="https://github.com"                              target="_blank" class="status-link">GitHub</a>
      <span class="status-sep">|</span>
      <a href="https://linkedin.com/in/ilias-achahbar"          target="_blank" class="status-link">LinkedIn</a>
      <span class="status-sep">|</span>
      <a href="mailto:ilias.achahbar@outlook.com" class="status-link">Email</a>
    </div>
  </footer>
</template>

<script setup lang="ts">
const currentYear = computed(() => new Date().getFullYear())
</script>

<style scoped>
.status-bar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 6px;
  height: 24px;
  min-height: 24px;
  padding: 0 12px;
  background: var(--accent);
  color: #000;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  position: sticky;
  bottom: 0;
  z-index: 40;
}

@media (max-width: 480px) {
  .status-bar {
    height: auto;
    padding: 5px 12px;
  }
}

.status-left,
.status-right {
  display: flex;
  align-items: center;
  gap: 7px;
}

.status-ready {
  display: flex;
  align-items: center;
  gap: 4px;
  font-weight: 800;
}

.ready-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: rgba(0,0,0,0.35);
}

.status-sep { opacity: 0.3; }

.status-item { opacity: 0.8; }

.status-link {
  color: #000;
  text-decoration: none;
  opacity: 0.8;
  transition: opacity 0.15s;
}
.status-link:hover { opacity: 1; text-decoration: underline; }
</style>
