import Seo from './Seo';

export interface Props {
  description?: string;
  lang?: string;
  meta?: ConcatArray<
    | { name: string; content: any; property?: undefined }
    | { property: string; content: any; name?: undefined }
  >;
  title: string;
}

export default Seo;
