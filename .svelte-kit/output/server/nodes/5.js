import * as server from '../entries/pages/profiles/_page.server.ts.js';

export const index = 5;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/profiles/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/profiles/+page.server.ts";
export const imports = ["_app/immutable/nodes/5.D72sz8yZ.js","_app/immutable/chunks/scheduler.Bb3v1ohj.js","_app/immutable/chunks/index.PYyVCeOJ.js"];
export const stylesheets = [];
export const fonts = [];
