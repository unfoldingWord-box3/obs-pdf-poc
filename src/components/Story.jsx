import Frame from "./Frame";
import useMarkdownFramesFromStory from '../hooks/useMarkdownFramesFromStory';

export default function Story ({markdown}) {

  const markdownFrames = useMarkdownFramesFromStory({markdown});

  const frames = markdownFrames.map((markdownFrame, key) => (
    <Frame key={markdownFrame + key} markdown={markdownFrame} />
  ));

  return (
    <div class="story">
      {frames}
    </div>
  );
};