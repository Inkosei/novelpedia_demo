import { motion } from "framer-motion";
import { newsItems } from "../news/news";
import { FaDiscord } from "react-icons/fa";

// This new component intelligently renders our structured content
const NewsContentRenderer = ({ content }) => {
  return (
    <div className="space-y-4">
      {content.map((item, index) => {
        switch (item.type) {
          case 'paragraph':
            return <p key={index} className="text-gray-300 leading-relaxed">{item.text}</p>;
          
          case 'heading':
            return <h3 key={index} className="text-xl font-bold text-violet-200 pt-2">{item.text}</h3>;

          case 'list':
            return (
              <ul key={index} className="space-y-2 pl-2">
                {item.items.map((li, li_idx) => (
                  <li key={li_idx} className="flex items-start">
                    <span className="text-violet-400 mr-3 mt-1">▸</span>
                    <span className="text-gray-300">{li}</span>
                  </li>
                ))}
              </ul>
            );

          case 'link':
            return (
              <a key={index} href={item.href} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center gap-2 bg-violet-600 hover:bg-violet-500 text-white font-bold py-2 px-4 rounded-lg transition-colors mt-2">
                
                {item.text}
              </a>
            );

          default:
            return null;
        }
      })}
    </div>
  );
};


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
      <motion.h1
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="text-5xl md:text-6xl font-extrabold mb-12 text-center text-violet-300"
        style={{ textShadow: "0 0 15px #a78bfa, 0 0 25px #8b5cf6" }}
      >
        Latest News
      </motion.h1>

      <div className="max-w-4xl mx-auto space-y-8">
        {sortedNews.map((item, idx) => (
          <motion.div
            key={item.date + item.title} // Using a more stable key
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.5, delay: idx * 0.1 }}
            className="bg-black/30 border border-violet-700/50 rounded-xl p-6 sm:p-8 shadow-lg backdrop-blur-sm"
          >
            <p className="text-violet-300 text-sm mb-2 font-medium">{item.date}</p>
            <h2 className="text-2xl sm:text-3xl font-bold mb-6 text-gray-100">{item.title}</h2>
            
            {/* Using the new renderer component */}
            <NewsContentRenderer content={item.content} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}