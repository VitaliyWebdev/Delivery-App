module.exports = function (api) {
  api.cache(true);
  return {
    presets: ["babel-preset-expo"],
    plugins: [
      [
        "module-resolver",
        {
          root: ["."],
          alias: {
            // This has to be mirrored in tsconfig.json
            "@src": "./src",
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@routes": "./src/routes",
          },
        },
      ],
    ],
  };
};
