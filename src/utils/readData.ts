import fs from 'fs';
import path from 'path';

const filePath = path.resolve('api', 'phones.json');

export function readData() {
  const data = fs.readFileSync(filePath, 'utf8');

  return JSON.parse(data);
}
