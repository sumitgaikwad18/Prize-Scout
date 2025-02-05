touchbabel.config.js


module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    plugins: [],
    "presets": [
      "@babel/preset-env",
      "@babel/preset-react"
    ],
    "plugins": []
    
  };
 module.exports = {
    presets: ['@babel/preset-env', '@babel/preset-react'],
    ignore: ['node_modules/react-native-vector-icons'],
  };
  module.exports = {
    presets: [
      '@babel/preset-env',
      '@babel/preset-react', // Add this for JSX support
    ],
    plugins: [
      '@babel/plugin-syntax-jsx', // Add this to enable JSX syntax parsing
    ],
  };
  module.exports = {
    presets: [
      'module:metro-react-native-babel-preset', // Standard React Native preset
      '@babel/preset-react', // Enable JSX transformation
    ],
    plugins: [
      'react-native-reanimated/plugin', // If you're using Reanimated for animations
    ],
  };
  
  

  
  
