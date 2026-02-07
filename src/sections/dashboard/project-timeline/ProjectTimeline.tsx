"use client";

import { Card } from "@/shared/ui/card";

interface TimelineEvent {
  id: string;
  date: string;
  label: string;
  status: "completed" | "upcoming";
}

export default function ProjectTimeline() {
  const events: TimelineEvent[] = [
    { id: "1", date: "Mar 17", label: "Kickoff Workshop", status: "completed" },
    { id: "2", date: "March 18", label: "Data Collection", status: "completed" },
    { id: "3", date: "May 8", label: "Initial Phase", status: "upcoming" },
    { id: "4", date: "May 9–July 12", label: "Verification", status: "upcoming" },
    { id: "5", date: "July 13", label: "Completion Reviews", status: "upcoming" },
    { id: "6", date: "August 21", label: "Cycle Conclusion", status: "upcoming" },
  ];

  const currentYear = new Date().getFullYear();
  const progressPercent = 33; // Green covers first 2 of 6 markers
  const getDotLeft = (index: number) =>
    events.length <= 1 ? 0 : (index / (events.length - 1)) * 100;

  return (
    <Card className="relative lg:col-span-2">
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-lg font-semibold text-[#1A202C]">
          Project Timeline
        </h2>

        <div className="relative">
          <select className="appearance-none bg-white border border-[#E0E8ED] rounded-lg pl-3 pr-8 py-2 w-[72px] text-sm font-medium text-[#1A202C] cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent">
            <option>{currentYear}</option>
            <option>{currentYear - 1}</option>
            <option>{currentYear + 1}</option>
          </select>
          <svg
            className="absolute right-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-[#666666] pointer-events-none"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>

      {/* Timeline bar – green then light grey, sharp transition */}
      <div className="relative h-2.5">
        <div className="absolute inset-0 bg-[#F5F8FA] rounded-full" />
        <div
          className="absolute left-0 top-0 h-full bg-[#4CAF50] rounded-full"
          style={{ width: `${progressPercent}%` }}
        />

        {/* Dots on bar – white+green for completed, solid red for upcoming */}
        {events.map((event, index) => {
          const left = getDotLeft(index);
          return (
            <div
              key={event.id}
              className="absolute top-1/2 w-3.5 h-3.5 -translate-x-1/2 -translate-y-1/2 rounded-full z-10"
              style={{ left: `${left}%` }}
            >
              <div
                className={`w-full h-full rounded-full ${
                  event.status === "completed"
                    ? "bg-white border-2 border-[#4CAF50]"
                    : "bg-[#EF4444]"
                }`}
              />
            </div>
          );
        })}
      </div>

      {/* Labels below – date (light grey) + phase (dark) */}
      <div className="relative mt-5 min-h-[56px]">
        {events.map((event, index) => {
          const left = getDotLeft(index);
          const isFirst = index === 0;
          const isLast = index === events.length - 1;

          return (
            <div
              key={event.id}
              className={`absolute flex flex-col text-center top-0 ${
                isFirst
                  ? "left-0 items-start -translate-x-0"
                  : isLast
                  ? "right-0 left-auto items-end translate-x-0"
                  : "items-center -translate-x-1/2"
              }`}
              style={
                isFirst
                  ? { left: 0 }
                  : isLast
                  ? { right: 0, left: "auto" }
                  : { left: `${left}%` }
              }
            >
              <span className="whitespace-nowrap align-middle capitalize text-[14px] leading-[16px] font-normal text-[#8597A8]">
                {event.date}
              </span>
              <span className="mt-1.5 align-middle capitalize text-[14px] leading-[16px] font-medium text-[#1D3557]">
                {event.label}
              </span>
            </div>
          );
        })}
      </div>
    </Card>
  );
}