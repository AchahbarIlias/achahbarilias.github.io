<template>
  <section id="experience" class="section">
    <div class="engine-panel">

      <!-- Panel header -->
      <div class="engine-panel-header">
        <span class="panel-icon">⏱</span>
        <span class="panel-title">Timeline</span>
        <span class="engine-path">
          <span class="sep">/</span>ilias_entity<span class="sep">/</span>Experience
        </span>
        <div class="panel-controls">
          <div class="panel-dot" style="background:var(--green)"></div>
          <div class="panel-dot" style="background:var(--yellow)"></div>
          <div class="panel-dot" style="background:#ef4444"></div>
        </div>
      </div>

      <!-- Horizontal (640px+) -->
      <div class="tl-h">
        <div
          v-for="job in chronoJobs"
          :key="job.company"
          class="tl-node"
        >
          <!-- Half-lines + dot -->
          <div class="node-track">
            <div class="node-line"></div>
            <div class="node-dot" :class="{ active: job.current }"></div>
            <div class="node-line"></div>
          </div>

          <!-- Content below -->
          <div class="node-body">
            <div class="nb-dates">
              <span>{{ job.from }}</span>
              <span class="nb-arrow">→</span>
              <span :class="{ 'nb-now': job.current }">{{ job.to }}</span>
            </div>
            <div class="nb-dur-row">
              <span class="nb-dur">{{ job.duration }}</span>
              <span v-if="job.current" class="nb-live">● LIVE</span>
            </div>
            <div class="nb-company">{{ job.company }}</div>
            <div class="nb-role">{{ job.role }}</div>
            <div class="nb-type">{{ job.type }}</div>
          </div>
        </div>
      </div>

      <!-- Vertical (mobile) -->
      <div class="tl-v">
        <div v-for="(job, i) in jobs" :key="job.company" class="tl-item">
          <div class="item-marker">
            <div class="item-dot" :class="{ active: job.current }"></div>
            <div class="item-line" v-if="i < jobs.length - 1"></div>
          </div>
          <div class="item-body">
            <div class="item-meta">
              <span>{{ job.from }}</span>
              <span class="dim">→</span>
              <span :class="{ 'col-green': job.current }">{{ job.to }}</span>
              <span class="item-dur">{{ job.duration }}</span>
              <span v-if="job.current" class="item-live">● LIVE</span>
            </div>
            <div class="item-role">{{ job.role }}</div>
            <div class="item-company-row">
              <span class="item-company">{{ job.company }}</span>
              <span class="dim">·</span>
              <span class="dim-sm">{{ job.type }}</span>
            </div>
            <div class="dim-sm">{{ job.location }}</div>
          </div>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const jobs = [
  {
    role: 'Full Stack Web Developer',
    company: 'Supersonic',
    type: 'Full-time',
    location: 'Hasselt, Belgium · Hybrid',
    from: 'Oct 2023',
    to: 'Present',
    duration: '1 yr 9 mos',
    current: true,
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Fenego',
    type: 'Full-time',
    location: 'Hasselt, Belgium · Hybrid',
    from: 'Oct 2022',
    to: 'Sep 2023',
    duration: '1 yr',
    current: false,
  },
  {
    role: 'Full Stack Web Developer',
    company: 'Adshot.io',
    type: 'Internship',
    location: 'Leuven, Belgium',
    from: 'Mar 2022',
    to: 'Jun 2022',
    duration: '4 mos',
    current: false,
  },
]

// Oldest → newest for left-to-right reading
const chronoJobs = [...jobs].reverse()
</script>

<style scoped>
/* ── Horizontal (640px+) ──────────────────────────── */
.tl-h  { display: none; }
.tl-v  { display: block; }

@media (min-width: 640px) {
  .tl-h  { display: flex; padding: 28px 20px 24px; background: var(--bg-panel); }
  .tl-v  { display: none; }
}

/* Node column */
.tl-node {
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  min-width: 0;
}

/* Track row: line — dot — line */
.node-track {
  display: flex;
  align-items: center;
  width: 100%;
  margin-bottom: 14px;
}

.node-line {
  flex: 1;
  height: 1px;
  background: var(--border);
}

/* Hide outer half-lines on first / last node */
.tl-node:first-child .node-line:first-child { background: transparent; }
.tl-node:last-child  .node-line:last-child  { background: transparent; }

.node-dot {
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: var(--border-bright);
  border: 2px solid var(--border);
  flex-shrink: 0;
  z-index: 1;
}

.node-dot.active {
  background: var(--accent);
  border-color: var(--accent);
  animation: tl-pulse 2.5s ease-in-out infinite;
}

@keyframes tl-pulse {
  0%, 100% { box-shadow: 0 0 0 3px var(--accent-glow); }
  50%       { box-shadow: 0 0 0 7px transparent; }
}

/* Content below dot */
.node-body {
  text-align: center;
  padding: 0 6px;
  width: 100%;
  min-width: 0;
}

.nb-dates {
  display: flex;
  align-items: center;
  gap: 3px;
  font-size: 9px;
  color: var(--text-dim);
  margin-bottom: 4px;
  justify-content: center;
  flex-wrap: wrap;
}

.nb-arrow { opacity: 0.4; }
.nb-now   { color: var(--green); font-weight: 700; }

.nb-dur-row {
  display: flex;
  align-items: center;
  gap: 5px;
  justify-content: center;
  margin-bottom: 8px;
}

.nb-dur {
  font-size: 9px;
  padding: 1px 5px;
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--text-dim);
}

.nb-live {
  font-size: 9px;
  color: var(--green);
  font-weight: 700;
  letter-spacing: 0.06em;
  animation: tl-blink 2s step-end infinite;
}

@keyframes tl-blink {
  0%, 100% { opacity: 1; }
  50%       { opacity: 0.4; }
}

.nb-company {
  font-size: 11px;
  font-weight: 700;
  color: var(--accent);
  margin-bottom: 3px;
  word-break: break-word;
}

.nb-role {
  font-size: 9px;
  color: var(--text-color);
  line-height: 1.4;
  margin-bottom: 2px;
}

.nb-type {
  font-size: 9px;
  color: var(--text-dim);
}

/* ── Vertical (mobile) ────────────────────────────── */
.tl-v {
  padding: 16px 16px 8px;
  background: var(--bg-panel);
}

.tl-item {
  display: flex;
  gap: 12px;
}

.item-marker {
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-shrink: 0;
  padding-top: 2px;
  width: 14px;
}

.item-dot {
  width: 9px;
  height: 9px;
  border-radius: 50%;
  background: var(--border-bright);
  border: 2px solid var(--border);
  flex-shrink: 0;
}

.item-dot.active {
  background: var(--accent);
  border-color: var(--accent);
  animation: tl-pulse 2.5s ease-in-out infinite;
}

.item-line {
  width: 1px;
  flex: 1;
  background: var(--border);
  margin: 5px 0;
  min-height: 20px;
}

.item-body     { padding-bottom: 20px; flex: 1; min-width: 0; }
.tl-item:last-child .item-body { padding-bottom: 4px; }

.item-meta {
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 10px;
  color: var(--text-dim);
  margin-bottom: 4px;
  flex-wrap: wrap;
}

.item-dur {
  padding: 1px 5px;
  border: 1px solid var(--border);
  border-radius: 2px;
  font-size: 9px;
}

.item-live {
  font-size: 9px;
  color: var(--green);
  font-weight: 700;
  letter-spacing: 0.08em;
  animation: tl-blink 2s step-end infinite;
}

.item-role { font-size: 12px; font-weight: 700; color: var(--text-color); margin-bottom: 2px; }

.item-company-row {
  display: flex;
  gap: 5px;
  align-items: center;
  margin-bottom: 1px;
}

.item-company { font-size: 11px; color: var(--accent); font-weight: 600; }
.dim          { color: var(--border-bright); font-size: 10px; }
.dim-sm       { font-size: 10px; color: var(--text-dim); }
.col-green    { color: var(--green); font-weight: 700; }
</style>
