@import url('https://fonts.googleapis.com/css2?family=Anton&family=Ubuntu:wght@400;500;700&display=swap');
@import "tailwindcss";

@theme {
  --font-sans: "Ubuntu", ui-sans-serif, system-ui, sans-serif;
  --font-display: "Anton", display, sans-serif;

  --color-brand-navy: #050B2E;
  --color-brand-orange: #D46900;
  --color-brand-purple: #6A38B3;
  --color-brand-white: #FFFFFF;
  --color-brand-grey: #E0E0E0;
}

body {
  background-color: var(--color-brand-navy);
  color: var(--color-brand-white);
  font-family: var(--font-sans);
  margin: 0;
  padding: 0;
}

/* Custom scrollbars matching our Deep Space Navy style */
::-webkit-scrollbar {
  width: 8px;
  height: 8px;
}

::-webkit-scrollbar-track {
  background: #050B2E;
}

::-webkit-scrollbar-thumb {
  background: #6A38B3;
  border-radius: 4px;
}

::-webkit-scrollbar-thumb:hover {
  background: #D46900;
}

/* Backlighting glow effects (blurred orbs) */
.orb-purple {
  background: radial-gradient(circle, rgba(106, 56, 179, 0.45) 0%, rgba(106, 56, 179, 0) 70%);
  filter: blur(40px);
}

.orb-orange {
  background: radial-gradient(circle, rgba(212, 105, 0, 0.35) 0%, rgba(212, 105, 0, 0) 70%);
  filter: blur(40px);
}

/* Pulse animation for active highlights */
@keyframes soft-pulse {
  0%, 100% {
    box-shadow: 0 0 15px rgba(212, 105, 0, 0.4);
  }
  50% {
    box-shadow: 0 0 25px rgba(212, 105, 0, 0.8);
  }
}

.pulse-cta {
  animation: soft-pulse 2s infinite;
}

/* Clean markdown formatting within roleplayer reports */
.markdown-body h1, .markdown-body h2, .markdown-body h3 {
  font-family: 'Anton', display, sans-serif;
  font-weight: normal;
  text-transform: uppercase;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
  color: #FFFFFF;
}

.markdown-body h1 {
  font-size: 1.5rem;
  border-left: 4px solid #D46900;
  padding-left: 0.5rem;
}

.markdown-body h2 {
  font-size: 1.25rem;
  border-left: 4px solid #6A38B3;
  padding-left: 0.5rem;
}

.markdown-body h3 {
  font-size: 1.1rem;
}

.markdown-body p {
  margin-bottom: 0.75rem;
  line-height: 1.6;
  color: #E0E0E0;
}

.markdown-body strong {
  color: #FFFFFF;
  font-weight: 500;
}

.markdown-body ul, .markdown-body ol {
  padding-left: 1.25rem;
  margin-bottom: 0.75rem;
}

.markdown-body li {
  margin-bottom: 0.25rem;
  list-style-type: disc;
  color: #E0E0E0;
}
