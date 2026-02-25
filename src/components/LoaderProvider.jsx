"use client";

import GSAPLoader from "@/app/GSAPLoader";
import { useState } from "react";

export default function LoaderProvider({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <>
      {loading && (
        <GSAPLoader
          finishLoading={() => setLoading(false)}
        />
      )}

      <div
        className={
          loading
            ? "opacity-0"
            : "opacity-100 transition-opacity duration-700"
        }
      >
        {children}
      </div>
    </>
  );
}