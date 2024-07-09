import { c as create_ssr_component, e as escape } from "../../../chunks/ssr.js";
import "@bsv/sdk";
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let WIF;
  let address;
  return `<section><button class="bg-black text-white p-2 rounded" data-svelte-h="svelte-rgrp57">Generate New Wallet Keys</button> <p>Private Key WIF format is ${escape(WIF)}</p> <p>Your Bitcoin Address is ${escape(address)}</p></section>`;
});
export {
  Page as default
};
