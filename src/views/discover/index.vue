<template>
  <div>
    <router-view :key="key"></router-view>
  </div>
</template>

<script>
export default {
  name: "discover",
  computed: {
    key() {
      return this.$route.query.key;
    },
  },
};
</script>

<style></style>
