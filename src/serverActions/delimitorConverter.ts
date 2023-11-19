import * as XLSX from 'xlsx/xlsx.mjs';

import * as fs from 'fs';
XLSX.set_fs(fs);

import { Readable } from 'stream';
XLSX.stream.set_readable(Readable);

import * as cpexcel from 'xlsx/dist/cpexcel.full.mjs';
XLSX.set_cptable(cpexcel);

export async function delimitorConverter(buffer) {
  console.log('buffer', buffer);
  const workbook = XLSX.read(buffer, { type: 'buffer' });

  const firstSheetName = workbook.SheetNames[0];
  const worksheet = workbook.Sheets[firstSheetName];

  const csvContent: string = XLSX.utils.sheet_to_csv(worksheet, { FS: ';' });

  console.log('csv content', csvContent.replace(/,/g, ';'));
  return csvContent.replace(/,/g, ';');
}
