import { c as create_ssr_component, e as escape, f as each, d as add_attribute, v as validate_component } from "../../../chunks/ssr.js";
const Table = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { names } = $$props;
  if ($$props.names === void 0 && $$bindings.names && names !== void 0) $$bindings.names(names);
  return `<div class="mt-10 pt-10 w-full max-w-5xl p-16 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"><div class="flex items-center justify-between mb-4"><div class="space-y-1"><h2 class="text-xl font-semibold" data-svelte-h="svelte-1h6aat9">List of Users</h2> <p class="text-sm text-gray-500">Fetched ${escape(names.length)} users</p></div></div> <div class="divide-y divide-gray-900/5">${each(names, (user) => {
    return `<div class="flex items-center justify-between py-3 mt-2"><div class="flex items-center space-x-4 flex-grow"><div class="flex"><p class="font-medium pt-1 leading-none">${escape(user.name)}</p> <p class="font-medium pl-5 text-gray-500 pt-0">${escape(user.email)}</p> </div></div> <form method="POST" action="/profiles?/delete" class="flex-shrink-0"><input type="hidden" name="id" id="id"${add_attribute("value", user.id, 0)}> <button type="submit" data-svelte-h="svelte-wtv0j"><img class="w-4 float-right ml-5 mr-5" src="./trash-can.svg" alt="delete"> </button></form>  <form method="POST" action="/profiles?/update" class="flex items-center space-x-2"><input type="hidden" name="id"${add_attribute("value", user.id, 0)}> <input type="text" name="name" placeholder="New name" required class="border p-2 rounded"> <input type="email" name="email" placeholder="New email" required class="border p-2 rounded"> <button type="submit" class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-15 ml-10 px-5 py-2.5 rounded " data-svelte-h="svelte-o693zl">Update</button></form> </div>`;
  })}</div></div>`;
});
const Page = create_ssr_component(($$result, $$props, $$bindings, slots) => {
  let { data } = $$props;
  console.log("hello", data.names);
  let { form } = $$props;
  if ($$props.data === void 0 && $$bindings.data && data !== void 0) $$bindings.data(data);
  if ($$props.form === void 0 && $$bindings.form && form !== void 0) $$bindings.form(form);
  return `${validate_component(Table, "Table").$$render($$result, { names: data.names }, {}, {})} <div class="mt-10 pt-10 w-full max-w-xl p-12 mx-auto rounded-lg shadow-xl dark:bg-white/10 bg-white/30 ring-1 ring-gray-900/5 backdrop-blur-lg"><form method="POST" action="?/create" data-svelte-h="svelte-1tlkc66"><div class="flex flex-wrap -mx-3 mb-2"><div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">Name</label> <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="name" type="text" placeholder="Enter name" name="name"></div> <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0"><label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-city">Email</label> <input class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="email" type="text" placeholder="Enter email" name="email"></div>  <button type="submit" class="bg-yellow-500 hover:bg-blue-700 text-white font-bold mt-5 ml-2 px-2 rounded ">Create Applicant</button></div></form> ${form?.success ? ` <p class="pt-2" data-svelte-h="svelte-lairq3">Added new Applicant!</p>` : ``}</div>`;
});
export {
  Page as default
};
