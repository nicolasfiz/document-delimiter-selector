'use client';
import { useState } from 'react';
import { delimitorConverter } from '@/serverActions/delimitorConverter';
import { Download } from './download';

export default function Upload() {
  const [fileData, setFileData] = useState(null);
  const [csv, setCsv] = useState(null);

  const uploadToClient = (event) => {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      reader.onload = (e) => {
        const buffer = e.target.result;
        setFileData(buffer);
      };
      reader.readAsArrayBuffer(event.target.files[0]);
    }
  };

  return (
    <div className="flex flex-col items-center">
      <p>Select a document (.xlsx)</p>
      <input type="file" accept=".xlsx" onChange={uploadToClient} />
      {fileData && (
        <form
          action={async () => {
            const csv = await delimitorConverter(fileData);
            setCsv(csv);
          }}
        >
          <button type="submit">Convert to csv</button>
        </form>
      )}

      {csv && <Download file={csv} />}
    </div>
  );
}
