export function Download({ file }) {
  const downloadCsv = () => {
    const blob = new Blob([file], { type: 'text/csv' });
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'converted.csv';
    document.body.appendChild(a);
    a.click();
    window.URL.revokeObjectURL(url);
    a.remove();
  };

  return (
    <form className="mt-6">
      <p className="text-lg text-gray-700 mb-2">Converted! Click here to download:</p>
      <button
        onClick={downloadCsv}
        className="px-6 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-opacity-50 shadow-lg transition duration-150 ease-in-out"
      >
        Download
      </button>
    </form>
  );
}
