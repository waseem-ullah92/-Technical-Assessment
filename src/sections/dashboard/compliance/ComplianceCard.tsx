"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
  Cell,
} from "recharts";
import { Card } from "@/shared/ui/card";
import { complianceChartData } from "@/mock/dashboard.mock";

export default function ComplianceCard() {
  return (
    <Card>
      <h3 className="font-semibold text-[#1A202C] mb-6">Compliance</h3>
      <div className="w-full min-h-[240px]" style={{ height: 240 }}>
        <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={complianceChartData}
          layout="vertical"
          margin={{ top: 5, right: 20, left: 0, bottom: 5 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#E0E8ED" />
          <XAxis
            type="number"
            domain={[0, 100]}
            tick={{ fontSize: 12, fill: "#6B7280" }}
          />
          <YAxis
            type="category"
            dataKey="name"
            tick={{ fontSize: 12, fill: "#1A202C" }}
            width={90}
          />
          <Tooltip
            formatter={(value: number) => [`${value}%`, "Compliance"]}
            contentStyle={{
              backgroundColor: "#fff",
              border: "1px solid #E0E8ED",
              borderRadius: "8px",
            }}
          />
          <Bar dataKey="value" radius={[0, 4, 4, 0]}>
            {complianceChartData.map((entry, index) => (
              <Cell key={index} fill={entry.fill} />
            ))}
          </Bar>
        </BarChart>
      </ResponsiveContainer>
      </div>
    </Card>
  );
}
