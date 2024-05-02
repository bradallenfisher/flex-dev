/** @jsxRuntime classic */
/** @jsx jsx */
import { jsx } from 'theme-ui';
import React, { useCallback, useEffect, useRef, useState } from 'react';
import { useDrop } from 'react-aria';
import type { FileDropItem } from 'react-aria';
import { Flex } from '../../layout';
import { FormLabel } from '../index';
import { UploadProps } from './UploadTypes';
import { FormFieldDescription } from '../FormFieldDescription/FormFieldDescription';
import { Icon } from '../../data-display/Icon/Icon';
export const Upload = ({
  multiple = false,
  accept = '*/*',
  ...props
}: UploadProps) => {
  const [files, setFiles] = useState<File[] | any>([]);
  const [previews, setPreviews] = useState<
    (string | ArrayBuffer | null | any)[]
  >([]);

  const ref = useRef(null);
  let { dropProps, isDropTarget } = useDrop({
    ref,
    async onDrop(e) {
      let item = e.items.find(
        (item) =>
          item.kind === 'file' &&
          (item.type === 'image/jpeg' || item.type === 'image/png')
      ) as FileDropItem;
      if (item) {
        const newFile = await Promise.all(
          URL.createObjectURL(await item.getFile())
        );

        setFiles((prevFiles) => [...prevFiles, item]);
        setPreviews((prevPreview) => [...prevPreview, newFile]);
      }
    },
  });
  const { extraSx, ...rest } = props;

  // const handleOnChange = useCallback((e: React.FormEvent<HTMLInputElement>) => {
  //   const target = e.target as HTMLInputElement & { files: FileList };
  //   const selectedFile = target.files[0];

  //   const fileReader = new FileReader();

  //   fileReader.onload = () => {
  //     if (typeof fileReader.result === 'string') {
  //       setPreview(fileReader.result);
  //     }
  //   };

  //   fileReader.readAsDataURL(selectedFile);
  // }, []);

  const actualBtnRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const actualBtn = actualBtnRef.current;

    if (actualBtn) {
      const handleChange = () => {
        if (actualBtn.files) {
          //@ts-ignore
          setFiles((prevFiles) => [...prevFiles, ...actualBtn.files]);
          console.log(actualBtn.files);
        }
      };

      actualBtn.addEventListener('change', handleChange);

      return () => {
        actualBtn.removeEventListener('change', handleChange);
      };
    }
  }, []);

  const handleRemoveFile = useCallback(
    (indexToRemove: number) => {
      setFiles((prevFiles) =>
        prevFiles.filter((_, index) => index !== indexToRemove)
      );
      setPreviews((prevPreviews) =>
        prevPreviews.filter((_, index) => index !== indexToRemove)
      );
    },
    [setFiles, setPreviews]
  );

  return (
    <Flex
      className="w-full"
      extraSx={{ ...extraSx }}
      gap={2}
      direction="column"
    >
      <FormLabel>Upload Files</FormLabel>
      <div
        {...dropProps}
        role="button"
        tabIndex={0}
        ref={ref}
        className="flex items-center justify-center"
        sx={{
          borderStyle: 'dashed',
          borderWidth: 'xs',
          borderColor: isDropTarget ? 'link' : 'limestoneGray',
          borderRadius: 'xs',
          padding: 4,
          backgroundColor: isDropTarget ? 'limestoneMaxLight' : 'transparent',
        }}
      >
        <>
          <Icon
            size={28}
            color="coalyGray"
            icon="arrowRightCircle"
            extraSx={{ transform: 'rotate(-90deg)', mr: 2 }}
          />
          {'Drag and Drop files here or'}&nbsp;
          <input
            type="file"
            id="actual-btn"
            ref={actualBtnRef}
            accept={accept}
            multiple={multiple}
            hidden
            // onChange={handleOnChange}
          />
          <label
            className="pointer"
            sx={{ color: 'link', textDecoration: 'underline' }}
            htmlFor="actual-btn"
          >
            choose file
          </label>
        </>
      </div>
      <FormFieldDescription descriptionProps={''}>
        Files Supported: {accept === '*/*' ? 'All file types' : accept}
      </FormFieldDescription>
      <Flex extraSx={{ mt: 4 }}>
        <Flex
          justifyContent="space-between"
          direction="column"
          alignItems="center"
          gap={2}
          className="w-full"
        >
          {files.map((file, index) => (
            <Flex
              className="w-full fade-standard-avg"
              key={index}
              justifyContent="space-between"
              alignItems="center"
              extraSx={{
                p: 4,
                transition: 'padding 0s',
                backgroundColor: 'limestoneMaxLight',
                borderRadius: 'xs',
              }}
            >
              <Flex direction="column" gap={2}>
                {/* TODO preview img not rendering correctly */}
                {/* {previews[index] && (
                  <img
                    src={URL.createObjectURL(previews[index]) as string}
                    alt="File preview"
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'contain',
                    }}
                  />
                )} */}
                <div>{file.name}</div>
              </Flex>
              <Icon
                icon="close"
                size={20}
                className="pointer"
                onClick={() => handleRemoveFile(index)}
              />
            </Flex>
          ))}
        </Flex>
      </Flex>
    </Flex>
  );
};
