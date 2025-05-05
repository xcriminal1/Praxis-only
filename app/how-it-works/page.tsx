"use client";
import React from "react";

export default function HowItWorks() {
  return (
    <div className="min-h-screen bg-background text-foreground p-8 sm:p-20">
      <h1 className="text-3xl font-bold text-center mb-10">How It Works</h1>
      <div className="max-w-4xl mx-auto space-y-8">
        <section className="p-6 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">1. Sign Up or Log In</h2>
          <p className="text-lg">
            Begin by signing up or logging in to your account. Once you're in, you'll gain access to all our powerful mock interview tools.
          </p>
        </section>
        <section className="p-6 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">2. Choose Your Plan</h2>
          <p className="text-lg">
            Select from our Free, Pro, or Premium plans based on your needs. Upgrade your plan anytime from your dashboard.
          </p>
        </section>
        <section className="p-6 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">3. Start Your Mock Interview</h2>
          <p className="text-lg">
            Engage in a realistic mock interview using our dynamic platform. Utilize AI-powered questions and receive live feedback to improve your performance.
          </p>
        </section>
        <section className="p-6 border border-gray-200 rounded-lg shadow-sm">
          <h2 className="text-2xl font-semibold mb-2">4. Review Your Feedback</h2>
          <p className="text-lg">
            After each session, review detailed feedback on your technical answers, communication, and overall performance to identify areas for improvement.
          </p>
        </section>
      </div>
    </div>
  );
}
