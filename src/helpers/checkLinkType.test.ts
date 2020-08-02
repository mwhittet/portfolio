import { checkLinkType } from './checkLinkType';

describe('helpers > checkLinkType', () => {
  it('returns true when the url is an external link', () => {
    const url = 'https://www.michaelwhittet.co.uk/';
    expect(checkLinkType(url)).toBe(true);
  });

  it('returns false when the url is an internal link', () => {
    const url = '/';
    expect(checkLinkType(url)).toBe(false);
  });
});
