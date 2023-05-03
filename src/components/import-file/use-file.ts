import { useState } from 'react';

const useFile = () => {
  const [filename, setFilename] = useState<string>('');

  const handleFileSelect = (file: File) => {
    if (file) {
      setFilename(file.name);
    }

    return file;
  };

  return {
    filename,
    handleFileSelect,
  };
};

export default useFile;
