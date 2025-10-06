import React from 'react'

const HeroVisual = () => {
  return (
    <svg className="w-full h-full" viewBox="0 0 100 60" preserveAspectRatio="xMidYMid slice">
        {/* Background Subtle Gradient */}
        <rect width="100" height="60" fill="url(#heroGradient)" rx="5" />
        <defs>
            <linearGradient id="heroGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" style={{stopColor: "rgb(129, 140, 248, 0.2)", stopOpacity: 1}} />
                <stop offset="100%" style={{stopColor: "rgb(255, 255, 255, 0.2)", stopOpacity: 1}} />
            </linearGradient>
            <marker id="arrow" viewBox="0 0 10 10" refX="5" refY="5" markerWidth="6" markerHeight="6" orient="auto-start-reverse">
                <path d="M 0 0 L 10 5 L 0 10 z" fill="#4f46e5" />
            </marker>
        </defs>

        {/* Success Line Graph (Rising Trend) */}
        <polyline
            points="10 45, 35 30, 60 40, 85 15"
            fill="none"
            stroke="#4f46e5" /* Indigo-600 */
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            markerEnd="url(#arrow)"
        />

        {/* Data Points (Progress milestones) */}
        <circle cx="10" cy="45" r="2" fill="#4f46e5" />
        <circle cx="35" cy="30" r="2" fill="#4f46e5" />
        <circle cx="60" cy="40" r="2" fill="#4f46e5" />
        <circle cx="85" cy="15" r="3" fill="#10b981" /> {/* Highlighted final score (Emerald-500) */}

        {/* Subtle Text Annotations (Band Score) */}
        <text x="80" y="10" fontSize="5" fontWeight="bold" fill="#10b981">BAND 8.0</text>
        <text x="5" y="55" fontSize="3" fill="#6b7280">Start</text>

        {/* Overlapping Mockup Graphic (a monitor or book) - represents the AI Tool */}
        <rect x="25" y="10" width="30" height="25" rx="2" ry="2" fill="rgba(255,255,255,0.8)" stroke="#6366f1" strokeWidth="0.5" />
        <text x="30" y="25" fontSize="3" fontWeight="bold" fill="#6366f1">AI Feedback</text>

        {/* Decorative pattern for professionalism */}
        <line x1="5" y1="5" x2="95" y2="55" stroke="rgba(255,255,255,0.4)" strokeWidth="0.1" strokeDasharray="2 2" />
    </svg>
  )
}

export default HeroVisual
