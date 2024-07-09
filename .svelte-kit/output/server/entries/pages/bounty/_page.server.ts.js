import { prop, method, SmartContract, assert, DefaultProvider, bsv } from "scrypt-ts";
import { NeucronSigner } from "neucron-signer";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __decorateClass = (decorators, target, key, kind) => {
  var result = kind > 1 ? void 0 : kind ? __getOwnPropDesc(target, key) : target;
  for (var i = decorators.length - 1, decorator; i >= 0; i--)
    if (decorator = decorators[i])
      result = (kind ? decorator(target, key, result) : decorator(result)) || result;
  if (kind && result) __defProp(target, key, result);
  return result;
};
class Root extends SmartContract {
  square;
  constructor(sq) {
    super(...arguments);
    this.square = sq;
  }
  unlock(root) {
    assert(root * root == this.square, "incorrect square-root");
  }
}
__decorateClass([
  prop()
], Root.prototype, "square", 2);
__decorateClass([
  method()
], Root.prototype, "unlock", 1);
const version = 9;
const compilerVersion = "1.19.2+commit.c3a20a0";
const contract = "Root";
const md5 = "0086ed6bd171bcb22f444bb8632070d4";
const structs = [];
const library = [];
const alias = [];
const abi = [
  {
    type: "function",
    name: "unlock",
    index: 0,
    params: [
      {
        name: "root",
        type: "int"
      }
    ]
  },
  {
    type: "constructor",
    params: [
      {
        name: "sq",
        type: "int"
      }
    ]
  }
];
const stateProps = [];
const buildType = "debug";
const file = "file:///C:/Users/dell/Documents/TSOC%202024/sveltekit-fullstack-demo/artifacts/root.scrypt";
const hex = "00<sq>610079527a75517a7561517952799551799c7777";
const sourceMapFile = "";
const artifact = {
  version,
  compilerVersion,
  contract,
  md5,
  structs,
  library,
  alias,
  abi,
  stateProps,
  buildType,
  file,
  hex,
  sourceMapFile
};
const provider = new DefaultProvider({ network: bsv.Networks.mainnet });
const signer = new NeucronSigner(provider);
await signer.login("sales@timechainlabs.io", "string");
await Root.loadArtifact(artifact);
let instance;
const actions = {
  deploy: async ({ request }) => {
    const data = await request.formData();
    const square = BigInt(Number(data.get("square")));
    instance = new Root(square);
    await instance.connect(signer);
    try {
      const deployTx = await instance.deploy(Number(data.get("bounty")));
      console.log(
        "smart lock deployed : https://whatsonchain.com/tx/" + deployTx.id
      );
      return { deployed: true, txid: deployTx.id };
    } catch (error) {
      return { deployed: false, txid: error.message };
    }
  },
  unlock: async ({ request }) => {
    const data = await request.formData();
    const root = Number(data.get("root"));
    await instance.connect(signer);
    try {
      const { tx: callTx } = await instance.methods.unlock(root);
      console.log(
        "contract unlocked successfully : https://whatsonchain.com/tx/" + callTx.id
      );
      return { success: true, txid: callTx.id };
    } catch (error) {
      console.log(error.message);
      return { success: false, txid: error.message };
    }
  }
};
export {
  actions
};
