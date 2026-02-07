"use client";

import { useState } from "react";
import { Card } from "@/shared/ui/card";
import { commentsData } from "@/mock/details.mock";

export default function CommentsSection() {
  const [newComment, setNewComment] = useState("");

  return (
    <Card className="h-full">
      <h3 className="font-semibold text-[#1D3557] text-lg mb-4">Comments</h3>
      <div className="space-y-4">
        {commentsData.map((comment) => (
          <div
            key={comment.id}
            className="flex gap-3 p-3 bg-white rounded-lg border border-[#E0E8ED]"
          >
            <div
              className="flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-sm font-bold text-white"
              style={{ backgroundColor: "#94A3B8" }}
            >
              {comment.author.split(" ")[0]?.[0] ?? comment.initials[0]}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between gap-2 flex-wrap">
                <span
                  className="font-semibold text-[#1D3557]"
                  style={{ fontSize: 16 }}
                >
                  {comment.author}
                </span>
                <span
                  className="text-[#8597A8]"
                  style={{ fontSize: 14 }}
                >
                  {comment.date}
                </span>
              </div>
              <p
                className="mt-2 text-[#1D3557]"
                style={{ fontSize: 16, lineHeight: "22px" }}
              >
                {comment.text}
              </p>
            </div>
          </div>
        ))}
        <div className="pt-4 border-t border-[#E0E8ED]">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full px-3 py-2 border border-[#E0E8ED] rounded-lg text-sm resize-y focus:outline-none focus:ring-2 focus:ring-[#1D3557]/20 focus:border-[#1D3557] min-h-[80px] bg-white"
            rows={4}
          />
          <button
            type="button"
            className="mt-4 inline-flex items-center justify-center gap-[10px] text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            style={{
              width: 175,
              height: 34,
              backgroundColor: "#1D3557",
              borderRadius: 8,
              padding: "14px 24px",
              fontSize: 14,
            }}
          >
            <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
            </svg>
            Post Comment
          </button>
        </div>
      </div>
    </Card>
  );
}
