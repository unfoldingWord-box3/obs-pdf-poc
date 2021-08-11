import {useLayoutEffect} from 'react';
import { Previewer } from 'pagedjs';

import OpenBibleStories from './OpenBibleStories';

export default function OpenBibleStoriesPDF (props) {
  
  const previewPDF = ({id}) => {
    const previewer = new Previewer();
    previewer.preview(
      document.querySelector('#'+id).innerHTML, [], document.querySelector('#preview')
    ).then(flow => {
        console.log("preview rendered, total pages", flow.total, { flow });
        document.querySelector('#'+id).style.display = 'none';
    });
  };

  useLayoutEffect(() => {
    previewPDF({id: 'content'});
  }, []);
  
  return (
    <>
      <div id="content">
        <OpenBibleStories {...props} />
      </div>
      <div id="preview"></div>
    </>
  )

};


