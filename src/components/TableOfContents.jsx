export default function TableOfContents ({ entries=[] }) {

  const items = entries.map((entry, key) => (
    <li key={entry + key} style={{width: '100%'}}>
      <span style={{ display: 'inline-block'}}>{entry} ...</span>
      <span style={{ display: 'inline-block', float: 'right'}}>... {key+1}</span>
    </li>
  ));

  return (
    <div class="toc">
      Table of Contents
      <ul>
        {items}
      </ul>
    </div>
  );
};