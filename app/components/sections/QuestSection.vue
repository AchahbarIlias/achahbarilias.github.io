<template>
  <section id="projects" class="section">
    <div class="engine-panel">

      <!-- Panel header -->
      <div class="engine-panel-header">
        <span class="panel-icon">⊟</span>
        <span class="panel-title">Content Browser</span>
        <span class="engine-path">
          <span class="sep">/</span>Content<span class="sep">/</span>Projects
        </span>
        <div class="panel-controls">
          <div class="filter-wrap">
            <button
              ref="filterBtnRef"
              class="filter-btn"
              :class="{ active: activeFilter }"
              @click="toggleFilter"
            >
              {{ activeFilter ? filterOptions.find(o => o.value === activeFilter)?.label : 'Filter' }} ▾
            </button>
          </div>
          <div class="panel-dot" style="background:var(--green)"></div>
          <div class="panel-dot" style="background:var(--yellow)"></div>
          <div class="panel-dot" style="background:#ef4444"></div>
        </div>
      </div>

      <!-- Sub-toolbar -->
      <div class="sub-toolbar">
        <div class="breadcrumb">
          <span>All</span>
          <span class="bsep">›</span>
          <span style="color:var(--accent)">Projects</span>
        </div>
        <div class="view-btns">
          <span class="view-btn">⊞</span>
          <span class="view-btn">☰</span>
        </div>
      </div>

      <!-- Content area -->
      <div class="browser-area">
        <div class="browser-grid-bg"></div>

        <div class="relative z-10 grid grid-cols-1 md:grid-cols-3 gap-4">
          <div v-for="col in columns" :key="col.id" class="folder-col">

            <!-- Folder header -->
            <div class="folder-hdr">
              <span class="folder-dot" :style="{ background: col.color }"></span>
              <span class="folder-name">{{ col.title }}</span>
              <span class="folder-count">{{ filteredProjects(col.id).length }}</span>
            </div>

            <!-- Assets -->
            <div class="asset-list">
              <div
                v-for="project in filteredProjects(col.id)"
                :key="project.name"
                class="asset-item"
                @click="selected = project"
              >
                <div class="asset-ico">{{ col.icon }}</div>
                <div class="asset-info">
                  <div class="asset-name">{{ project.name }}</div>
                  <div class="asset-desc">{{ project.description_short || project.description?.slice(0, 90) }}</div>
                  <div class="asset-tags">
                    <span
                      v-for="tag in (project.skills || []).slice(0, 3)"
                      :key="tag"
                      class="asset-tag"
                    >{{ tag }}</span>
                  </div>
                </div>
              </div>

              <div v-if="filteredProjects(col.id).length === 0" class="empty-slot">
                No assets
              </div>
            </div>

          </div>
        </div>
      </div>
    </div>

    <!-- Filter dropdown -->
    <Teleport to="body">
      <div
        v-if="filterOpen"
        class="filter-dropdown"
        :style="dropdownStyle"
        @click.stop
      >
        <button
          v-for="opt in filterOptions"
          :key="opt.value ?? 'all'"
          class="filter-option"
          :class="{ selected: activeFilter === opt.value }"
          @click="setFilter(opt.value)"
        >
          <span class="opt-dot" :style="{ background: opt.color }"></span>
          {{ opt.label }}
        </button>
      </div>
    </Teleport>

    <!-- Modal -->
    <Teleport to="body">
      <div
        v-if="selected"
        class="modal-overlay"
        @click.self="selected = null"
      >
        <div class="modal-panel">
          <div class="modal-hdr">
            <span class="panel-icon">⊟</span>
            <span class="modal-title">{{ selected.name }}</span>
            <button class="modal-close" @click="selected = null">✕</button>
          </div>
          <div class="modal-body">
            <p class="modal-desc">{{ selected.description }}</p>
            <div class="modal-tags">
              <span
                v-for="tag in (selected.skills || [])"
                :key="tag"
                class="asset-tag"
              >{{ tag }}</span>
            </div>
          </div>
          <div class="modal-ftr">
            <button class="close-btn" @click="selected = null">Close</button>
          </div>
        </div>
      </div>
    </Teleport>
  </section>
</template>

<script setup lang="ts">
import { ref, computed, onMounted, onUnmounted } from "vue"

const selected     = ref<any>(null)
const activeFilter = ref<string | null>(null)
const filterOpen   = ref(false)
const filterBtnRef = ref<HTMLElement | null>(null)

const { data: projects } = await useAsyncData("projects", () =>
  queryCollection("projects").all()
)

const columns = [
  { id: "idea",     title: "Backlog",     icon: "◎", color: "var(--yellow)" },
  { id: "progress", title: "In Progress", icon: "◉", color: "var(--accent)"  },
  { id: "done",     title: "Shipped",     icon: "●", color: "var(--green)"   },
]

const filterOptions = [
  { label: "All",          value: null,           color: "var(--text-dim)" },
  { label: "Professional", value: "professional",  color: "var(--blue)"    },
  { label: "Hobby",        value: "hobby",         color: "var(--green)"   },
]

const dropdownStyle = computed(() => {
  if (!filterBtnRef.value) return {}
  const r = filterBtnRef.value.getBoundingClientRect()
  return {
    position: 'fixed' as const,
    top:   `${r.bottom + 4}px`,
    right: `${window.innerWidth - r.right}px`,
    zIndex: 200,
  }
})

function toggleFilter() {
  filterOpen.value = !filterOpen.value
}

function setFilter(value: string | null) {
  activeFilter.value = value
  filterOpen.value   = false
}

function onClickOutside(e: MouseEvent) {
  if (filterOpen.value && filterBtnRef.value && !filterBtnRef.value.contains(e.target as Node)) {
    filterOpen.value = false
  }
}

onMounted(()  => document.addEventListener('click', onClickOutside))
onUnmounted(() => document.removeEventListener('click', onClickOutside))

function filteredProjects(status: string) {
  return (projects.value ?? []).filter((p: any) => {
    const matchStatus = p.status === status
    const matchType   = activeFilter.value ? p.type === activeFilter.value : true
    return matchStatus && matchType
  })
}
</script>

<style scoped>
/* Sub-toolbar */
.sub-toolbar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 5px 12px;
  font-size: 10px;
  background: var(--bg-panel);
  border-bottom: 1px solid var(--border);
}

.breadcrumb { display: flex; align-items: center; gap: 6px; color: var(--text-dim); }
.bsep { opacity: 0.35; }

.view-btns { display: flex; gap: 4px; }
.view-btn {
  padding: 2px 7px;
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--text-dim);
  cursor: pointer;
  font-size: 10px;
  transition: border-color 0.15s, color 0.15s;
}
.view-btn:hover { border-color: var(--accent); color: var(--accent); }

/* Browser area */
.browser-area {
  position: relative;
  padding: 12px;
  min-height: 180px;
}

.browser-grid-bg {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(0deg,  rgba(255,255,255,0.02) 0,rgba(255,255,255,0.02) 1px,transparent 1px,transparent 40px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.02) 0,rgba(255,255,255,0.02) 1px,transparent 1px,transparent 40px);
  pointer-events: none;
}

/* Folder column */
.folder-col {
  border: 1px solid var(--border);
  border-radius: 3px;
  overflow: hidden;
  background: rgba(0,0,0,0.28);
}

.folder-hdr {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 10px;
  background: var(--bg-header);
  border-bottom: 1px solid var(--border);
}

.folder-dot { width: 6px; height: 6px; border-radius: 50%; flex-shrink: 0; }

.folder-name {
  font-size: 10px;
  font-weight: 700;
  color: var(--text-color);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  flex: 1;
}

.folder-count {
  font-size: 9px;
  color: var(--text-dim);
  background: var(--bg-darker);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 0 4px;
}

/* Asset list */
.asset-list {
  padding: 6px;
  display: flex;
  flex-direction: column;
  gap: 4px;
}

.asset-item {
  display: flex;
  gap: 8px;
  padding: 8px;
  border: 1px solid var(--border);
  border-radius: 3px;
  background: rgba(0,0,0,0.35);
  cursor: pointer;
  transition: border-color 0.15s, background 0.15s, transform 0.15s;
}

.asset-item:hover {
  border-color: var(--accent);
  background: rgba(249,115,22,0.05);
  transform: translateY(-1px);
}

.asset-ico { font-size: 16px; flex-shrink: 0; padding-top: 2px; }

.asset-info { flex: 1; min-width: 0; }

.asset-name { font-size: 11px; font-weight: 700; color: var(--text-color); margin-bottom: 3px; }

.asset-desc {
  font-size: 9px;
  color: var(--text-dim);
  line-height: 1.4;
  margin-bottom: 5px;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.asset-tags { display: flex; flex-wrap: wrap; gap: 3px; }

.asset-tag {
  font-size: 9px;
  padding: 1px 5px;
  border: 1px solid var(--border-bright);
  border-radius: 2px;
  color: var(--text-dim);
}

.empty-slot {
  font-size: 10px;
  color: var(--text-dim);
  text-align: center;
  padding: 20px;
  opacity: 0.45;
}

/* Filter */
.filter-wrap {
  position: relative;
}

.filter-btn {
  font-size: 9px;
  color: var(--text-dim);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 2px 7px;
  cursor: pointer;
  background: none;
  font-family: inherit;
  transition: border-color 0.15s, color 0.15s;
  white-space: nowrap;
}

.filter-btn:hover,
.filter-btn.active {
  border-color: var(--accent);
  color: var(--accent);
}

.opt-dot {
  width: 6px;
  height: 6px;
  border-radius: 50%;
  flex-shrink: 0;
}

@media (max-width: 540px) {
  .filter-btn { display: none; }
}

/* Modal */
.modal-overlay {
  position: fixed;
  inset: 0;
  z-index: 50;
  background: rgba(0,0,0,0.8);
  backdrop-filter: blur(8px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px;
}

.modal-panel {
  width: 100%;
  max-width: 480px;
  background: var(--bg-panel);
  border: 1px solid var(--border-bright);
  border-radius: 3px;
  overflow: hidden;
}

.modal-hdr {
  display: flex;
  align-items: center;
  gap: 8px;
  height: 28px;
  padding: 0 12px;
  background: var(--bg-header);
  border-bottom: 1px solid var(--border);
}

.modal-title {
  font-size: 12px;
  font-weight: 700;
  color: var(--text-color);
  flex: 1;
}

.modal-close {
  font-size: 11px;
  color: var(--text-dim);
  background: none;
  border: none;
  cursor: pointer;
  padding: 2px 4px;
  transition: color 0.15s;
}
.modal-close:hover { color: var(--accent); }

.modal-body {
  padding: 16px;
  max-height: 55vh;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: var(--border-bright) transparent;
}

.modal-desc {
  font-size: 12px;
  color: var(--text-color);
  line-height: 1.65;
  margin-bottom: 12px;
}

.modal-tags { display: flex; flex-wrap: wrap; gap: 4px; }

.modal-ftr {
  padding: 10px 16px;
  background: var(--bg-header);
  border-top: 1px solid var(--border);
  display: flex;
  justify-content: flex-end;
}

.close-btn {
  padding: 5px 16px;
  background: var(--accent);
  color: #000;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.05em;
  text-transform: uppercase;
  border-radius: 2px;
  border: none;
  cursor: pointer;
  transition: opacity 0.15s;
}
.close-btn:hover { opacity: 0.85; }
</style>
