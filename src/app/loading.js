"use client"; // loading.js must be a client component to use hooks

import LoadingSpinner from "@/components/LoadingSpinner";
import React, { useEffect, useState } from "react";

export default function Loading() {
  const [showSpinner, setShowSpinner] = useState(false);

  useEffect(() => {
    // Show spinner only after 300ms to avoid flicker on super fast loads
    const timer = setTimeout(() => setShowSpinner(true), 2000);
    return () => clearTimeout(timer);
  }, []);

  if (!showSpinner) return null;
  return <LoadingSpinner />;
}
