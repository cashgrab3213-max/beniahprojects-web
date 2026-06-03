export default function Logo() {
  return (
    <svg
      width="40"
      height="40"
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="group-hover:scale-105 transition-transform duration-300"
    >
      {/* Verde principal */}
      <rect x="5" y="5" width="6" height="20" rx="1" fill="#1B5E3F" />
      
      {/* Naranja dorado - parte superior derecha */}
      <path
        d="M18 8L28 8L28 18L18 18L18 8Z"
        fill="#D97E3A"
        opacity="0.8"
      />
      
      {/* Naranja - parte inferior derecha */}
      <path
        d="M18 20L28 20L28 30L18 30L18 20Z"
        fill="#C4A040"
        opacity="0.9"
      />
      
      {/* Línea decorativa */}
      <line x1="15" y1="35" x2="30" y2="35" stroke="#D97E3A" strokeWidth="2" strokeLinecap="round" />
    </svg>
  )
}
