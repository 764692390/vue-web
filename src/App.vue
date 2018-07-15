<template>
  <div id="app">
    <transition name="slide-fade">
      <router-view/>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style lang="less" scoped>
#app{
  width: 100%;
  height: 100%;
  overflow: hidden;
}
.slide-fade-enter-active {
  transition: all .3s ease-in;
}
.slide-fade-leave-active {
  transition: all .3s ease-out;
}
.slide-fade-enter, .slide-fade-leave-to {
  transform: translateX(100%);
  opacity: 0;
}
</style>
