"use client";

import { useState } from "react";

export default function Home() {
  const [description, setDescription] = useState("");
  const [result, setResult] = useState("");

  const handleAnalyze = () => {
    if (!description.trim()) {
      setResult("Please enter a customer description first.");
      return;
    }

    // Placeholder for now – we will connect Grok next
    setResult(
      `Analyzing: "${description}"\n\n(This is a placeholder. Real recommendations from Grok will appear here soon.)`
    );
  };

  return (
    <main className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-2xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">
          Audience Finder
        </h1>
        <p className="text-gray-600 mb-8">
          Describe your ideal customer and get platform + demographic
          recommendations.
        </p>

        <div className="bg-white rounded-xl shadow-sm border p-6 mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Ideal Customer Description
          </label>
          <textarea
            className="w-full h-32 p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none"
            placeholder="Example: Women aged 28-42 in Utah who are interested in health, fitness, and natural supplements..."
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />

          <button
            onClick={handleAnalyze}
            className="mt-4 w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-3 px-4 rounded-lg transition"
          >
            Analyze Audience
          </button>
        </div>

        {result && (
          <div className="bg-white rounded-xl shadow-sm border p-6">
            <h2 className="text-lg font-semibold mb-3">Results</h2>
            <pre className="whitespace-pre-wrap text-gray-700 text-sm">
              {result}
            </pre>
          </div>
        )}
      </div>
    </main>
  );
}
