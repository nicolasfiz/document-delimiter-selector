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
    <form>
      <p>Converted! Click here to download: </p>
      <button onClick={downloadCsv}>Download</button>
    </form>
  );
}
