"use client";

import { useLayoutEffect, useRef } from "react";
import gsap from "gsap";

export const useGSAP = (callback, deps = []) => {
  const scope = useRef(null);

  useLayoutEffect(() => {
    const ctx = gsap.context(callback, scope);
    return () => ctx.revert();
  }, deps);

  return scope;
};
