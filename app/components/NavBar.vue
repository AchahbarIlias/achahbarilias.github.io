<template>
  <nav class="engine-toolbar">
    <!-- Accent strip -->
    <div class="toolbar-strip"></div>

    <!-- Main row -->
    <div class="toolbar-row">
      <!-- Logo -->
      <NuxtLink to="/" class="toolbar-logo">
        <span class="logo-play">▶</span>
        <span class="logo-name">ILIAS</span>
        <span class="logo-engine">ACHAHBAR</span>
      </NuxtLink>

      <div class="toolbar-vsep"></div>

      <!-- Fake menu items (desktop) -->
      <div class="hidden md:flex items-center gap-0">
        <span class="menu-item">File</span>
        <span class="menu-item">Edit</span>
        <span class="menu-item">View</span>
      </div>

      <div class="flex-1"></div>

      <!-- Nav links (desktop) -->
      <div class="hidden md:flex items-center">
        <NuxtLink to="/#skills" class="toolbar-link">Skills</NuxtLink>
        <NuxtLink to="/#experience" class="toolbar-link">Experience</NuxtLink>
        <NuxtLink to="/#projects" class="toolbar-link">Projects</NuxtLink>
      </div>

      <div class="hidden md:block toolbar-vsep"></div>

      <!-- Contact CTA (desktop) -->
      <NuxtLink to="/contact" class="hidden md:flex toolbar-cta">
        <span class="cta-dot"></span>
        Contact
      </NuxtLink>

      <!-- Mobile toggle -->
      <button
        class="md:hidden toolbar-mobile-btn"
        @click="isMenuOpen = !isMenuOpen"
        aria-label="Toggle menu"
      >
        {{ isMenuOpen ? '✕' : '☰' }}
      </button>
    </div>

    <!-- Mobile dropdown -->
    <div v-if="isMenuOpen" class="mobile-menu">
      <NuxtLink to="/#skills"     class="mobile-link" @click="closeMenu">Skills</NuxtLink>
      <NuxtLink to="/#experience" class="mobile-link" @click="closeMenu">Experience</NuxtLink>
      <NuxtLink to="/#projects"   class="mobile-link" @click="closeMenu">Projects</NuxtLink>
      <NuxtLink to="/contact"      class="mobile-link" @click="closeMenu">Contact</NuxtLink>
    </div>
  </nav>
</template>

<script setup lang="ts">
import { ref } from "vue";
const isMenuOpen = ref(false);
const closeMenu  = () => (isMenuOpen.value = false);
</script>

<style scoped>
.engine-toolbar {
  position: fixed;
  top: 0; left: 0; right: 0;
  z-index: 50;
  background: var(--bg-header);
  border-bottom: 1px solid var(--border);
  backdrop-filter: blur(12px);
}

.toolbar-strip {
  height: 2px;
  background: linear-gradient(90deg, var(--accent) 0%, transparent 70%);
}

.toolbar-row {
  display: flex;
  align-items: center;
  height: 38px;
  padding: 0 10px;
}

.toolbar-logo {
  display: flex;
  align-items: center;
  gap: 5px;
  text-decoration: none;
  flex-shrink: 0;
}

.logo-play {
  color: var(--accent);
  font-size: 11px;
}

.logo-name {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--text-color);
}

.logo-engine {
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.15em;
  color: var(--accent);
}

.toolbar-vsep {
  width: 1px;
  height: 18px;
  background: var(--border);
  margin: 0 10px;
  flex-shrink: 0;
}

.menu-item {
  font-size: 11px;
  color: var(--text-dim);
  padding: 4px 9px;
  border-radius: 2px;
  cursor: default;
  transition: color 0.15s, background 0.15s;
  user-select: none;
}

.menu-item:hover {
  color: var(--text-color);
  background: rgba(255, 255, 255, 0.05);
}

.toolbar-link {
  font-size: 11px;
  color: var(--text-dim);
  text-decoration: none;
  padding: 4px 10px;
  border-radius: 2px;
  transition: color 0.15s, background 0.15s;
}

.toolbar-link:hover {
  color: var(--text-color);
  background: rgba(255, 255, 255, 0.05);
}

.toolbar-cta {
  display: flex;
  align-items: center;
  gap: 6px;
  padding: 4px 12px;
  background: var(--accent);
  color: #000;
  font-size: 11px;
  font-weight: 700;
  border-radius: 2px;
  text-decoration: none;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  transition: opacity 0.15s;
}

.toolbar-cta:hover { opacity: 0.85; }

.cta-dot {
  width: 6px;
  height: 6px;
  background: rgba(0, 0, 0, 0.35);
  border-radius: 50%;
}

.toolbar-mobile-btn {
  margin-left: auto;
  color: var(--text-dim);
  font-size: 14px;
  padding: 4px 8px;
  cursor: pointer;
  background: none;
  border: none;
}

.mobile-menu {
  background: var(--bg-header);
  border-top: 1px solid var(--border);
}

.mobile-link {
  display: block;
  padding: 10px 16px;
  font-size: 12px;
  color: var(--text-dim);
  text-decoration: none;
  border-bottom: 1px solid var(--border);
  transition: color 0.15s, background 0.15s;
}

.mobile-link:last-child { border-bottom: none; }

.mobile-link:hover {
  color: var(--accent);
  background: rgba(249, 115, 22, 0.05);
}
</style>
