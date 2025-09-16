export const resumes: Resume[] = [
    {
        id: "1",
        companyName: "Google",
        jobDescripition: "Frontend Development",
        imagePath:"/images/resume_01.png",
        resumePath:"",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            contents: {
                score: 90,
                tips: [],
            },
            scrtuture: {
                score: 90,
                tips: [],
            },
            score: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "2",
        companyName: "Microsoft",
        jobDescripition: "Cloud Engienner",
        imagePath:"../../images/resume_02.png",
        resumePath:"",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            contents: {
                score: 90,
                tips: [],
            },
            scrtuture: {
                score: 90,
                tips: [],
            },
            score: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "3",
        companyName: "Apple",
        jobDescripition: "ioS Developer",
        imagePath:"../../images/resume_03.png",
        resumePath:"",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            contents: {
                score: 90,
                tips: [],
            },
            scrtuture: {
                score: 90,
                tips: [],
            },
            score: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "4",
        companyName: "Google",
        jobDescripition: "Frontend Development",
        imagePath: "/images/resume_01.png",
        resumePath: "",
        feedback: {
            overallScore: 85,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            contents: {
                score: 90,
                tips: [],
            },
            scrtuture: {
                score: 90,
                tips: [],
            },
            score: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "5",
        companyName: "Microsoft",
        jobDescripition: "Cloud Engienner",
        imagePath: "../../images/resume_02.png",
        resumePath: "",
        feedback: {
            overallScore: 55,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            contents: {
                score: 90,
                tips: [],
            },
            scrtuture: {
                score: 90,
                tips: [],
            },
            score: {
                score: 90,
                tips: [],
            },
        },
    },
    {
        id: "6",
        companyName: "Apple",
        jobDescripition: "ioS Developer",
        imagePath: "../../images/resume_03.png",
        resumePath: "",
        feedback: {
            overallScore: 75,
            ATS: {
                score: 90,
                tips: [],
            },
            toneAndStyle: {
                score: 90,
                tips: [],
            },
            contents: {
                score: 90,
                tips: [],
            },
            scrtuture: {
                score: 90,
                tips: [],
            },
            score: {
                score: 90,
                tips: [],
            },
        },
    },
]

export const AIResponseFormat = `interface Feedback {
overallScore: number; // 1 to 100
ATS: {
    score: number;
    tips: {
        type: good | improve;
        tip: string;
    } [];
};
toneAndStyle: {
    score: number;
    tips: {
        type: good | improve;
        tip: string;
    } [];
};
content: {
    score: number;
    tips: {
        type: good | improve;
        tip: string;
    } [];
};
structure: {
    score: number;
    tips: {
        type: good | improve;
        tip: string;
    } [];
};`


export const prepareInstructions = ({
    jobTitle,
    jobDescripition,
    AIResponseFormat,
}: {
    jobTitle: string;
    jobDescripition: string;
    AIResponseFormat: string;
    }) => `You are an expert in ATS (Applicant Tracking System) and resume analysis.
  Please analyze and rate this resume and suggest how to improve it.
  The rating can be low if the resume is bad.
  Be thorough and detailed. Don't be afraid to point out any mistakes or areas for improvement.
  If there is a lot to improve, don't hesitate to give low scores. This is to help the user to improve their resume.
  If available, use the job description for the job user is applying to to give more detailed feedback.
  If provided, take the job description into consideration.
  The job title is: ${jobTitle}
  The job description is: ${jobDescripition}
  Provide the feedback using the following format: ${AIResponseFormat}
  Return the analysis as a JSON object, without any other text and without the backticks.
  Do not include any other text or comments.`;
