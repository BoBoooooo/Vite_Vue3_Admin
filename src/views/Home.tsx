import { defineComponent } from 'vue';
import { useStore } from 'vuex';
import { Tag } from 'ant-design-vue';

export default defineComponent({
  name: 'App',
  setup() {
    const store = useStore();

    return () => (
      <>
        <h1>Home</h1>
        <h1>{store.state.title}</h1>
        <Tag color="blue">
          <a href="https://github.com/BoBoooooo/vite_vue3_demo" target="_blank">GitHub</a>
        </Tag>
      </>
    );
  },
});
