'use client';
import { Button } from '@nextui-org/react';
import { delimitorConverterAction } from '@/actions/delimitorConverterAction';
import { convertFileToBinary } from '@/utils/convertFileToBinary';

export default function Upload({ setFile }) {
  const action = async (formData: FormData) => {
    const file = formData.get('file') as File;
    const buffer = await convertFileToBinary(file);
    const result = await delimitorConverterAction(buffer);
    setFile(result);
  };

  return (
    <div className="flex flex-col items-center bg-gray-100 p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold text-gray-700 mb-4">Select a document (.xlsx)</h2>
      <form action={action} className="flex flex-col items-center gap-4">
        <input
          name="file"
          type="file"
          accept=".xlsx"
          className="fileInput cursor-pointer border-2 border-dashed border-gray-300 p-4 text-sm text-gray-700 hover:border-blue-500 focus:border-blue-500 transition duration-300 ease-in-out"
        />
        <Button
          color="primary"
          type="submit"
          variant="solid"
          className="px-6 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 shadow-lg transition duration-150 ease-in-out"
        >
          Convert to csv
        </Button>
      </form>
    </div>
  );
}
