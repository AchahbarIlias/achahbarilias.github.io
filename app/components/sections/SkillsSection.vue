<template>
  <section id="skills" class="section">
    <div class="engine-panel">

      <!-- Panel header -->
      <div class="engine-panel-header">
        <span class="panel-icon">⊞</span>
        <span class="panel-title">Inspector</span>
        <span class="engine-path">
          <span class="sep">/</span>ilias_entity<span class="sep">/</span>Components
        </span>
        <div class="panel-controls">
          <div class="panel-dot" style="background:var(--green)"></div>
          <div class="panel-dot" style="background:var(--yellow)"></div>
          <div class="panel-dot" style="background:#ef4444"></div>
        </div>
      </div>

      <!-- Entity header -->
      <div class="entity-hdr">
        <span class="entity-name">ilias_entity_01</span>
        <span class="entity-tag">Fullstack Developer</span>
        <span class="entity-tag" style="color:var(--green);border-color:var(--green)">● Active</span>
      </div>

      <!-- Components -->
      <div class="comp-list">

        <!-- Frontend -->
        <div class="comp-block">
          <div class="comp-hdr" @click="toggle('frontend')">
            <span class="tog">{{ open.frontend ? '▼' : '▶' }}</span>
            <span class="comp-icon cyan">⬡</span>
            <span class="comp-name">Frontend Engineer</span>
            <span class="comp-badge">Script</span>
          </div>
          <div v-if="open.frontend" class="comp-body">
            <p class="comp-desc">UI systems &amp; reactive experiences</p>
            <div class="badge-row">
              <span class="skill-badge" v-for="s in frontend" :key="s">{{ s }}</span>
            </div>
            <div class="sub-grid">
              <div class="sub-row"><span class="sub-k">Frameworks</span><span class="sub-v">Next.js / Nuxt.js</span></div>
              <div class="sub-row"><span class="sub-k">UI System</span><span class="sub-v">Tailwind CSS</span></div>
              <div class="sub-row"><span class="sub-k">Libraries</span><span class="sub-v">React / Vue</span></div>
              <div class="sub-row"><span class="sub-k">Language</span><span class="sub-v">TypeScript</span></div>
            </div>
          </div>
        </div>

        <!-- Backend -->
        <div class="comp-block">
          <div class="comp-hdr" @click="toggle('backend')">
            <span class="tog">{{ open.backend ? '▼' : '▶' }}</span>
            <span class="comp-icon green">⬡</span>
            <span class="comp-name">Backend Engineer</span>
            <span class="comp-badge">Script</span>
          </div>
          <div v-if="open.backend" class="comp-body">
            <p class="comp-desc">APIs, data systems &amp; logic layers</p>
            <div class="badge-row">
              <span class="skill-badge" v-for="s in backend" :key="s">{{ s }}</span>
            </div>
            <div class="sub-grid">
              <div class="sub-row"><span class="sub-k">Frameworks</span><span class="sub-v">Fastify / Express</span></div>
              <div class="sub-row"><span class="sub-k">Database</span><span class="sub-v">PostgreSQL / SQL</span></div>
              <div class="sub-row"><span class="sub-k">Languages</span><span class="sub-v">TS / Java / Python</span></div>
              <div class="sub-row"><span class="sub-k">API Design</span><span class="sub-v">REST</span></div>
            </div>
          </div>
        </div>

        <!-- DevOps -->
        <div class="comp-block">
          <div class="comp-hdr" @click="toggle('devops')">
            <span class="tog">{{ open.devops ? '▼' : '▶' }}</span>
            <span class="comp-icon orange">⬡</span>
            <span class="comp-name">DevOps / Infrastructure</span>
            <span class="comp-badge">Script</span>
          </div>
          <div v-if="open.devops" class="comp-body">
            <p class="comp-desc">Deployment, automation &amp; system reliability</p>
            <div class="badge-row">
              <span class="skill-badge" v-for="s in devops" :key="s">{{ s }}</span>
            </div>
            <div class="sub-grid">
              <div class="sub-row"><span class="sub-k">Cloud</span><span class="sub-v">AWS / Azure</span></div>
              <div class="sub-row"><span class="sub-k">Containers</span><span class="sub-v">Docker</span></div>
              <div class="sub-row"><span class="sub-k">IaC</span><span class="sub-v">Terraform</span></div>
              <div class="sub-row"><span class="sub-k">VCS</span><span class="sub-v">Git / GitLab / GitHub</span></div>
            </div>
          </div>
        </div>

        <!-- Platforms -->
        <div class="comp-block">
          <div class="comp-hdr" @click="toggle('platforms')">
            <span class="tog">{{ open.platforms ? '▼' : '▶' }}</span>
            <span class="comp-icon purple">⬡</span>
            <span class="comp-name">Platforms &amp; Integrations</span>
            <span class="comp-badge">Script</span>
          </div>
          <div v-if="open.platforms" class="comp-body">
            <p class="comp-desc">Commerce ecosystem &amp; third-party services</p>
            <div class="badge-row">
              <span class="skill-badge" v-for="s in platforms" :key="s">{{ s }}</span>
            </div>
            <div class="sub-grid">
              <div class="sub-row"><span class="sub-k">Commerce</span><span class="sub-v">commercetools</span></div>
              <div class="sub-row"><span class="sub-k">Search</span><span class="sub-v">Algolia</span></div>
              <div class="sub-row"><span class="sub-k">Payments</span><span class="sub-v">Adyen / Nuvei</span></div>
              <div class="sub-row"><span class="sub-k">CMS</span><span class="sub-v">Contentful</span></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>

<script setup>
import { reactive } from 'vue'

const frontend  = ["TypeScript", "JavaScript", "Next.js", "React", "Nuxt.js", "Vue.js", "Tailwind CSS"]
const backend   = ["Node.js", "Fastify", "Express.js", "PostgreSQL", "Java", "Python", "SQL"]
const devops    = ["AWS", "Azure", "Docker", "Terraform", "Git", "GitLab", "GitHub"]
const platforms = ["commercetools", "Algolia", "Adyen", "Contentful", "Dynamic Yield", "Voucherify", "Onestock"]

const open = reactive({ frontend: true, backend: true, devops: true, platforms: true })
const toggle = (k) => { open[k] = !open[k] }
</script>

<style scoped>
/* Entity header */
.entity-hdr {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  gap: 8px;
  padding: 8px 12px;
  background: rgba(249,115,22,0.06);
  border-bottom: 1px solid var(--border);
}

.entity-name {
  font-size: 12px;
  font-weight: 700;
  color: var(--accent);
}

.entity-tag {
  font-size: 10px;
  color: var(--text-dim);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 1px 6px;
}

/* Component list */
.comp-list { padding: 2px 0; }

.comp-block { border-bottom: 1px solid var(--border); }
.comp-block:last-child { border-bottom: none; }

.comp-hdr {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 12px;
  cursor: pointer;
  user-select: none;
  transition: background 0.15s;
}

.comp-hdr:hover { background: rgba(255,255,255,0.025); }

.tog {
  font-size: 8px;
  color: var(--text-dim);
  width: 10px;
  flex-shrink: 0;
}

.comp-icon {
  font-size: 12px;
  flex-shrink: 0;
}
.comp-icon.cyan   { color: #67e8f9; }
.comp-icon.green  { color: #86efac; }
.comp-icon.orange { color: #fdba74; }
.comp-icon.purple { color: #c4b5fd; }

.comp-name {
  font-size: 12px;
  font-weight: 600;
  color: var(--text-color);
  flex: 1;
}

.comp-badge {
  font-size: 9px;
  color: var(--text-dim);
  background: var(--bg-header);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 1px 5px;
  flex-shrink: 0;
}

.comp-body {
  padding: 8px 12px 14px 30px;
  background: rgba(0,0,0,0.18);
  border-top: 1px solid var(--border);
}

.comp-desc {
  font-size: 10px;
  color: var(--text-dim);
  font-style: italic;
  margin-bottom: 8px;
}

.badge-row {
  display: flex;
  flex-wrap: wrap;
  gap: 4px;
  margin-bottom: 10px;
}

.skill-badge {
  font-size: 10px;
  padding: 2px 7px;
  border: 1px solid var(--border-bright);
  border-radius: 2px;
  color: var(--text-color);
}

.sub-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0;
}

@media (max-width: 480px) { .sub-grid { grid-template-columns: 1fr; } }

.sub-row {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 3px 0;
  font-size: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.03);
}

.sub-k { color: var(--text-dim); min-width: 80px; flex-shrink: 0; }
.sub-v { color: var(--text-color); }
</style>
