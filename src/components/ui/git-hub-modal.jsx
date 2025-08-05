import { useEffect, useState } from "react";

const GithubModal = () => {
  const [showModal, setShowModal] = useState(false);
  const [countdown, setCountdown] = useState(8);

  useEffect(() => {
    const openTimer = setTimeout(() => {
      setShowModal(true);
    }, 4000); 

    return () => clearTimeout(openTimer);
  }, []);

  useEffect(() => {
    if (!showModal) return;

    const interval = setInterval(() => {
      setCountdown((prev) => prev - 1);
    }, 1000); 

    const closeTimer = setTimeout(() => {
      setShowModal(false);
      clearInterval(interval);
    }, 8000); 

    return () => {
      clearInterval(interval);
      clearTimeout(closeTimer);
    };
  }, [showModal]);

  if (!showModal) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-[#33333332] backdrop-blur-md bg-opacity-60 z-50">
      <div className="bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] rounded-xl shadow-xl p-6 text-center max-w-sm w-full">
        <h2 className="text-xl font-semibold mb-2 text-gray-600">
          Subscribe to my GitHub!
        </h2>
        <p className="text-sm text-gray-600 mb-3">
          Follow my new projects and rate my repositories.
        </p>
        <a
          href="https://github.com/amirkhan-kh"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-black text-gray-200 px-4 py-2 rounded hover:bg-gray-800 transition block"
        >
          Go to my GitHub profile
        </a>
        <p className="text-xs text-gray-500 mt-4">
          Closing in <span className="font-semibold">{countdown}</span> 
        </p>
      </div>
    </div>
  );
};

export default GithubModal;
