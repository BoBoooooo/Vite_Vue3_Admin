<template>
  <svg aria-hidden="true" :class="svgClass">
    <use :xlink:href="symbolId" />
  </svg>
</template>

<script>
import { defineComponent, computed } from 'vue';

export default defineComponent({
  name: 'SvgIcon',
  props: {
    prefix: {
      type: String,
      default: 'icon',
    },
    iconClass: {
      type: String,
      required: true,
    },
    className: {
      type: String,
      default: '',
    },
  },
  setup(props) {
    const symbolId = computed(() => `#${props.prefix}-${props.iconClass}`);
    const svgClass = computed(() => (props.className ? `SvgIcon ${props.className}` : 'SvgIcon'));
    return { symbolId, svgClass };
  },
});
</script>
<style scoped>
.SvgIcon {
  width: 1em;
  height: 1em;
  vertical-align: -0.15em;
  fill: currentColor;
  overflow: hidden;
}
</style>
