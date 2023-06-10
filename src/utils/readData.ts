import fs from 'fs';
import path from 'path';

export function readData(folderName: string, fileName: string) {
  const filePath = path.resolve(folderName, fileName);

  // eslint-disable-next-line no-console
  console.log(filePath);

  const data = fs.readFileSync(filePath, 'utf8');

  return JSON.parse(data);
}
