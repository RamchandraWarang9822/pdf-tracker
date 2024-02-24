import React from 'react';

const PDFViewer = ({ currentPdfUrl }) => (
  <div className='w-full h-full'>
    <embed src={currentPdfUrl} type="application/pdf" className='w-full h-full' />
  </div>
);

export default PDFViewer;