"use client";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function HomePage() {
  const router = useRouter();
  const [num1, setNum1] = useState<number | undefined>();
  const [num2, setNum2] = useState<number | undefined>();

  const goToAbout = () => {
    const n1 = num1 ?? 0;
    const n2 = num2 ?? 0;
    router.push(`/about?num1=${n1}&num2=${n2}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-purple-400 to-pink-400">
      <div className="bg-white p-10 rounded-3xl shadow-xl w-96 text-center">
        <h1 className="text-2xl font-bold mb-6">Sum Calculator</h1>

        <input
          type="number"
          value={num1 ?? ""}
          onChange={(e) => setNum1(Number(e.target.value))}
          placeholder="Enter first number"
          className="w-full p-3 mb-4 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <input
          type="number"
          value={num2 ?? ""}
          onChange={(e) => setNum2(Number(e.target.value))}
          placeholder="Enter second number"
          className="w-full p-3 mb-6 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={goToAbout}
          className="w-full bg-purple-600 text-white p-3 rounded-lg hover:bg-purple-700 transition"
        >
          Calculate Sum
        </button>
      </div>
    </div>
  );
}
