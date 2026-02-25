"use client";

import { useState } from "react";
import SmoothScrollProvider from "@/components/SmoothScroll";
import GSAPLoader from "./GSAPLoader";
import CustomCursor from "@/components/CustomCursor";
import ScrollToTop from "@/components/ScrollToTop";

export default function ClientWrapper({ children }) {
  const [loading, setLoading] = useState(true);

  return (
    <SmoothScrollProvider>
      {loading && <GSAPLoader finishLoading={() => setLoading(false)} />}
      <CustomCursor />
      <ScrollToTop />
      {children}
    </SmoothScrollProvider>
  );
}