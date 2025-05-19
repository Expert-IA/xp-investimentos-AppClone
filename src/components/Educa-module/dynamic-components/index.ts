import EducaSnippet001 from './Educa_snippet_001';
import EducaArticle002 from './Educa_articles_002';

export const getComponentByCode = (code: string) => {
  const components: Record<string, React.FC<any>> = {
    EDU_SNIPPET_001: EducaSnippet001,
    EDU_ARTICLE_002: EducaArticle002,
  };

  return components[code] || null;
};
