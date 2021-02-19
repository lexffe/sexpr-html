// Runtime detection

const runtime = typeof process !== "undefined" ? "node" : (typeof Deno !== "undefined" ? "deno" : "browser" );

export { transform } from "./lib";
