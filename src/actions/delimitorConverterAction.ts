'use server';

import { delimitorConverter } from '@/server/delimitorConverter';

export async function delimitorConverterAction(bufferText) {
  const buffer = Buffer.from(bufferText, 'binary')
  const csv = await delimitorConverter(buffer);
  return csv;
}
