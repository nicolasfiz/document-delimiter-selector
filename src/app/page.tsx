import Upload from '@/components/upload';
import { Suspense } from 'react';
import Loading from './loading';

export default function Home() {
  return (
    <main className="flex flex-col items-center p-24">
      <h1 className="pb-4 text-xl font-bold">Document delimiter changer</h1>
      <Upload />
    </main>
  );
}
