'use client';

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis } from 'recharts';

const data = [
  {
    name: 'Jan',
    total: Math.random() * 1000,
  },
  {
    name: 'Feb',
    total: Math.random() * 1000,
  },
  {
    name: 'Mar',
    total: Math.random() * 1000,
  },
  {
    name: 'Apr',
    total: Math.random() * 1000,
  },
  {
    name: 'May',
    total: Math.random() * 1000,
  },
  {
    name: 'Jun',
    total: Math.random() * 1000,
  },
  {
    name: 'Jul',
    total: Math.random() * 1000,
  },
  {
    name: 'Aug',
    total: Math.random() * 1000,
  },
  {
    name: 'Sep',
    total: Math.random() * 1000,
  },
  {
    name: 'Oct',
    total: Math.random() * 1000,
  },
  {
    name: 'Nov',
    total: Math.random() * 1000,
  },
  {
    name: 'Dec',
    total: Math.random() * 1000,
  },
];

export function Overview() {
  const error = console.error;
  console.error = (...args: any[]) => {
    if (/defaultProps/.test(args[0])) return;
    error(...args);
  };
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey="name"
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) => `$${value}`}
        />
        <Bar
          dataKey="total"
          fill="currentColor"
          radius={[4, 4, 0, 0]}
          className="fill-primary"
        />
      </BarChart>
    </ResponsiveContainer>
  );
}
