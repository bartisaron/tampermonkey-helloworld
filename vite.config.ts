import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/vanenet-hello.ts",
      userscript: {
        name: "Vanenet Hello World",
        namespace: "https://github.com/bartisaron/tampermonkey-helloworld",
        version: "0.1.1",
        description: "Hello World on vanenet.hu",
        author: "bartisaron",
        match: ["https://vanenet.hu/*", "https://www.vanenet.hu/*"],
        updateURL:
          "https://bartisaron.github.io/tampermonkey-helloworld/tampermonkey-helloworld.user.js",
        downloadURL:
          "https://bartisaron.github.io/tampermonkey-helloworld/tampermonkey-helloworld.user.js",
        grant: "none",
      },
    }),
  ],
});
