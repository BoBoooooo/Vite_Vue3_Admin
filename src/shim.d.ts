declare module "*.vue" {
  import { defineComponent } from "vue";
  const component: ReturnType<typeof defineComponent>;
  export default component;
}

interface ImportMeta {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  env: any;
}

