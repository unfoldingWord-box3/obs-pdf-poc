import { BlockEditable } from 'markdown-translatable';

export default function Frame ({ markdown }) {

  markdown = markdown.replace('https://cdn.door43.org', 'https://astro-cors-server.herokuapp.com/fetch/https://cdn.door43.org');

  return (
    <BlockEditable
      markdown={markdown}
      preview={true}
      editable={false}
      style={{}}
    />
  );
};