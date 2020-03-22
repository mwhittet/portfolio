import React from 'react';
import * as Gatsby from 'gatsby';
import { shallow } from 'enzyme';

import SEO from './seo';

const isMeta = (
  name: string
): ((m: JSX.IntrinsicElements['meta']) => boolean) => {
  return (m: JSX.IntrinsicElements['meta']) =>
    m.name === name || m.property === name;
};

const useStaticQuery = jest.spyOn(Gatsby, 'useStaticQuery');

const author = '@michaelwhittet';
const description =
  'Portfolio of Michael Whittet, a Front End Developer based just outside of London in Essex';
const title = 'Portfolio page';
const siteTitle = 'site title';
const siteDescription = 'site description';

describe('<Header />', () => {
  it('renders with given title & description, default language', () => {
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: {
          author,
          description: siteDescription,
          title: siteTitle,
        },
      },
    }));

    const component = shallow(<SEO description={description} title={title} />);
    const meta = component.prop('meta');

    expect(component.exists()).toBeTruthy();

    expect(component.prop('htmlAttributes').lang).toBe('en');

    expect(meta.find(isMeta('description')).content).toBe(description);
    expect(meta.find(isMeta('og:description')).content).toBe(description);
    expect(meta.find(isMeta('og:title')).content).toBe(title);
    expect(meta.find(isMeta('og:type')).content).toBe('website');
    expect(meta.find(isMeta('twitter:card')).content).toBe('summary');
    expect(meta.find(isMeta('twitter:creator')).content).toBe(author);
    expect(meta.find(isMeta('twitter:description')).content).toBe(description);
    expect(meta.find(isMeta('twitter:title')).content).toBe(title);

    expect(component.prop('title')).toBe(title);
    expect(component.prop('titleTemplate')).toContain(siteTitle);
  });

  it('renders with site description', () => {
    useStaticQuery.mockImplementation(() => ({
      site: {
        siteMetadata: { description: siteDescription },
      },
    }));

    const component = shallow(<SEO title={title} />);
    const meta = component.prop('meta');

    expect(component.exists()).toBeTruthy();

    expect(meta.find(isMeta('description')).content).toBe(siteDescription);
  });
});
