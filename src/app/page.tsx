import { DocumentDelimiterConverter } from './excelConverter/DocumentDelimiterConverter';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50 flex flex-col items-center">
      <DocumentDelimiterConverter />
    </main>
  );
}
