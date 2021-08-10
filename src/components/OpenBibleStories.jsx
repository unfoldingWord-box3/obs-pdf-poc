import md5 from 'md5';

import Story from './Story';
import TableOfContents from './TableOfContents';
import useTitlesFromMarkdownStories from '../hooks/useTitlesFromMarkdownStories';

export default function OpenBibleStories ({ bookTitle, markdownStories=[] }) {

  const storyTitles = useTitlesFromMarkdownStories({ markdownStories});

  // todo:
  const stories = markdownStories.map(markdownStory => (
    <Story markdown={markdownStory} key={md5(markdownStory)} />
  ));


  return (
    <main>
      <header>
        <h1>{bookTitle}</h1>
      </header>
      <nav>
        <TableOfContents entries={storyTitles} />
      </nav>
      <section>
        {stories}
      </section>
    </main>
  );
};