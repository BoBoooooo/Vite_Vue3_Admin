declare module '*.vue' {
  import Vue from 'vue';
  export default Vue;
}

interface ImportMeta {
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  env: any;
}
