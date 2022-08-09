import * as fs from 'fs/promises';

export async function removeFile(filePath: string) {
  await fs.unlink(filePath);
}
