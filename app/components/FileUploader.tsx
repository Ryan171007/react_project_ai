import React, { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";
import { formatSize } from "~/lib/formatSize";

interface useFileProps {
	onFileSelect?: (file: File | null) => void;
}

const FileUploader = ({onFileSelect}: useFileProps) => {
	
		const onDrop = useCallback( (acceptedFiles: File[]) => {
			const file = acceptedFiles[0] || null;

			onFileSelect?.(file);
		}, [onFileSelect]) 
		const { getRootProps, getInputProps, isDragActive, acceptedFiles } = useDropzone({ 
			onDrop,
			multiple: false,
			accept: { 'application/pdf': ['.pdf'] },
			maxSize: 20 * 1024 * 1024,
		 }) 

		const file = acceptedFiles[0] || null;

	return (
		<div {...getRootProps()}>
			<input {...getInputProps()} />
			<div className=" my-5 space-y-4 cursor-pointer flex justify-center items-center flex-col h-45 w-225 gradient-border rounded-2xl">
					<div className=" mx-auto flex items-center justify-center">
						<img src="/icons/info.svg" alt="upload icon" className="size-17.5" />
					</div>	

					{file? 
					(
						<div className="uploader-selected-file" onClick={(e) => e.stopPropagation()}>
							<div className="flex items-center text-center space-x-3">
								<img src="/images/pdf.png" alt="pdf image" className="size-10" />
								<p className="text-lg text-gray-700 font-medium truncate max-w-xs">
									{file.name}
								</p>
								<p className="text-sm text-gray-500">
									{formatSize(file.size)}
								</p>
							</div>
						</div>
					) :
					(
						<div>
							<p className="text-gray-600 text-lg">
								<span className="text-semibold">
									Click to Upload
								</span> or drag and drop
							</p>
							<p className="text-gray-400 text-lg">
								PDF (max 20 MB)
							</p>
						</div>
					)}
				</div>
			</div>
	)
}

export default FileUploader;
