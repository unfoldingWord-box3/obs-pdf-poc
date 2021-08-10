import { useCallback, useMemo } from 'react';

export default function useMarkdownFramesFromStory ({markdown}) {

  const markdownFramesFromMarkdownStory = useCallback((markdownStory) => {
    const markdownFrames = markdownStory.split(/(?=!\[OBS Image\])/g);
    return markdownFrames;
  }, []);

  const markdownFrames = useMemo(() => (
    markdownFramesFromMarkdownStory(markdown)
  ), [markdownFramesFromMarkdownStory, markdown]);

  return markdownFrames;
}