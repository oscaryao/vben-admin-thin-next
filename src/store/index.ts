import type { App } from 'vue';
import { createPinia } from 'pinia';
/**
 * default Pinia
 */
const store = createPinia();

export function setupStore(app: App<Element>) {
  app.use(store);
}

export { store };
