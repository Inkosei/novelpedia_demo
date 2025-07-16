import { newsItems } from "../news/news";

export default function NewsPage() {
  // Sort newest first
  const sortedNews = [...newsItems].sort((a, b) => {
    const [d1, m1, y1] = a.date.split("-").map(Number);
    const [d2, m2, y2] = b.date.split("-").map(Number);
    const dateA = new Date(y1, m1 - 1, d1);
    const dateB = new Date(y2, m2 - 1, d2);
    return dateB - dateA;
  });

  return (
    <div className="min-h-screen pt-32 md:pt-40 text-white p-4 sm:p-8">
      <h1
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-violet-300"
        style={{ textShadow: "0 0 15px #a78bfa, 0 0 25px #8b5cf6" }}
      >
        Latest News
      </h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {sortedNews.map((item, idx) => (
          <div
            key={idx}
            className="
              bg-black/30 
              border border-violet-600/50 
              rounded-lg 
              p-6 
              shadow-lg 
              backdrop-blur-sm
              transition-all duration-300
              hover:border-violet-500
            "
          >
            <p className="text-violet-300 text-sm mb-2 font-medium">{item.date}</p>
            <h2 className="text-2xl font-bold mb-4 text-gray-100">{item.title}</h2>
            <p className="whitespace-pre-line text-gray-300 leading-relaxed">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}