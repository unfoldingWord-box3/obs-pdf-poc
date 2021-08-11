import { createRef } from 'react';
import Pdf from "react-to-pdf";

import OpenBibleStories from './OpenBibleStories';

export default function OpenBibleStoriesPDF (props) {
  const ref = createRef();

  return (
    <>
      <Pdf targetRef={ref} filename="obs.pdf">
        {({ toPdf }) => <button onClick={toPdf}>Generate Pdf</button>}
      </Pdf>
      <div ref={ref}>
        <OpenBibleStories {...props} />
      </div>
    </>
  );
};