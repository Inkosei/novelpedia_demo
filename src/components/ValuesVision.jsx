export default function ValuesVision() {
  return (
    <section
      id="values"
      className="min-h-screen flex items-center justify-center px-4 py-12"
    >
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Values Box */}
        <div className="flex flex-col justify-center items-start bg-purple-600 bg-opacity-60 rounded-lg p-8 border-2 border-amber-400 min-h-[300px]">
          <h3 className="text-2xl font-bold mb-2 flex items-center">
            <span className="mr-2">♥</span> Our Values
          </h3>
          <ul className="list-disc list-inside space-y-1 text-lg mt-2">
            <li>Community-driven content</li>
            <li>Author empowerment</li>
            <li>Reader engagement</li>
          </ul>
        </div>
        {/* Vision Box */}
        <div className="flex flex-col justify-center items-start bg-purple-600 bg-opacity-60 rounded-lg p-8 border-2 border-amber-400 min-h-[300px]">
          <h3 className="text-2xl font-bold mb-2 flex items-center">
            <span className="mr-2">🎯</span> Our Vision
          </h3>
          <p className="mb-2 text-lg">
            We aim to become the largest community hub and haven for novel and book readers, where stories and ideas thrive together.
          </p>
          <p className="italic mb-2 text-purple-200">The dream: a global home for readers and authors.</p>
          <p className="text-lg">Building the world's largest community hub for readers and authors.</p>
        </div>
      </div>
    </section>
  );
}
