"use client";
import { useSearchParams, useRouter } from "next/navigation";

export default function AboutPage() {
  const searchParams = useSearchParams();
  const router = useRouter();
  const num1 = Number(searchParams.get("num1") || 0);
  const num2 = Number(searchParams.get("num2") || 0);
  const sum = num1 + num2;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-green-400 to-blue-500">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-96 text-center">
        <h1 className="text-2xl font-bold mb-6">Result</h1>

        <p className="mb-2 text-lg">
          First number: <span className="font-semibold">{num1}</span>
        </p>
        <p className="mb-4 text-lg">
          Second number: <span className="font-semibold">{num2}</span>
        </p>
        <h2 className="text-3xl font-bold mb-6">Sum: {sum}</h2>

        <button
          onClick={() => router.push("/")}
          className="w-full bg-blue-600 text-white p-3 rounded-lg hover:bg-blue-700 transition"
        >
          Go Back
        </button>
      </div>
    </div>
  );
}
