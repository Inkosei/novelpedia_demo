import { newsItems } from "../news/news";

export default function NewsPage() {
  // Sort newest first
  const sortedNews = [...newsItems].sort((a, b) => {
    const [d1, m1, y1] = a.date.split("-").map(Number);
    const [d2, m2, y2] = b.date.split("-").map(Number);
    const da = new Date(y1, m1 - 1, d1);
    const db = new Date(y2, m2 - 1, d2);
    return db - da;
  });

  return (
    <div className="min-h-screen pt-30 text-white p-8">
      <h1
        className="
          text-4xl 
          font-extrabold 
          mb-8 
          text-center 
          animate-bounce 
          bg-gradient-to-r 
          from-red-100
          via-pink-100
          to-yellow-100
          text-transparent 
          bg-clip-text
        "
      >
        Latest News
      </h1>

      <div className="space-y-8">
        {sortedNews.map((item, idx) => (
          <div
            key={idx}
            className="
              bg-purple-800/50 
              border border-amber-500/20
              rounded-lg 
              p-6 
              shadow-lg
            "
          >
            <p className="text-gray-300 text-sm mb-2">{item.date}</p>
            <h2 className="text-2xl font-bold mb-4">{item.title}</h2>
            <p className="whitespace-pre-line text-gray-100">
              {item.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
