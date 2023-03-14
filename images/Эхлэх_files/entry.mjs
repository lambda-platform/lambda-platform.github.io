import { createSSRApp, createApp, nextTick } from "/_nuxt/node_modules/.vite/deps/vue.js?v=fd20351d";
import { $fetch } from "/_nuxt/node_modules/ofetch/dist/index.mjs?v=fd20351d";
import { baseURL } from "/_nuxt/@id/virtual:nuxt:/Users/munkh-altai/Workspace/LAMBDA/lambda-doc/.nuxt/paths.mjs";
import { createNuxtApp, applyPlugins, normalizePlugins } from "/_nuxt/node_modules/nuxt/dist/app/nuxt.mjs?v=fd20351d";
import "/_nuxt/@id/virtual:nuxt:/Users/munkh-altai/Workspace/LAMBDA/lambda-doc/.nuxt/css.mjs?t=1678788164093";
import _plugins from "/_nuxt/@id/virtual:nuxt:/Users/munkh-altai/Workspace/LAMBDA/lambda-doc/.nuxt/plugins/client.mjs?t=1678787692876";
import RootComponent from "/_nuxt/@id/virtual:nuxt:/Users/munkh-altai/Workspace/LAMBDA/lambda-doc/.nuxt/root-component.mjs?t=1678787692876";
import { appRootId } from "/_nuxt/@id/virtual:nuxt:/Users/munkh-altai/Workspace/LAMBDA/lambda-doc/.nuxt/nuxt.config.mjs";
if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch.create({
    baseURL: baseURL()
  });
}
let entry;
const plugins = normalizePlugins(_plugins);
if (process.server) {
  entry = async function createNuxtAppServer(ssrContext) {
    const vueApp = createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp, ssrContext });
    try {
      await applyPlugins(nuxt, plugins);
      await nuxt.hooks.callHook("app:created", vueApp);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    return vueApp;
  };
}
if (process.client) {
  if (process.dev && import.meta.webpackHot) {
    import.meta.webpackHot.accept();
  }
  entry = async function initApp() {
    const isSSR = Boolean(window.__NUXT__?.serverRendered);
    const vueApp = isSSR ? createSSRApp(RootComponent) : createApp(RootComponent);
    const nuxt = createNuxtApp({ vueApp });
    try {
      await applyPlugins(nuxt, plugins);
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
    try {
      await nuxt.hooks.callHook("app:created", vueApp);
      await nuxt.hooks.callHook("app:beforeMount", vueApp);
      vueApp.mount("#" + appRootId);
      await nuxt.hooks.callHook("app:mounted", vueApp);
      await nextTick();
    } catch (err) {
      await nuxt.callHook("app:error", err);
      nuxt.payload.error = nuxt.payload.error || err;
    }
  };
  entry().catch((error) => {
    console.error("Error while mounting app:", error);
  });
}
export default (ctx) => entry(ctx);
