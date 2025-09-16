interface Resume {
	id: string;
	companyName?: string;
	jobTitle?: string;
	jobDescripition?: string;
	imagePath: string;
	resumePath: string;
	feedback: Feedback;
}

interface Feedback {
	overallScore: number;
	ATS: {
		score: number;
		tips:{ 
			type: "good" | "improve";
			tips: string;
		}[];
	};
	toneAndStyle: {
		score: number;
		tips: {
			type: "good" | "improve";
			tips: string;
		}[];
	};
	contents: {
		score: number;
		tips: {
			type: "good" | "improve";
			tips: string;
			explanation: string;
		}[];
	};
	scrtuture: {
		score: number;
		tips: {
			type: "good" | "improve";
			tips: string;
			explanation: string;
		}[];
	};
	score: {
		score: number;
		tips: {
			type: "good" | "improve";
			tips: string;
			explanation: string;
		}[];
	};
}