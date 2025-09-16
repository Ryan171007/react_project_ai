import type { Route } from "./+types/home";
import { usePuterStore } from "~/lib/puter";
export const meta = () => {
	return [
		{ title: "Resuming | Auth" },
		{ name: "description", content: "Log into your account" },
	];
}

export default function Auth() {

	const { isLoading } = usePuterStore();

	return <main className="bg-[url('../images/bg-auth.svg')] bg-cover min-h-screen flex items-center justify-center">
		<div className="gradient-border shadow-lg">
			<section className="flex flex-col gap-8 bg-white rounded-2xl p-10">
				<div className="flex gap-2 flex-col items-center justify-center text-center">
				<h1>Welcome</h1>
				<h2>Sing in with continue your Job Journey</h2>
				</div>
			</section>
		</div>
	</main>
}