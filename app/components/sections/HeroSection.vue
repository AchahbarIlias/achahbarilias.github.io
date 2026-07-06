<template>
  <section class="section">
    <div class="engine-panel">

      <!-- Panel header -->
      <div class="engine-panel-header">
        <span class="panel-icon">⬡</span>
        <span class="panel-title">Scene View</span>
        <span class="engine-path">
          <span class="sep">/</span>World<span class="sep">/</span>Main
        </span>
        <div class="panel-controls">
          <span class="cam-badge">Perspective</span>
          <span class="cam-badge">Lit</span>
          <div class="panel-dot" style="background:#f59e0b"></div>
          <div class="panel-dot" style="background:#ef4444"></div>
        </div>
      </div>

      <!-- Viewport -->
      <div class="viewport">
        <div class="viewport-grid"></div>

        <div class="viewport-inner grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16 items-center relative z-10">

          <!-- LEFT -->
          <div class="animate-[fadeInLeft_0.7s_ease-out]">

            <!-- Console init line -->
            <div class="console-line mb-5">
              <span class="con-pfx">&gt;</span>
              <span class="con-txt">Initializing portfolio.exe...</span>
              <span class="con-cur">█</span>
            </div>

            <!-- Title -->
            <div class="mb-5">
              <div class="entity-label mb-2">PLAYER ENTITY</div>
              <h1 class="font-black leading-tight text-4xl md:text-5xl lg:text-6xl">
                <span class="comment-line">// Welcome to the portfolio of</span>
                Ilias
              </h1>
            </div>

            <!-- Subtitle -->
            <p class="text-sm md:text-base leading-relaxed max-w-xl mb-7" style="color:var(--text-dim)">
              Full Stack Developer specializing in headless e-commerce — building scalable platforms with Next.js, Nuxt.js, and cloud-native MACH architecture.
            </p>

            <!-- Object properties inspector -->
            <div class="obj-props mb-7">
              <div class="props-hdr">▼ Transform</div>
              <div class="prop-row">
                <span class="prop-k">Commits</span>
                <span class="prop-v accent">10+</span>
              </div>
              <div class="prop-row">
                <span class="prop-k">XP (days)</span>
                <span class="prop-v accent">{{ daysExperience }}</span>
              </div>
              <div class="prop-row">
                <span class="prop-k">Status</span>
                <span class="prop-v green">● Active</span>
              </div>
            </div>

            <!-- CTA -->
            <div class="flex flex-col sm:flex-row gap-3">
              <NuxtLink to="/contact" class="btn-primary">
                <span class="btn-ico">▶</span> Spawn Contact
              </NuxtLink>
              <a href="/#projects" class="btn-secondary">
                <span class="btn-ico">⊞</span> Load Projects
              </a>
            </div>
          </div>

          <!-- RIGHT — Character viewport -->
          <div class="flex items-center justify-center animate-[fadeInRight_0.7s_ease-out]">
            <div class="char-panel">
              <div class="char-panel-hdr">
                <span style="color:var(--text-dim);font-size:9px">ACTOR: ilias_entity_01</span>
              </div>
              <div class="char-frame">
                <!-- floating character -->
                <div class="abs-fill flex items-center justify-center animate-[float_3s_ease-in-out_infinite]">
                  <Utils-Icon name="roblox-char.webp" size="xxxl" />
                </div>
                <!-- corner brackets -->
                <span class="corner tl"></span>
                <span class="corner tr"></span>
                <span class="corner bl"></span>
                <span class="corner br"></span>
                <!-- shine sweep -->
                <div class="frame-shine animate-[shine_4s_infinite]"></div>
              </div>
              <div class="char-panel-ftr">
                <span>MESH: character.fbx</span>
                <span style="color:var(--green)">● READY</span>
              </div>
            </div>
          </div>

        </div>

        <!-- Viewport coords overlay -->
        <div class="vp-coords">
          <span>X: 0.00</span><span>Y: 0.00</span><span>Z: 0.00</span>
        </div>
      </div>

    </div>
  </section>
</template>

<script setup>
const daysExperience = computed(() => {
  const start = new Date(2022, 9, 1)
  return Math.floor((new Date() - start) / 86400000) + "+"
})
</script>

<style>
@keyframes fadeInLeft  { from { opacity:0; transform:translateX(-30px) } to { opacity:1; transform:translateX(0) } }
@keyframes fadeInRight { from { opacity:0; transform:translateX(30px)  } to { opacity:1; transform:translateX(0) } }
@keyframes float       { 0%,100%{transform:translateY(0)} 50%{transform:translateY(-10px)} }
@keyframes shine       { 0%{transform:translate(-150%,-150%)} 100%{transform:translate(150%,150%)} }
@keyframes blink       { 0%,100%{opacity:1} 50%{opacity:0} }
</style>

<style scoped>
.viewport {
  position: relative;
  background: var(--bg-darker);
}

.viewport-grid {
  position: absolute;
  inset: 0;
  background:
    repeating-linear-gradient(0deg,  rgba(255,255,255,0.03) 0,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 40px),
    repeating-linear-gradient(90deg, rgba(255,255,255,0.03) 0,rgba(255,255,255,0.03) 1px,transparent 1px,transparent 40px);
  pointer-events: none;
}

.viewport-inner {
  padding: 2rem 1.5rem;
}

@media (min-width: 768px) { .viewport-inner { padding: 2.5rem; } }

/* Console line */
.console-line {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 11px;
}
.con-pfx { color: var(--accent); }
.con-txt  { color: var(--text-dim); }
.con-cur  { color: var(--accent); font-size: 10px; animation: blink 1s step-end infinite; }

/* Entity label */
.entity-label {
  font-size: 9px;
  letter-spacing: 0.2em;
  color: var(--accent);
  border-left: 2px solid var(--accent);
  padding-left: 8px;
  text-transform: uppercase;
}

/* Comment title line */
.comment-line {
  display: block;
  font-size: clamp(0.8rem, 2vw, 1rem);
  font-weight: 400;
  color: var(--text-dim);
  font-style: italic;
  margin-bottom: 6px;
}

/* Object Properties */
.obj-props {
  border: 1px solid var(--border);
  border-radius: 3px;
  overflow: hidden;
  max-width: 260px;
}

.props-hdr {
  background: var(--bg-header);
  padding: 4px 10px;
  font-size: 10px;
  font-weight: 600;
  color: var(--text-dim);
  border-bottom: 1px solid var(--border);
  letter-spacing: 0.05em;
}

.prop-row {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 4px 10px;
  font-size: 11px;
  border-bottom: 1px solid rgba(255,255,255,0.03);
}

.prop-row:last-child { border-bottom: none; }

.prop-k { color: var(--text-dim); }
.prop-v { font-weight: 600; }
.prop-v.accent { color: var(--accent); }
.prop-v.green  { color: var(--green); }

/* Buttons */
.btn-primary, .btn-secondary {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 18px;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border-radius: 2px;
  cursor: pointer;
  transition: opacity 0.15s, transform 0.15s, border-color 0.15s, color 0.15s;
}

.btn-primary {
  background: var(--accent);
  color: #000;
  border: none;
}
.btn-primary:hover  { opacity: 0.85; transform: translateY(-1px); }

.btn-secondary {
  background: transparent;
  color: var(--text-color);
  border: 1px solid var(--border-bright);
}
.btn-secondary:hover { border-color: var(--accent); color: var(--accent); transform: translateY(-1px); }

.btn-ico { font-size: 9px; }

/* Character panel */
.char-panel {
  width: 100%;
  max-width: 280px;
}

.char-panel-hdr {
  background: var(--bg-header);
  border: 1px solid var(--border);
  border-bottom: none;
  padding: 4px 10px;
  border-radius: 3px 3px 0 0;
}

.char-frame {
  position: relative;
  width: 100%;
  aspect-ratio: 1;
  border: 1px solid var(--accent);
  background: radial-gradient(ellipse at center, rgba(249,115,22,0.07) 0%, var(--bg-darker) 70%);
  overflow: hidden;
  box-shadow: 0 0 24px rgba(249,115,22,0.12), inset 0 0 16px rgba(249,115,22,0.05);
}

.abs-fill { position: absolute; inset: 0; }

/* Corner brackets */
.corner {
  position: absolute;
  width: 14px;
  height: 14px;
  border-color: var(--accent);
  border-style: solid;
  opacity: 0.65;
}
.corner.tl { top:8px;    left:8px;    border-width:2px 0 0 2px; }
.corner.tr { top:8px;    right:8px;   border-width:2px 2px 0 0; }
.corner.bl { bottom:8px; left:8px;    border-width:0 0 2px 2px; }
.corner.br { bottom:8px; right:8px;   border-width:0 2px 2px 0; }

.frame-shine {
  position: absolute;
  inset: 0;
  background: linear-gradient(45deg, transparent, rgba(255,255,255,0.04), transparent);
  pointer-events: none;
}

.char-panel-ftr {
  background: var(--bg-header);
  border: 1px solid var(--border);
  border-top: none;
  border-radius: 0 0 3px 3px;
  padding: 4px 10px;
  display: flex;
  justify-content: space-between;
  font-size: 9px;
  color: var(--text-dim);
}

/* Coords overlay */
.vp-coords {
  position: absolute;
  bottom: 8px;
  left: 12px;
  display: flex;
  gap: 12px;
  font-size: 9px;
  color: var(--text-dim);
  opacity: 0.4;
  pointer-events: none;
}

/* Camera badges */
.cam-badge {
  font-size: 9px;
  padding: 1px 5px;
  border: 1px solid var(--border);
  border-radius: 2px;
  color: var(--text-dim);
}
</style>
