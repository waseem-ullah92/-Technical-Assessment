"use client";

import { Card } from "@/shared/ui/card";
import { useProjectTimeline } from "./useProjectTimeline";

export default function ProjectTimeline() {
  const {
    timelineYears,
    selectedYear,
    setSelectedYear,
    events,
    progressPercent,
    getDotLeft,
    isCompletedOrCurrent,
  } = useProjectTimeline();

  return (
    <Card className="relative lg:col-span-2">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-base sm:text-lg font-semibold text-[#1A202C]">
          Project Timeline
        </h2>

        <div className="relative flex-shrink-0">
          <select
            value={selectedYear}
            onChange={(e) => setSelectedYear(Number(e.target.value))}
            className="appearance-none w-[90px] h-[34px] pl-3 pr-8 rounded-[10px] border border-[#E0E8ED] bg-[#FFFFFF] text-sm font-medium text-[#1A202C] cursor-pointer focus:outline-none focus:ring-2 focus:ring-slate-200 focus:border-transparent"
          >
            {timelineYears.map((year) => (
              <option key={year} value={year}>
                {year}
              </option>
            ))}
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

      {events.length === 0 ? (
        <div className="py-8 text-center text-sm text-[#8597A8]">
          No timeline data for {selectedYear}
        </div>
      ) : (
        <>
          <div>
          <div className="hidden md:max-[1229px]:block">
            <div className="relative pl-5">
              <div
                className="absolute left-[5px] top-0 bottom-0 w-0.5 bg-[#F5F8FA] rounded-full"
                style={{ transform: "translateX(-50%)" }}
              />
              <div
                className="absolute left-[5px] top-0 w-0.5 bg-[#4CAF50] rounded-full"
                style={{
                  height: `${progressPercent}%`,
                  minHeight: progressPercent > 0 ? 4 : 0,
                  transform: "translateX(-50%)",
                }}
              />
              {events.map((event, index) => (
                <div
                  key={event.id}
                  className="relative flex items-start gap-3 py-4 first:pt-0 border-b border-[#E0E8ED] last:border-b-0"
                >
                  <div
                    className={`absolute left-[-15px] top-6 w-3.5 h-3.5 -translate-x-1/2 rounded-full z-10 flex-shrink-0 ${
                      isCompletedOrCurrent(event.status)
                        ? "bg-white border-2 border-[#4CAF50]"
                        : "bg-[#EF4444]"
                    }`}
                  />
                  <div className="flex flex-col min-w-0 flex-1">
                    <span className="text-xs font-normal text-[#8597A8]">
                      {event.date}
                    </span>
                    <span className="text-sm font-medium text-[#1D3557] mt-0.5">
                      {event.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="hidden min-[1230px]:block w-full">
            <div className="w-full">
                <div className="relative h-2.5">
                  <div className="absolute inset-0 bg-[#F5F8FA] rounded-full" />
                  <div
                    className="absolute left-0 top-0 h-full bg-[#4CAF50] rounded-full"
                    style={{ width: `${progressPercent}%` }}
                  />

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
                            isCompletedOrCurrent(event.status)
                              ? "bg-white border-2 border-[#4CAF50]"
                              : "bg-[#EF4444]"
                          }`}
                        />
                      </div>
                    );
                  })}
                </div>

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
                        <span className="whitespace-nowrap text-xs sm:text-sm leading-[16px] font-normal text-[#8597A8]">
                          {event.date}
                        </span>
                        <span className="mt-1.5 whitespace-nowrap text-xs sm:text-sm leading-[16px] font-medium text-[#1D3557]">
                          {event.label}
                        </span>
                      </div>
                    );
                  })}
                </div>
            </div>
          </div>

          <div className="md:hidden space-y-0">
            {events.map((event, index) => (
              <div
                key={event.id}
                className="flex items-start gap-3 py-4 first:pt-0 border-b border-[#E0E8ED] last:border-b-0"
              >
                <div
                  className={`flex-shrink-0 w-3.5 h-3.5 rounded-full mt-0.5 ${
                    isCompletedOrCurrent(event.status)
                      ? "bg-white border-2 border-[#4CAF50]"
                      : "bg-[#EF4444]"
                  }`}
                />
                <div className="flex flex-col min-w-0 flex-1">
                  <span className="text-xs font-normal text-[#8597A8]">
                    {event.date}
                  </span>
                  <span className="text-sm font-medium text-[#1D3557] mt-0.5">
                    {event.label}
                  </span>
                </div>
              </div>
            ))}
          </div>
          </div>
        </>
      )}
    </Card>
  );
}
