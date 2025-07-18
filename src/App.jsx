import { useEffect, useRef, useState } from "react";

const data = Array.from({ length: 10 }, (_, i) => i + 1);

function App() {
  const [selected, setSelected] = useState(1);
  const ulRef = useRef(null);

  useEffect(() => {
    if (ulRef.current) {
      const selectedLi = ulRef.current.querySelector(
        `li:nth-child(${selected})`
      );

      if (selectedLi) {
        selectedLi.scrollIntoView({
          behavior: "smooth",
          inline: "center",
        });
      }
    }
  }, [selected]);

  return (
    <div className="bg-gray-700 w-full min-h-screen flex flex-col justify-center items-center p-4 sm:p-8 md:p-12">
      <div className="flex items-center justify-center w-full max-w-5xl mx-auto">
        <ul
          ref={ulRef}
          className="flex justify-start items-center border border-black px-4 py-8 rounded-2xl w-full flex-nowrap overflow-x-scroll scrollbar-hide"
        >
          {data.map((item) => (
            <li
              key={item}
              className={`min-w-[calc(100%-2rem)] sm:min-w-[calc(40%-1rem)] md:min-w-[calc(33.333%-1rem)]
                h-72 rounded-md bg-green-500 flex items-center justify-center text-white text-3xl font-bold flex-shrink-0
                ${selected === item ? "transform shadow-xl" : ""}`}
            >
              {item}
            </li>
          ))}
        </ul>
      </div>
      <div className="flex gap-4 mt-8 justify-center items-center w-full">
        <button
          onClick={() => setSelected((prev) => Math.max(1, prev - 1))}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
        >
          Previous
        </button>
        <button
          onClick={() => setSelected((prev) => Math.min(data.length, prev + 1))}
          className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-md hover:bg-blue-600 transition-colors duration-200"
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default App;
