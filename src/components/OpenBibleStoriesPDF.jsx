import { jsPDF } from "jspdf";

import OpenBibleStories from './OpenBibleStories';

export default function OpenBibleStoriesPDF (props) {
  
  const exportPDF = ({id}) => {
    const pdf = new jsPDF();
    const element = document.getElementById(id);
    const callback = (_pdf) => { _pdf.save('obs.pdf'); };
    pdf.html(element, {
      callback, x: 10, y: 10, 
      // html2canvas: { useCORS: true, proxy: 'https://astro-cors-server.herokuapp.com/fetch/' },
    });
  };

  return (
    <>
      <button onClick={() => { exportPDF({id: 'content'}); }}>
        Export to PDF with method
      </button>
      <div id="content" style={{transform: 'scale(0.2)', transformOrigin: 'top left'}}>
        <OpenBibleStories {...props} />
      </div>
    </>
  )

};


