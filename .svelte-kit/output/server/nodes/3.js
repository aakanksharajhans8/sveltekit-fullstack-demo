import * as server from '../entries/pages/bounty/_page.server.ts.js';

export const index = 3;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/bounty/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/bounty/+page.server.ts";
export const imports = ["_app/immutable/nodes/3.CyJ4K-VE.js","_app/immutable/chunks/scheduler.Bb3v1ohj.js","_app/immutable/chunks/index.PYyVCeOJ.js","_app/immutable/chunks/entry.Df8Yo-g1.js"];
export const stylesheets = [];
export const fonts = [];
