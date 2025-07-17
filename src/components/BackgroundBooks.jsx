export default function BackgroundBooks() {
  return (
    <div className="fixed inset-0 z-10 overflow-hidden pointer-events-none touch-none">
      {Array.from({ length: 20 }).map((_, i) => (
        <img
          key={i}
          src="./book_icon.png"
          alt="book"
          className="absolute opacity-10 animate-floating pointer-events-none"
          style={{
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            width: `${30 + Math.random() * 50}px`,
            animationDelay: `${Math.random() * 10}s`,
          }}
        />
      ))}

      <style>
        {`
          @keyframes floating {
            0% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-20px) rotate(5deg); }
            100% { transform: translateY(0px) rotate(0deg); }
          }

          .animate-floating {
            animation: floating 6s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
}
