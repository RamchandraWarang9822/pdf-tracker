import React from 'react';
import { Worker, Viewer } from '@react-pdf-viewer/core';
import '@react-pdf-viewer/core/lib/styles/index.css';


const PDFViewer = ({ currentPdfUrl }) => (
  <div className='w-full h-full'>
    {/* <embed src={currentPdfUrl} type="application/pdf" className='w-full h-full' /> */}
    <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.4.120/build/pdf.worker.min.js">
      {currentPdfUrl ?
        <Viewer fileUrl={currentPdfUrl} /> : <>No PDF</>
      }
    </Worker>
  </div>
);

export default PDFViewer;