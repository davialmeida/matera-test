import { CloudUpload } from '@mui/icons-material';
import { Button, Input, InputProps } from '@mui/material';
import React, { ChangeEvent } from 'react';

import useFile from './use-file';

export type FileUploadProps = {
  onChange?: (file: File) => void;
  acceptedFileTypes?: string[];
} & InputProps;

const ImportFile: React.FC<FileUploadProps> = ({ onChange, acceptedFileTypes }) => {
  const { filename, handleFileSelect } = useFile();

  return (
    <>
      <Input
        id="file-upload-input"
        type="file"
        sx={{ display: 'none' }}
        inputProps={{ accept: acceptedFileTypes ?? '.png,.jpg,.jpeg' }}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const file = e.target.files[0];
          handleFileSelect(file);
          file && onChange(file);
        }}
      />
      <label htmlFor="file-upload-input">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<CloudUpload />}
        >
          Upload {filename && filename}
        </Button>
      </label>
    </>
  );
};

export default ImportFile;
