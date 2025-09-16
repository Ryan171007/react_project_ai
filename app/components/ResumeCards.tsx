import React from "react"
import ScoreCircle from "./ScoreCircle"
import { Link } from "react-router"

const ResumeCards = ({resume}: {resume: Resume}) => {
	return(
		<Link to={`/resume/${resume.id}`} className="resume-card animated-home py-[2rem]">
			<div className="resume-card-header">
				<div className="flex flex-col gap-2">
					<h2 className="!text-black font-bold break-words" >{resume.companyName}</h2>
					<h3 className="text-gray-600 break-word text-lg">{resume.jobDescripition}</h3>
				</div>
				<div className="flex-shirink-0">
					<ScoreCircle score={resume.feedback.overallScore}/>
				</div>
			</div>
			<div className="gradient-border animated-home">
				<div className="w-full h-full">
					<img src={resume.imagePath} className="w-full h-[268px] max-sm:[h-200px] object-cover object-top rounded-2xl" alt="resume" />
				</div>
			</div>
		</Link>
	)
}

export default ResumeCards