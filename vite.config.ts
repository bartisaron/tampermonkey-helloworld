import { defineConfig } from "vite";
import monkey from "vite-plugin-monkey";

export default defineConfig({
  plugins: [
    monkey({
      entry: "src/vanenet-hello.ts",
      userscript: {
        name: "Vanenet Hello World",
        namespace: "https://github.com/bartisaron/tampermonkey-helloworld",
        version: "0.1.0",
        description: "Hello World on vanenet.hu",
        author: "You",
        match: ["https://vanenet.hu/*", "https://www.vanenet.hu/*"],
        updateURL:
          "https://bartisaron.github.io/tampermonkey-helloworld/vanenet-hello.user.js",
        downloadURL:
          "https://bartisaron.github.io/tampermonkey-helloworld/vanenet-hello.user.js",
        grant: "none",
      },
    }),
  ],
});
