<template>
  <div class="layout-root">
    <NavBar />
    <main class="layout-main">
      <slot />
    </main>
    <Footer />
  </div>
</template>

<style>
.layout-root {
  min-height: 100vh;
  display: flex;
  flex-direction: column;
}

.layout-main {
  flex: 1;
  display: flex;
  flex-direction: column;
}
</style>
