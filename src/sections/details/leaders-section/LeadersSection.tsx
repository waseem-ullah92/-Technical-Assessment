"use client";

import { Card } from "@/shared/ui/card";
import { leadersData } from "@/mock/details.mock";

export default function LeadersSection() {
  return (
    <Card>
      <h3 className="font-semibold text-[#1D3557] text-lg mb-4">Leaders</h3>
      <div className="flex flex-wrap gap-4">
        {leadersData.map((leader) => (
          <div
            key={leader.name}
            className="flex items-center gap-[11px] rounded-[10px] px-4 py-3 shrink-0"
            style={{
              maxWidth: 230,
              width: "100%",
              minHeight: 63,
              backgroundColor: "#F5F8FA",
            }}
          >
            <div
              className="shrink-0 rounded-full flex items-center justify-center font-medium"
              style={{
                width: 47.11,
                height: 47.11,
                backgroundColor: "#DFE2E6",
                color: "#6B7F97",
                fontSize: 14,
              }}
            >
              {leader.avatar}
            </div>
            <div className="flex flex-col justify-center min-w-0 flex-1 gap-0.5">
              <p
                className="align-middle capitalize"
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "22px",
                  color: "#1D3557",
                  letterSpacing: "0%",
                }}
              >
                {leader.name}
              </p>
              <p
                className="align-middle capitalize"
                style={{
                  fontWeight: 500,
                  fontSize: 16,
                  lineHeight: "22px",
                  color: "#8597A8",
                  letterSpacing: "0%",
                }}
              >
                {leader.role}
              </p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
}
