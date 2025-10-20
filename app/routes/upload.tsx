import { useState, type FormEvent } from "react";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";
import FileUploader from "~/components/FileUploader";
import { usePuterStore } from "~/lib/puter";
import { useNavigate } from "react-router";

export const meta = () => {
	return [
		{ title: "Resuming | Upload" },
		{ name: "Upload now!", content: "Upload your job vagancy resume" },
	];
}

const Upload = () => {
	const [auth, isLoading, fs, ai, kv] = usePuterStore();
	const navigate = useNavigate();
	const [isProcessing, setIsProcessing] = useState(false);
	const [statusText, setStatusText] = useState("");
	const [file, setFile] = useState<File | null>(null);

	const handleFileSelect = (file: File | null ) => {
		setFile(file)
	}; 

	const handleAnalyze = async({ companyName, jobtitle, jobDescription, file }: { companyName: string, jobTitle: string, jobDescription: string, file: File }) => {
		setIsProcessing(true);
		setStatusText('Uploading the file...');
		const uploadedFile = await fs.upload([file]);

		if(!uploadedFile) return setStatusText("Error: Failed to Upload"); 
		
	};

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault();

		const form = e.currentTarget.closest('form');
		if(!form) return;
		const formData = new FormData(form);

		const companyName = formData.get('company-name') as string; 
		const jobTitle = formData.get('job-title') as string;
		const jobDescripition = formData.get('job-description') as string;

		if(!file) return;
			handleAnalyze({companyName, jobTitle, jobDescription});
	} ;


	return <main className="bg-[url('../images/bg-main.svg')] bg-cover">
		<Navbar/>

			<section className="main-section ">
				<div className="page-heading py-2">
					<h1>Smart feedback for your dream job</h1>
					<>
					{isProcessing ? (
						<>
						<h2>{statusText}</h2>
						<img src="../../puclic/images/resume-scan.gif" alt="resume scan gif" className="w-full" />
						</>
					) : (
						<h2>Drop your resume from a ATS score and improve tips</h2>
					)}
					
						{!isProcessing && (
							<form action="post" id="upload-form" className="flex flex-col gap-4 mt-8" onSubmit={handleSubmit}>
								<div className="form-div">

								<label htmlFor="company-name" className="font-bold">Company Name</label>
								<input type="text" name="company-name" placeholder="Company Name Here"/>
								
								</div>
								<div className="form-div">

								<label htmlFor="job-title" className="font-bold">Job Title</label>
								<input type="text" name="job-title" placeholder="Job Title Here"/>

								</div>
								<div className="form-div">

								<label htmlFor="job-description" className="font-bold">Job Description</label>
								<textarea rows={5} name="job-description" placeholder="Job Description Here"/>

								</div>
								<div className="form-div">

								<label htmlFor="Uploader" className="font-bold">Uploader</label>
								<FileUploader onFileSelect={handleFileSelect}/>

								</div>

								<div className="form-div">
								<button className="primary-button flex items-center justify-center" type="submit">
									<p>Analyze Resume</p>
								</button>

								</div>
							</form>
						)}
					
					</>
				</div>
					
			</section>
		</main>
}

export default Upload