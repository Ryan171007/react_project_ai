import Navbar from "~/components/Navbar";
import { resumes } from "~/constants";
import ResumeCards from "~/components/ResumeCards";
import type { Route } from "./+types/home";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Resuming" },
    { name: "", content: "A start for you dream" },
  ];
}

export default function Home() {
  return <main className = "bg-[url('../images/bg-main.svg')] bg-cover">
    <Navbar />

    <section className="main-section">
      <div className="page-heading">
        <h1>Track Your Application & Resume Rading</h1>
        <h2>Revise your submission and check AI-powered feedback.</h2>
        
      </div>

    {resumes.length > 0 && (
      <div className="resumes-section">
        {[resumes.map((resume) =>
          <div>
            <ResumeCards key={resume.id} resume={resume} />
          </div>
        )]}
      </div>
    )}
    </section>

  </main>;
}
