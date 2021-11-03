import React from 'react';
import usePrintPreview from '../hooks/usePrintPreview';

import OpenBibleStories from './OpenBibleStories';

export default function OpenBibleStoriesPDF (props) {
  const { embed } = props;

  const component = <OpenBibleStories {...props} />
  const printPreviewComponent = usePrintPreview({ component, embed });
  
  return printPreviewComponent;
};


