'use client';
import { Download } from '@/app/excelConverter/components/download';
import Upload from '@/app/excelConverter/components/upload';
import { useState } from 'react';

export function DocumentDelimiterConverter() {
  const [file, setFile] = useState(null);

  return (
    <div className="flex flex-col items-center bg-white rounded-lg shadow-lg my-20 py-14 px-20 text-center">
      <h1 className="text-4xl font-bold text-gray-800 mb-10">Document Delimiter Changer</h1>
      <Upload setFile={setFile} />
      {file && <Download file={file} />}
    </div>
  );
}
