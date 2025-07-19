const sharp = require('sharp');

sharp('src/images/logo-icon.webp')
  .resize(32, 32) // Resize to 32x32 pixels
  .toFile('src/images/logo-icon-32.webp', (err, info) => {
    if (err) {
      console.error(err);
    } else {
      console.log('Image resized:', info);
    }
  });