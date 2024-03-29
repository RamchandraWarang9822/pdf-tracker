import React, { useState, useEffect } from 'react';
import { Upload, Paperclip } from 'lucide-react';
import { getStorage, ref, uploadBytes, getDownloadURL } from 'firebase/storage';
import { db, addDoc, collection, getDocs } from '../config/firebase';

const UploadFile = () => {
  const LIMIT = 20;
  const [uploadedFiles, setUploadedFiles] = useState([]);
  const [documentCount, setDocumentCount] = useState(0);

  useEffect(() => {
    const fetchDocumentCount = async () => {
      const filesCollectionRef = collection(db, 'files');
      const snapshot = await getDocs(filesCollectionRef);
      setDocumentCount(snapshot.size);
    };

    fetchDocumentCount();
  }, []);

  const handleFileUpload = async (e) => {
    const files = e.target.files;
    if (documentCount + files.length >= LIMIT) {
      console.log("Decrease the number of files being uploaded");
      return;
    }
    if (documentCount >= LIMIT) {
      console.log("Upload limit reached. Please contact the admin.");
      return;
    }

    const fileRefs = [];

    for (const file of files) {
      const storage = getStorage();
      const storageRef = ref(storage, `uploads/${file.name}`);

      await uploadBytes(storageRef, file);
      const downloadURL = await getDownloadURL(storageRef);

      const filesCollectionRef = collection(db, 'files');
      const newFileDocRef = await addDoc(filesCollectionRef, { name: file.name, url: downloadURL });
      fileRefs.push(newFileDocRef);
    }

    setUploadedFiles([...uploadedFiles, ...fileRefs]);
    setDocumentCount(documentCount + 1);
  };

  return (
    <>
      {documentCount < LIMIT && (
        <form>
          <div className="col-span-full">
            <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10">
              <div className="text-center">
                <Upload className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                <div className="mt-4 flex text-sm leading-6 text-gray-600">
                  <label
                    htmlFor="file-upload"
                    className="relative cursor-pointer rounded-md bg-white font-semibold text-indigo-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-indigo-600 focus-within:ring-offset-2 hover:text-indigo-500"
                  >
                    <span>Upload a file</span>
                    <input
                      id="file-upload"
                      name="file-upload"
                      type="file"
                      className="sr-only"
                      onChange={handleFileUpload}
                      multiple
                    />
                  </label>
                  <p className="pl-1">or drag and drop</p>
                </div>
                <p className="text-xs leading-5 text-gray-600">PNG, JPG, GIF up to 10MB</p>
              </div>
            </div>
          </div>
        </form>
      )}

      {documentCount >= LIMIT && (
        <div className="text-red-500 mt-4">
          Upload LIMIT has been reached. Please contact the admin.
        </div>
      )}

      {uploadedFiles.length > 0 && (
        <div className="px-4 py-6 sm:grid sm:grid-cols-3 sm:gap-4 sm:px-0">
          <dt className="text-sm font-medium leading-6 text-gray-900">Attachments</dt>
          <dd className="mt-2 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
            <ul role="list" className="divide-y divide-gray-100 rounded-md border border-gray-200">
              {uploadedFiles.map((fileRef, index) => (
                <li key={index} className="flex items-center justify-between py-4 pl-4 pr-5 text-sm leading-6">
                  <div className="flex w-0 flex-1 items-center">
                    <Paperclip className="h-5 w-5 flex-shrink-0 text-gray-400" aria-hidden="true" />
                    <div className="ml-4 flex min-w-0 flex-1 gap-2">
                      <span className="truncate font-medium">{fileRef.id}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </dd>
        </div>
      )}
    </>
  );
};

export default UploadFile;
