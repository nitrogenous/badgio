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
}

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

const colors = { palette, header, logo, button };

export default colors;
