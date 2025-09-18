import { useState, type FormEvent } from "react";
import type { Route } from "./+types/home";
import Navbar from "~/components/Navbar";

export const meta = () => {
	return [
		{ title: "Resuming | Upload" },
		{ name: "Upload now!", content: "Upload your job vagancy resume" },
	];
}

const Upload = () => {

	const [isProcessing, setIsProcessing] = useState(false);
	const [statusText, setStatusText] = useState("");

	const handleSubmit = (e: FormEvent<HTMLFormElement>) => {} ;

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
								<div className="form-div flex items-center">

								<label htmlFor="company-name" className="font-bold">Company Name</label>
								<input type="text" name="company-name" placeholder="Company Name Here"/>
								
								</div>
								<div className="form-div flex items-center">

								<label htmlFor="job-title" className="font-bold">Job Title</label>
								<input type="text" name="job-title" placeholder="Job Title Here"/>

								</div>
								<div className="form-div flex items-center">

								<label htmlFor="job-description" className="font-bold">Job Description</label>
								<textarea rows={5} name="job-description" placeholder="Job Description Here"/>

								</div>
								<div className="form-div flex items-center">

								<label htmlFor="Uploader" className="font-bold">Uploader</label>
								<div>Uploader</div>

								<button className="primary-button w-full flex items-center justify-center" type="submit">
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