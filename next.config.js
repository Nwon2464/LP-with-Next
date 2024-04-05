const regeneratorRuntime = require("regenerator-runtime");
// const withImages = require("next-images");
// module.exports = withImages({
//     webpack(config, options) {
//       return config
//     }
//   })
const { withExpo } = require("@expo/next-adapter");
const withPlugins = require("next-compose-plugins");
const withImages = require("next-images");
const withFonts = require("next-fonts");
const withTM = require("next-transpile-modules")(["react-native-web"]);

const nextConfig = {
images: {
disableStaticImages: true,
},
};

module.exports = withPlugins(
[withTM, withExpo, withImages, withFonts],
nextConfig
);
