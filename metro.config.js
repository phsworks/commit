const { getDefaultConfig } = require("expo/metro-config");

module.exports = (() => {
  // Gebruik __dirname (met twee underscores) in plaats van __currentDir
  const config = getDefaultConfig(__dirname);

  const { transformer, resolver } = config;

  config.transformer = {
    ...transformer,
    // Dit zorgt ervoor dat de SVG transformer wordt aangeroepen
    babelTransformerPath: require.resolve("react-native-svg-transformer"),
  };

  config.resolver = {
    ...resolver,
    // Haal 'svg' uit de standaard assets en voeg het toe aan de bronbestanden
    assetExts: resolver.assetExts.filter((ext) => ext !== "svg"),
    sourceExts: [...resolver.sourceExts, "svg"],
  };

  return config;
})();
