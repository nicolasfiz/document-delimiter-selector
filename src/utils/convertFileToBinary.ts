export function convertFileToBinary(file: File): Promise<string> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onload = (e) => {
        const buffer = String(e.target.result);
        resolve(buffer);
      };
      reader.onerror = reject;
      reader.readAsBinaryString(file);
    });
  }