"use client";

import { useState } from "react";
import { Card } from "@/shared/ui/card";
import { commentsData } from "@/mock/details.mock";

export default function CommentsSection() {
  const [newComment, setNewComment] = useState("");

  return (
    <Card className="h-full min-w-0 p-4 sm:p-5">
      <h3 className="font-semibold text-[#1D3557] text-base sm:text-lg mb-3 sm:mb-4">Comments</h3>
      <div className="space-y-3 sm:space-y-4">
        {commentsData.map((comment) => (
          <div
            key={comment.id}
            className="flex gap-2 sm:gap-3 p-3 bg-white rounded-lg border border-[#E0E8ED] min-w-0"
          >
            <div
              className="flex-shrink-0 w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center text-xs sm:text-sm font-bold text-white"
              style={{ backgroundColor: "#94A3B8" }}
            >
              {comment.author.split(" ")[0]?.[0] ?? comment.initials[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex flex-wrap items-center justify-between gap-1 sm:gap-2">
                <span className="font-semibold text-[#1D3557] text-sm sm:text-base">
                  {comment.author}
                </span>
                <span className="text-[#8597A8] text-xs sm:text-sm">
                  {comment.date}
                </span>
              </div>
              <p className="mt-1.5 sm:mt-2 text-[#1D3557] text-sm sm:text-base leading-5 sm:leading-[22px] break-words">
                {comment.text}
              </p>
            </div>
          </div>
        ))}
        <div className="pt-3 sm:pt-4 border-t border-[#E0E8ED]">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full px-3 py-2 border border-[#E0E8ED] rounded-lg text-xs sm:text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#1D3557]/20 focus:border-[#1D3557] min-h-[60px] sm:min-h-[80px] bg-white"
            rows={3}
          />
          <button
            type="button"
            className="mt-3 sm:mt-4 inline-flex items-center justify-center gap-2 text-white font-medium rounded-lg hover:opacity-90 transition-opacity w-full sm:w-auto min-w-[140px] sm:min-w-[175px] h-9 sm:h-[34px] px-4 sm:px-6 text-xs sm:text-sm bg-[#1D3557]"
          >
            <svg className="w-3.5 h-3.5 sm:w-4 sm:h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Post Comment
          </button>
        </div>
      </div>
    </Card>
  );
}
