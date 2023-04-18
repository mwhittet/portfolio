import { checkLinkType } from './checkLinkType';

describe('helpers > checkLinkType', () => {
  const url = 'https://www.michaelwhittet.co.uk/';

  it('returns true when the url is an external link', () => {
    expect(checkLinkType(url)).toBe(true);
  });

  it('returns false when the url is an internal link', () => {
    expect(checkLinkType('/')).toBe(false);
  });
});
