const palette = {
  marineBlue: '#043353',
  thimbleberry: '#E44652',
  milkGlass: '#FAF8F0',
  winterFrost: '#E4DFCF',
};

const header = {
  font: palette.milkGlass,
  background: palette.marineBlue,
};

const logo = {
  font: palette.thimbleberry,
};

const button = {
  primary: {
    font: palette.milkGlass,
    background: palette.thimbleberry,
  },
  secondary: {
    font: palette.milkGlass,
    background: palette.marineBlue,    
  }
};

const form = {
  font: palette.milkGlass,
  background: palette.marineBlue,
};

const fileUploader = {
  font: palette.marineBlue,
  background: palette.milkGlass,
  buttonFont: palette.milkGlass,
  buttonBackground: palette.thimbleberry,
};

const copyToClipboard = {
  font: palette.milkGlass,
  border: palette.marineBlue,
  background: palette.marineBlue,
  buttonFont: palette.milkGlass,
  buttonBackground: palette.thimbleberry,
};

const colors = { palette, header, logo, button, form, fileUploader, copyToClipboard };

export default colors;
