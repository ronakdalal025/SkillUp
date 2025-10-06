import { BookOpen, ClipboardCheck, Mic, Target } from "lucide-react";

const featuresData = [
  {
    icon: Mic,
    title: "Dedicated Speaking Practice",
    description: "Daily one-on-one sessions with certified examiners focused on fluency, coherence, vocabulary, and accurate pronunciation.",
    color: "bg-indigo-100 text-indigo-700",
  },
  {
    icon: ClipboardCheck,
    title: "Full-Length Mock Tests",
    description: "Weekly timed mock exams mimicking the real IELTS environment, followed by detailed, section-wise performance analysis.",
    color: "bg-emerald-100 text-emerald-700",
  },
  {
    icon: Target,
    title: "AI Band Score Predictor",
    description: "Leverage our proprietary AI system to accurately predict your band score across all four modules based on your submissions.",
    color: "bg-rose-100 text-rose-700",
  },
  {
    icon: BookOpen,
    title: "Premium Study Materials",
    description: "Access to exclusive, regularly updated content including video lectures, grammar guides, and over 100 practice sets.",
    color: "bg-yellow-100 text-yellow-700",
  },
];

const testimonialsData = [
  {
    name: "Anya Sharma",
    review: "ScoreUp helped me jump from a 6.5 to an 8.0 in just four weeks! The speaking practice sessions were absolutely transformative.",
    bandScore: "8.0 Overall",
  },
  {
    name: "David Lee",
    review: "The AI Band Predictor was eerily accurate. I felt fully prepared for the structure and timing of the actual test. Highly recommend.",
    bandScore: "7.5 Overall",
  },
  {
    name: "Omar K.",
    review: "Fantastic resource base and extremely patient instructors. Their feedback on my writing tasks was detailed and pushed my score up significantly.",
    bandScore: "7.0 Overall",
  },
];

export {testimonialsData, featuresData};