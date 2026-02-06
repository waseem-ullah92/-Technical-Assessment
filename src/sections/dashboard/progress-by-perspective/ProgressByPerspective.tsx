"use client";

import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer, Legend } from "recharts";
import { Card } from "@/shared/ui/card";

const data = [
  { name: "Governance", value: 75, color: "#0f172a" },
  { name: "Technology", value: 90, color: "#475569" },
  { name: "People", value: 65, color: "#94a3b8" },
];

export default function ProgressByPerspective() {
  return (
    <Card>
      <h3 className="font-semibold text-slate-900 mb-4">Progress by Perspective</h3>
      <ResponsiveContainer width="100%" height={240}>
        <PieChart>
          <Pie
            data={data}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            outerRadius={80}
            label={({ name, value }) => `${name}: ${value}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Pie>
          <Tooltip formatter={(value: number) => `${value}%`} />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </Card>
  );
}
