import fs from 'fs';
import path from 'path';

export function readData(folderName: string, fileName: string) {
  const filePath = path.resolve(folderName, fileName);

  const data = fs.readFileSync(filePath, 'utf8');

  return JSON.parse(data);
}
