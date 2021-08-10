import { useCallback } from 'react';
import { useDeepCompareMemo } from 'use-deep-compare';


export default function useTitlesFromMarkdownStories ({ markdownStories=[] }) {

  const titlesFromMarkdownStrings = useCallback((markdownStrings) => {
    const titles = markdownStrings.map(markdown => (
      /#\s+(.*?)\n+/.exec(markdown)[1]
    ));
    return titles;
  }, []);

  const titles = useDeepCompareMemo(() => (
    titlesFromMarkdownStrings(markdownStories)
  ), [markdownStories]);
  
  return titles;
};