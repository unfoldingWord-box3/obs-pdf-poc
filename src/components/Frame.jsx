import { BlockEditable } from 'markdown-translatable';

export default function Frame ({ markdown }) {
  return (
    <div class="frame">
      <BlockEditable
        markdown={markdown}
        preview={true}
        editable={false}
        style={{}}
      />
    </div>
  );
};
