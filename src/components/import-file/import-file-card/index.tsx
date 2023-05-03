import ImportFile, { FileUploadProps } from '..';
import { ImportBox, ImportFileCardErrorMessage, ImportFileCardLabel } from './styles';

export type ImportFileCardProps = {
  label: string;
  error?: boolean;
  helperText?: string;
} & FileUploadProps;

const ImportFileCard = ({ label, error, helperText, ...props }: ImportFileCardProps) => {
  return (
    <>
      <ImportFileCardLabel error={error}>{label}</ImportFileCardLabel>
      <ImportBox error={error}>
        <ImportFile name="avatar" {...props} />
      </ImportBox>
      <ImportFileCardErrorMessage error={error}>{helperText}</ImportFileCardErrorMessage>
    </>
  );
};

export default ImportFileCard;
