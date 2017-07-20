<template>
  <div id="home">
    <h1>Hello {{name}}!</h1>
    <h2>You have fucked bitch for {{count}} times.</h2>
    <div class="buttons">
      <button @click="addCount">Fuck Bitch once</button>
      <button @click="addCountAsync">Fuck Bitch once for 1 second</button>
    </div>
  </div>
</template>



<style scoped lang="scss">
  @import './style.scss';
</style>
