const PDFList = ({ pdfs, onClickUpdateUrl, currentPdfUrl }) => {
  return (
    <div className="flex flex-col gap-3 p-4 overflow-hidden">
      {pdfs.map((pdf, index) => (
        <div
          key={index}
          className={`flex gap-5 justify-between items-center border-4 px-5 py-2 rounded-xl font-semibold truncate ${
            pdf.url === currentPdfUrl ? "bg-blue-500 text-white" : ""
          }`}
        >
          <button onClick={() => onClickUpdateUrl(pdf)}>
            <div className="text-sm">
              {pdf.name}
            </div>
          </button>
        </div>
      ))}
    </div>
  );
};

export default PDFList;
