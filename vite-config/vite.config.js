import { defineConfig, loadEnv } from "vite";

const getData = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => resolve("Some async data spent 1000 ms."), 1000);
  });
};

export default defineConfig(async ({ command, mode, ssrBuild }) => {
  console.log({ command, mode, ssrBuild });

  const data = await getData(); // some async data
  console.log(data);

  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), ["VITE_", "APP_"]);
  console.log(env);

  if (mode === "production") {
    var base = "/site/";
  }

  return {
    base,
    clearScreen: false,
    envPrefix: ["APP_", "FIREBASE_"],
    logLevel: "info",
    envDir: "envdir", // Usually use default root directory
    server: {
      open: "index.html", // Automatically open the app in the browser on server start.
      port: 3030,
      //   strictPort: true,
    },
    preview: {
      //   open: "index.html",
      port: 3000,
      strictPort: true, // Default: server.strictPort
    },
    // css: {
    //   devSourcemap: true,
    // },
  };
});
