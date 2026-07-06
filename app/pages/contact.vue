<template>
  <div class="page-wrapper">
    <div class="section">

      <div class="contact-grid">

        <!-- Left: Inspector panel -->
        <div class="engine-panel">
          <div class="engine-panel-header">
            <span class="panel-icon">⊙</span>
            <span class="panel-title">Inspector</span>
            <span class="engine-path">
              <span class="sep">/</span>ilias_entity<span class="sep">/</span>ContactPoints
            </span>
            <div class="panel-controls">
              <div class="panel-dot" style="background:var(--green)"></div>
              <div class="panel-dot" style="background:var(--yellow)"></div>
              <div class="panel-dot" style="background:#ef4444"></div>
            </div>
          </div>

          <div class="insp-body">
            <!-- Component block -->
            <div class="comp-block">
              <div class="comp-hdr">
                <span class="tog">▼</span>
                <span class="comp-icon">✉</span>
                <span class="comp-name">ContactComponent</span>
                <span class="comp-badge">Script</span>
              </div>

              <div class="prop-row">
                <span class="prop-k">Status</span>
                <span class="prop-v green">● Open to work</span>
              </div>
              <div class="prop-row">
                <span class="prop-k">Location</span>
                <span class="prop-v">Mechelen, Belgium</span>
              </div>
              <div class="prop-row">
                <span class="prop-k">Email</span>
                <a href="mailto:ilias.achahbar@outlook.com" class="prop-v link">
                  ilias.achahbar.business<br>@gmail.com
                </a>
              </div>
              <div class="prop-row">
                <span class="prop-k">GitHub</span>
                <a href="https://github.com" target="_blank" class="prop-v link">github.com</a>
              </div>
              <div class="prop-row">
                <span class="prop-k">LinkedIn</span>
                <a href="https://linkedin.com/in/ilias-achahbar" target="_blank" class="prop-v link">linkedin.com</a>
              </div>
            </div>

            <!-- Channels block -->
            <div class="comp-block">
              <div class="comp-hdr">
                <span class="tog">▼</span>
                <span class="comp-icon">⊞</span>
                <span class="comp-name">QuickActions</span>
              </div>

              <div class="quick-actions">
                <a href="mailto:ilias.achahbar@outlook.com" class="qa-btn">
                  <span class="qa-icon">✉</span> Send Email
                </a>
                <a href="https://github.com" target="_blank" class="qa-btn">
                  <span class="qa-icon">⊙</span> GitHub
                </a>
                <a href="https://linkedin.com/in/ilias-achahbar" target="_blank" class="qa-btn">
                  <span class="qa-icon">⬡</span> LinkedIn
                </a>
              </div>
            </div>
          </div>
        </div>

        <!-- Right: Console / form panel -->
        <div class="engine-panel">
          <div class="engine-panel-header">
            <span class="panel-icon">▶</span>
            <span class="panel-title">Console</span>
            <span class="engine-path">
              <span class="sep">/</span>ilias_entity<span class="sep">/</span>SendMessage
            </span>
            <div class="panel-controls">
              <div class="panel-dot" style="background:var(--green)"></div>
              <div class="panel-dot" style="background:var(--yellow)"></div>
              <div class="panel-dot" style="background:#ef4444"></div>
            </div>
          </div>

          <div class="console-body">
            <!-- Init log lines -->
            <div class="log-line">
              <span class="log-pfx">&gt;</span>
              <span class="log-txt">ready to receive input</span>
              <span class="log-cur">█</span>
            </div>

            <form class="cform" @submit.prevent="handleSubmit">
              <div class="field">
                <label class="field-label">name</label>
                <input
                  v-model="form.name"
                  class="field-input"
                  placeholder="Your name"
                  required
                />
              </div>
              <div class="field">
                <label class="field-label">email</label>
                <input
                  v-model="form.email"
                  class="field-input"
                  type="email"
                  placeholder="your@email.com"
                  required
                />
              </div>
              <div class="field">
                <label class="field-label">subject</label>
                <input
                  v-model="form.subject"
                  class="field-input"
                  placeholder="What's this about?"
                />
              </div>
              <div class="field">
                <label class="field-label">message</label>
                <textarea
                  v-model="form.message"
                  class="field-input field-textarea"
                  placeholder="Your message..."
                  rows="5"
                  required
                ></textarea>
              </div>

              <div class="cform-footer">
                <NuxtLink to="/" class="back-btn">← Back</NuxtLink>
                <button type="submit" class="submit-btn">
                  <span>▶</span> Execute Send
                </button>
              </div>
            </form>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const form = reactive({ name: '', email: '', subject: '', message: '' })

function handleSubmit() {
  const subject = encodeURIComponent(form.subject || 'Portfolio Contact')
  const body    = encodeURIComponent(
    `Name: ${form.name}\nFrom: ${form.email}\n\n${form.message}`
  )
  window.location.href =
    `mailto:ilias.achahbar@outlook.com?subject=${subject}&body=${body}`
}
</script>

<style scoped>
.contact-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 16px;
}

@media (min-width: 768px) {
  .contact-grid {
    grid-template-columns: 280px 1fr;
  }
}

/* ── Inspector ─────────────────────────────── */
.insp-body {
  background: var(--bg-panel);
}

.comp-block {
  border-bottom: 1px solid var(--border);
}

.comp-block:last-child { border-bottom: none; }

.comp-hdr {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 6px 12px;
  background: var(--bg-darker);
  border-bottom: 1px solid var(--border);
  cursor: default;
  user-select: none;
}

.tog       { font-size: 8px; color: var(--text-dim); }
.comp-icon { font-size: 11px; color: var(--accent); }
.comp-name { font-size: 10px; font-weight: 700; color: var(--text-color); flex: 1; }

.comp-badge {
  font-size: 8px;
  padding: 1px 5px;
  border: 1px solid var(--border-bright);
  border-radius: 2px;
  color: var(--text-dim);
}

.prop-row {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  gap: 8px;
  padding: 6px 12px;
  font-size: 10px;
  border-bottom: 1px solid rgba(255,255,255,0.03);
}

.prop-row:last-child { border-bottom: none; }

.prop-k    { color: var(--text-dim); flex-shrink: 0; padding-top: 1px; }
.prop-v    { color: var(--text-color); text-align: right; word-break: break-word; }
.prop-v.green { color: var(--green); font-weight: 700; }
.prop-v.link  { color: var(--blue); text-decoration: none; }
.prop-v.link:hover { text-decoration: underline; }

/* Quick actions */
.quick-actions {
  padding: 10px 12px;
  display: flex;
  flex-direction: column;
  gap: 6px;
}

.qa-btn {
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 7px 10px;
  border: 1px solid var(--border);
  border-radius: 2px;
  font-size: 10px;
  color: var(--text-dim);
  text-decoration: none;
  background: var(--bg-darker);
  transition: border-color 0.15s, color 0.15s, background 0.15s;
}

.qa-btn:hover {
  border-color: var(--accent);
  color: var(--accent);
  background: rgba(148, 106, 80, 0.06);
}

.qa-icon { font-size: 11px; }

/* ── Console / Form ────────────────────────── */
.console-body {
  padding: 16px;
  background: var(--bg-panel);
}

.log-line {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 10px;
  margin-bottom: 20px;
  color: var(--text-dim);
}

.log-pfx { color: var(--accent); }
.log-cur  { color: var(--accent); animation: blink 1s step-end infinite; font-size: 9px; }

@keyframes blink { 0%,100%{opacity:1} 50%{opacity:0} }

/* Form */
.cform {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.field { display: flex; flex-direction: column; gap: 5px; }

.field-label {
  font-size: 9px;
  color: var(--text-dim);
  font-style: italic;
  letter-spacing: 0.05em;
}

.field-input {
  background: var(--bg-darker);
  border: 1px solid var(--border);
  border-radius: 2px;
  padding: 8px 10px;
  font-size: 11px;
  color: var(--text-color);
  font-family: inherit;
  font-variation-settings: "MONO" 1;
  transition: border-color 0.15s;
  outline: none;
  width: 100%;
}

.field-input:focus { border-color: var(--accent); }
.field-input::placeholder { color: var(--text-dim); opacity: 0.5; }

.field-textarea {
  resize: vertical;
  min-height: 100px;
}

.cform-footer {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 4px;
}

.back-btn {
  font-size: 10px;
  color: var(--text-dim);
  text-decoration: none;
  transition: color 0.15s;
}

.back-btn:hover { color: var(--text-color); }

.submit-btn {
  display: flex;
  align-items: center;
  gap: 7px;
  padding: 8px 20px;
  background: var(--accent);
  color: #000;
  font-size: 11px;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  border: none;
  border-radius: 2px;
  cursor: pointer;
  font-family: inherit;
  transition: opacity 0.15s, transform 0.15s;
}

.submit-btn:hover { opacity: 0.85; transform: translateY(-1px); }
</style>
