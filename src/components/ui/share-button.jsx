import { useState } from "react";
import { FaShareAlt } from "react-icons/fa";

// Mobile yoki Desktop aniqlash
const isMobile = () => /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

export default function ShareButton() {
  const [showModal, setShowModal] = useState(false);
  const url = window.location.href;

  const handleShare = async () => {
    if (isMobile() && navigator.share) {
      try {
        await navigator.share({
          title: "My Project",
          text: "Check out this awesome project!",
          url,
        });
      } catch (error) {
        console.error("Sharing failed:", error);
      }
    } else {
      // Desktop — custom modal ochamiz
      setShowModal(true);
    }
  };

  const handleCopy = () => {
    navigator.clipboard.writeText(url);
    alert("Link copied to clipboard!");
  };

  return (
    <>
      <button
        onClick={handleShare}
       className="flex items-center gap-0.5 text-[12px] font-bold bg-[#547792] rounded-sm px-2.5 py-1 text-[#000000]  hover:text-blue-400 transition-all"
      >
        <span><FaShareAlt />
        </span> Share
      </button>

      {showModal && (
        <div className="fixed inset-0 z-50 bg-[#33333332] backdrop-blur-md bg-opacity-60 flex items-center justify-center">
          <div className="bg-[linear-gradient(-35deg,_#000000_0%,_#2a2d30_70%)] rounded-lg p-6 w-full max-w-sm">
            <div className="flex flex-col gap-3">
              <a
                href={`https://t.me/share/url?url=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#547792] text-[#bbb8b8] hover:text-white px-4 py-2 rounded hover:bg-blue-600 text-center"
              >
                Telegram
              </a>
              <a
                href={`https://wa.me/?text=${encodeURIComponent(url)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#547792] text-[#bbb8b8] hover:text-white  px-4 py-2 rounded hover:bg-green-600 text-center"
              >
                WhatsApp
              </a>
              <a
                href={`mailto:?subject=Check this project&body=${encodeURIComponent(url)}`}
                className="bg-[#547792] text-[#bbb8b8] hover:text-white  px-4 py-2 rounded hover:bg-gray-600 text-center"
              >
                Email
              </a>
              <button
                onClick={handleCopy}
                className="bg-[#547792] text-[#bbb8b8] hover:text-white  px-4 py-2 rounded hover:bg-purple-600"
              >
                Copy Link
              </button>
              <button
                onClick={() => setShowModal(false)}
                className="mt-2 text-sm text-[#547792] hover:underline"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
