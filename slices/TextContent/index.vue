<template>
  <section class="section" v-bind="theme.wrapper">
    <div class="ps__wrap">
      <ps-description v-if="slice.primary.content" :field="slice.primary.content" :theme="theme.description" :align="theme.align" />
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
import { PsDescription } from 'vue-essential-slices/src/components';
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
  components: {
    PsDescription,
  }
}
</script>
<style scoped lang="scss">
@import "vue-essential-slices/src/styles/styles.scss";
.ps__wrap {
  padding: {
    top: calc(var(--v-space) / 2);
    bottom: calc(var(--v-space) / 2);
  }
  background: #eeeeee;
  color: #111;
}
</style>

