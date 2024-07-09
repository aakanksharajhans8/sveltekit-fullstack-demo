import * as server from '../entries/pages/cloud-wallet/_page.server.ts.js';

export const index = 4;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/cloud-wallet/_page.svelte.js')).default;
export { server };
export const server_id = "src/routes/cloud-wallet/+page.server.ts";
export const imports = ["_app/immutable/nodes/4.B0-tP1kB.js","_app/immutable/chunks/scheduler.Bb3v1ohj.js","_app/immutable/chunks/index.PYyVCeOJ.js"];
export const stylesheets = [];
export const fonts = [];
