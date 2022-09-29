import { Plugin } from 'vite';

declare module "vite-plugin-libfile" {
  interface Params {
    paths: string[]
  }
  function libFile(params: Params): Plugin;
  export { libFile as default };
}
