"use client";
import { useEffect, useState } from "react";
import RingLoader from "./loader";

const PageLoader = ({ children }) => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setLoading(false); // Sahifa yuklangandan keyin 500ms o‘tib loaderni yashiradi
    }, 500);

    return () => clearTimeout(timeout);
  }, []);

  if (loading) {
    return (
      <div className="fixed inset-0 z-[9999] bg-black flex items-center justify-center">
        <RingLoader size={80} color="#ffffff" />
      </div>
    );
  }

  return children;
};

export default PageLoader;
