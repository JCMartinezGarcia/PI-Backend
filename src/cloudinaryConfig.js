const cloudinary = require("cloudinary").v2;
// Configuración de Cloudinary
cloudinary.config({
  cloud_name: 'dqqnmclkd',
  api_key: '224193975882846',
  api_secret: 'GAvEWfl_UIoVrRJ8coRYOgWc6fc'
});

module.exports = cloudinary;