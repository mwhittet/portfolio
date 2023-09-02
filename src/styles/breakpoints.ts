const media = '@media only screen and (min-width:';

const size = {
  sm: '600px',
  md: '992px',
  lg: '1432px',
};

const breakpoints = {
  sm: `${media} ${size.sm})`,
  md: `${media} ${size.md})`,
  lg: `${media} ${size.lg})`,
};

export default breakpoints;
