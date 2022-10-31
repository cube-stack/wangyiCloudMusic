<template>
  <div class="home">
    <header-tab></header-tab>
    <router-view></router-view>
  </div>
</template>

<script>
import HeaderTab from '@/components/HeaderTab/HeaderTab.vue'
export default {
  name: 'home',
  components: {
    HeaderTab
  },
}
</script>
