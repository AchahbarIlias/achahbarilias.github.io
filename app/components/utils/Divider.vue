<template>
  <div class="panel-sep">
    <div class="sep-line"></div>
    <div class="sep-handle">⠿</div>
    <div class="sep-line"></div>
  </div>
</template>

<style scoped>
.panel-sep {
  display: flex;
  align-items: center;
  padding: 0 1rem;
  margin: 2px 0;
  height: 12px;
}

.sep-line {
  flex: 1;
  height: 1px;
  background: var(--border);
}

.sep-handle {
  padding: 0 8px;
  color: var(--border-bright);
  font-size: 11px;
  cursor: row-resize;
  user-select: none;
  letter-spacing: -2px;
}
</style>
