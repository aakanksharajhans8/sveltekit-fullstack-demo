

export const index = 0;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_layout.svelte.js')).default;
export const imports = ["_app/immutable/nodes/0.BEDyT2yr.js","_app/immutable/chunks/scheduler.Bb3v1ohj.js","_app/immutable/chunks/index.PYyVCeOJ.js"];
export const stylesheets = ["_app/immutable/assets/0.BNf7ZoiB.css"];
export const fonts = [];
