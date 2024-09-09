import { useCallback, useState } from 'react';
import { FileWithPath, useDropzone } from 'react-dropzone';
import { convertFileToUrl } from '@/lib/utils';
import { Button } from '../ui/button';

type FileUploaderProps = {
  fieldChange: (files: File[]) => void;
  docUrl: string;
};

const FileUploader = ({ fieldChange, docUrl }: FileUploaderProps) => {
  const [file, setFile] = useState<File[]>([]);
  const [fileUrl, setFileUrl] = useState<string>(docUrl);

  const onDrop = useCallback(
    (acceptedFiles: FileWithPath[]) => {
      setFile(acceptedFiles);
      fieldChange(acceptedFiles);
      setFileUrl(convertFileToUrl(acceptedFiles[0]));
    },
    [file]
  );

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      'image/*': ['.png', '.jpeg', '.jpg'],
    },
  });

  return (
    <div
      {...getRootProps()}
      className="flex flex-center flex-col bg-dark-3 rounded-xl cursor-pointer"
    >
      <input {...getInputProps()} className="cursor-pointer" />

      {fileUrl ? (
        <>
          <div className="flex flex-1 justify-center w-full p-5 lg:p-10">
            <img src={fileUrl} alt="image" className="file_uploader-img" />
          </div>
          <p className="file_uploader-label">Click or drag media to replace</p>
        </>
      ) : (
        <div className="file_uploader-box ">
          <img
            src="/assets/icons/file-upload.svg"
            width={56}
            alt="file upload"
          />

          <h3 className="base-medium text-light-2 mb-2 mt-6">
            Drag media here
          </h3>
          <p className="text-light-4 small-regular mb-6">
            Images, Audio, Videos{' '}
          </p>

          <Button type="button" className="shad-button_dark_4">
            Select from files
          </Button>
        </div>
      )}
    </div>
  );
};

export default FileUploader;
