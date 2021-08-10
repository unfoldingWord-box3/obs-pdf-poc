import { BlockEditable } from 'markdown-translatable';

export default function Frame ({ markdown }) {
  return (
    <BlockEditable
      markdown={markdown}
      preview={true}
      editable={false}
      style={{}}
    />
  );
};