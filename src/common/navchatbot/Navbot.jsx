import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const NavBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [recommendation, setRecommendation] = useState(null);

  const questions = [
    {
      question: "What type of packaging do you need to produce?",
      options: [
        "Stand-up pouches",
        "Flat pouches",
        "Shopping bags",
        "Gusseted bags",
      ],
      key: "packagingType",
    },
    {
      question: "What material will you primarily use?",
      options: [
        "Plastic film",
        "Aluminum foil",
        "Kraft paper",
        "Laminated materials",
      ],
      key: "material",
    },
    {
      question: "What's your required production speed?",
      options: [
        "<200 units/min",
        "200-500 units/min",
        "500-800 units/min",
        ">800 units/min",
      ],
      key: "speed",
    },
    {
      question: "Do you need printing capabilities?",
      options: [
        "Yes, full color printing",
        "Yes, simple logo printing",
        "No printing needed",
      ],
      key: "printing",
    },
  ];

  const machines = [
    {
      id: "pouchMaster",
      name: "PouchMaster Pro 3000",
      type: "pouch",
      description: "High-speed pouch making machine with flexo printing",
      bestFor: ["Stand-up pouches", "Flat pouches", "Laminated materials"],
      speed: "200-800 units/min",
      link: "/machines/pouchmaster-pro",
    },
    {
      id: "bagExpert",
      name: "BagExpert Ultra 5000",
      type: "bag",
      description: "Automatic bag making machine with handle attachment",
      bestFor: ["Shopping bags", "Gusseted bags", "Kraft paper"],
      speed: "100-500 units/min",
      link: "/machines/bagexpert-ultra",
    },
  ];

  const handleAnswer = (answer) => {
    const newAnswers = { ...answers, [questions[step].key]: answer };
    setAnswers(newAnswers);

    if (step < questions.length - 1) {
      setStep(step + 1);
    } else {
      // Determine recommendation
      const pouchMatches =
        newAnswers.packagingType === "Stand-up pouches" ||
        newAnswers.packagingType === "Flat pouches";
      const bagMatches =
        newAnswers.packagingType === "Shopping bags" ||
        newAnswers.packagingType === "Gusseted bags";

      setRecommendation(
        pouchMatches ? machines[0] : bagMatches ? machines[1] : machines[0] // Default to pouch machine
      );
    }
  };

  const resetConversation = () => {
    setStep(0);
    setAnswers({});
    setRecommendation(null);
  };

  return (
    <>
      {/* Floating Assistant Button */}
      <motion.div
        className="fixed bottom-6 right-6 z-50"
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        <button
          onClick={() => setIsOpen(true)}
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-3 px-5 rounded-full shadow-lg flex items-center"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-2"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
            <path
              fillRule="evenodd"
              d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z"
              clipRule="evenodd"
            />
          </svg>
          Machine Selection Assistant
        </button>
      </motion.div>

      {/* Assistant Modal */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            className="fixed inset-0 bg-black bg-opacity-30 flex items-end justify-center z-50 p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          >
            <motion.div
              className="bg-white rounded-t-xl rounded-b-lg shadow-xl w-full max-w-md max-h-[80vh] overflow-hidden"
              initial={{ y: 100, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: 100, opacity: 0 }}
              transition={{ type: "spring", damping: 25 }}
              onClick={(e) => e.stopPropagation()}
            >
              {/* Header */}
              <div className="bg-indigo-600 text-white p-4 flex justify-between items-center">
                <h3 className="font-medium text-lg">
                  Packaging Machine Advisor
                </h3>
                <button onClick={() => setIsOpen(false)} className="text-white">
                  <svg
                    className="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                </button>
              </div>

              {/* Content */}
              <div
                className="p-4 overflow-y-auto"
                style={{ maxHeight: "60vh" }}
              >
                {!recommendation ? (
                  <>
                    <div className="mb-6">
                      <div className="bg-gray-100 p-3 rounded-lg inline-block">
                        <p className="text-gray-800 font-medium">
                          {questions[step].question}
                        </p>
                      </div>
                    </div>

                    <div className="space-y-3">
                      {questions[step].options.map((option) => (
                        <motion.button
                          key={option}
                          onClick={() => handleAnswer(option)}
                          className="w-full text-left p-3 border border-gray-200 rounded-lg hover:bg-indigo-50 transition-colors"
                          whileHover={{ x: 5 }}
                        >
                          {option}
                        </motion.button>
                      ))}
                    </div>
                  </>
                ) : (
                  <div className="space-y-4">
                    <div className="bg-green-50 border border-green-200 p-4 rounded-lg">
                      <div className="flex items-start">
                        <svg
                          className="h-5 w-5 text-green-500 mt-0.5 mr-2"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <div>
                          <h4 className="font-bold text-green-800">
                            Recommended Machine
                          </h4>
                          <p className="text-lg font-medium mt-1">
                            {recommendation.name}
                          </p>
                          <p className="text-sm text-gray-600 mt-1">
                            {recommendation.description}
                          </p>
                        </div>
                      </div>
                    </div>

                    <div className="bg-gray-50 p-4 rounded-lg">
                      <h5 className="font-medium text-sm text-gray-700 mb-2">
                        YOUR REQUIREMENTS:
                      </h5>
                      <ul className="space-y-2">
                        {Object.entries(answers).map(([key, value]) => (
                          <li key={key} className="flex text-sm">
                            <span className="text-gray-500 w-32 capitalize">
                              {key.replace(/([A-Z])/g, " $1").trim()}:
                            </span>
                            <span className="font-medium">{value}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="flex space-x-3">
                      <a
                        href={recommendation.link}
                        className="flex-1 bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-2.5 px-4 rounded-lg text-center"
                      >
                        View Details
                      </a>
                      <button
                        onClick={resetConversation}
                        className="flex-1 border border-indigo-600 text-indigo-600 hover:bg-indigo-50 font-medium py-2.5 px-4 rounded-lg"
                      >
                        Start Over
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default NavBot;
