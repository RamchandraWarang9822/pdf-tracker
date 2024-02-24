import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "./config/firebase";

function App() {
  const [pdfs, setPdfs] = useState([]);
  const [currentPdfUrl, setCurrentPdfUrl] = useState("");

  useEffect(() => {
    const fetchPdfs = async () => {
      try {
        const filesRef = collection(db, 'files');
        const querySnapshot = await getDocs(filesRef);

        if (!querySnapshot.empty) {
          const pdfData = querySnapshot.docs.map(doc => {
            const { name, url } = doc.data();
            return { name, url };
          });

          setPdfs(pdfData);
        }
      } catch (error) {
        console.error('Error fetching PDFs:', error.message);
      }
    };

    fetchPdfs();
  }, []);

  return (
    <div className='w-screen h-screen flex'>
      <div className="flex flex-col gap-3 p-4">
        {pdfs.map((pdf, index) => (
          <div
            key={index}
            className={`flex gap-5 justify-between items-center border-4 px-5 py-2 rounded-xl font-semibold ${pdf.url === currentPdfUrl ? "bg-blue-500 text-white" : ""}`}
          >
            <button
              onClick={() => setCurrentPdfUrl(pdf.url)}>
              <div className="text-sm">
                {pdf.name}
              </div>
            </button>
          </div>
        ))}
      </div>
      <div className='flex-5 bg-red-500 w-full'>
        <embed src={currentPdfUrl} type="application/pdf" className='w-full h-full' />
      </div>
    </div>
  )
}

export default App
