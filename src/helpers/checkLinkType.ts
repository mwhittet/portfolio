const EXTERNAL_REGEX = /^(https?:)?\/\//;

export const checkLinkType = (url: string): boolean => EXTERNAL_REGEX.test(url);
