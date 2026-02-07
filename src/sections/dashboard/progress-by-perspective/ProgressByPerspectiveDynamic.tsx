"use client";

import dynamic from "next/dynamic";

const ProgressByPerspective = dynamic(
  () => import("./ProgressByPerspective"),
  {
    ssr: false,
    loading: () => (
      <div className="bg-white p-5 rounded-[10px] border border-[#E0E8ED] shadow-sm h-[320px] flex items-center justify-center">
        <div className="w-full h-[240px] bg-[#F5F8FA] rounded-lg animate-pulse" />
      </div>
    ),
  }
);

export default ProgressByPerspective;
