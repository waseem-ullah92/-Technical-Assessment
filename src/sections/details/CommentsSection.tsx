"use client";

import { useState } from "react";
import { Card } from "@/shared/ui/card";
import { commentsData } from "@/mock/details.mock";

export default function CommentsSection() {
  const [newComment, setNewComment] = useState("");

  return (
    <Card className="h-full">
      <h3 className="font-semibold text-slate-900 mb-4">Comments</h3>
      <div className="space-y-4">
        {commentsData.map((comment) => (
          <div key={comment.id} className="flex gap-3">
            <div className="flex-shrink-0 w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-sm font-medium text-slate-600">
              {comment.initials}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2 flex-wrap">
                <span className="font-medium text-slate-900">{comment.author}</span>
                <span className="text-xs text-slate-500">{comment.date}</span>
              </div>
              <p className="text-sm text-slate-600 mt-1">{comment.text}</p>
            </div>
          </div>
        ))}
        <div className="pt-4 border-t">
          <textarea
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full px-3 py-2 border border-slate-200 rounded-lg text-sm resize-none focus:outline-none focus:ring-2 focus:ring-slate-300 focus:border-transparent min-h-[80px]"
            rows={3}
          />
          <button
            type="button"
            className="mt-3 inline-flex items-center gap-2 px-4 py-2 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-colors"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z" />
            </svg>
            Post Comment
          </button>
        </div>
      </div>
    </Card>
  );
}
