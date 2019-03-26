<template>
  <span class="logo">
    <!-- eslint-disable-next-line -->
    <span>TO</span><span class="mirror-text">OL</span>
  </span>
</template>

<script>
export default {
  name: "Logo"
};
</script>

<style scoped>
.logo span {
  display: inline-block;
}

.mirror-text {
  transform: scale(-1, 1);
  direction: rtl;
  unicode-bidi: bidi-override;
}
</style>
