<template>
  <section class="ps" v-bind="theme.wrapper">
    <div class="ps__wrap">
      <div class="ps__desc" v-if="slice.primary.content" v-html="$prismic.asHtml(slice.primary.content)">
      </div>
      <template v-else>
        <h1>Empty textContent</h1>
        <p v-if="endpoint">
          Write content <a target="_blank" :href="endpoint">in your writing room</a>
        </p>
      </template>
    </div>
  </section>
</template>
<script>
export default {
  props: ['slice', 'theme'],
  name: 'TextContent',
  computed: {
    endpoint() {
      return this.$prismic && this.$prismic.apiEndpoint
        ? this.$prismic.apiEndpoint.split('/').slice(0, -2).join('/').replace('cdn.', '')
        : null
    }
  },
}
</script>
<style lang="scss" scoped>
@import "vue-essential-slices/src/styles/styles.scss";
@import "@/assets/scss/_variables.scss";

.ps {
  padding: {
    top: 0;
    bottom: 0;
  }
}
.ps__wrap {
  padding: {
    top: calc(var(--v-space) / 2);
    bottom: calc(var(--v-space) / 2);
    right: var(--c-margin);
    left: var(--c-margin);
  }
  background: #ffffff;
  color: #111;
  .ps__desc {
    a { color: $primary }
  }
}
</style>

