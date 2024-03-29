import { PDFList, PDFViewer } from '../components';
import React, { useEffect, useState } from 'react';
import { collection, getDocs } from 'firebase/firestore';
import { db } from "../config/firebase";
import { Menu } from 'lucide-react';

const Dashboard = () => {
    const [pdfs, setPdfs] = useState([]);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [currentPdfUrl, setCurrentPdfUrl] = useState("");

    const onClickUpdateUrl = (pdf) => {
        setCurrentPdfUrl(pdf.url);
    };

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

    useEffect(() => {
        let url = pdfs[0]?.url;
        setCurrentPdfUrl(url)
    }, [pdfs])

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <div className='flex h-screen'>
            <div className='lg:hidden px-4 py-2 cursor-pointer' onClick={toggleMenu}>
                <Menu size={24} />
            </div>

            <div className={`w-1/4 border-r overflow-y-auto ${isMenuOpen ? 'block' : 'hidden'} lg:block flex-shrink-0`}>
                <PDFList pdfs={pdfs} onClickUpdateUrl={onClickUpdateUrl} currentPdfUrl={currentPdfUrl} />
            </div>

            <div className="w-3/4">
                <PDFViewer currentPdfUrl={currentPdfUrl} />
            </div>
        </div>
    );
}

export default Dashboard;
