<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
  props: {
    msg: {
      type: String,
      default: '',
    },
  },
});
</script>
