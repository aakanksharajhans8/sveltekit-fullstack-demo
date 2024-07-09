

export const index = 2;
let component_cache;
export const component = async () => component_cache ??= (await import('../entries/pages/_page.svelte.js')).default;
export const imports = ["_app/immutable/nodes/2.NzD2yRzr.js","_app/immutable/chunks/scheduler.Bb3v1ohj.js","_app/immutable/chunks/index.PYyVCeOJ.js"];
export const stylesheets = [];
export const fonts = [];
