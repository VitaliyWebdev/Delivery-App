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
            "@screens": "./src/screens",
            "@components": "./src/components",
            "@constants": "./src/constants",
            "@routes": "./src/routes",
            "@hooks": "./src/hooks",
            "@src": "./src",
          },
        },
      ],
    ],
  };
};
