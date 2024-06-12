"use client";

import {
    Bar,
    BarChart,
    Legend,
    ResponsiveContainer,
    Tooltip,
    XAxis,
    YAxis,
    LegendProps,
} from "recharts";

const data = [
    {
        name: "Jan",
        office: 82,
        wfh: 44,
    },
    {
        name: "Feb",
        office: 80,
        wfh: 40,
    },
    {
        name: "Mar",
        office: 83,
        wfh: 42,
    },
    {
        name: "Apr",
        office: 50,
        wfh: 50,
    },
    {
        name: "May",
        office: 40,
        wfh: 60,
    },
    {
        name: "Jun",
        office: 60,
        wfh: 40,
    },
    {
        name: "Jul",
        office: 55,
        wfh: 55,
    },
    {
        name: "Aug",
        office: 49,
        wfh: 61,
    },
    {
        name: "Sep",
        office: 44,
        wfh: 70,
    },
    {
        name: "Oct",
        office: 40,
        wfh: 40,
    },
    {
        name: "Nov",
        office: 50,
        wfh: 50,
    },
    {
        name: "Dec",
        office: 50,
        wfh: 50,
    },
];

interface CustomLegendProps extends LegendProps {
    payload?: Array<{
        value: string;
        color: string;
    }>;
}

export default function WorkLocationTrends() {
    const renderLegend = (props: CustomLegendProps) => {
        const { payload } = props;

        return (
            <ul className="pt-4 pl-16 flex justify-center gap-6">
                {payload?.map((entry, index) => (
                    <li key={`item-${index}`} className="flex items-center">
                        <svg
                            width="14"
                            height="14"
                            viewBox="0 0 32 32"
                            className="mr-2"
                        >
                            <circle fill={entry.color} cx="16" cy="16" r="16" />
                        </svg>
                        <span className="text-sm">
                            {entry.value === "wfh"
                                ? "Work from home"
                                : "Work from office"}
                        </span>
                    </li>
                ))}
            </ul>
        );
    };

    return (
        <ResponsiveContainer height={350} width="100%">
            <BarChart
                data={data}
                className="[&_.recharts-tooltip-cursor]:fill-zinc-200 dark:[&_.recharts-tooltip-cursor]:fill-zinc-800"
            >
                <XAxis dataKey="name" stroke="#888888" fontSize={12} />
                <YAxis stroke="#888888" fontSize={12} />
                <Tooltip
                    separator=": "
                    formatter={(value, name) => {
                        if (name === "wfh") {
                            return [value, "Work from home"];
                        } else if (name === "office") {
                            return [value, "Work from office"];
                        }
                    }}
                    wrapperClassName="!text-sm dark:!bg-black rounded-md dark:!border-border"
                    labelClassName="font-bold"
                />
                <Legend
                    content={(props) =>
                        renderLegend(props as CustomLegendProps)
                    }
                />
                <Bar dataKey="office" stackId={1} fill="#ec4899" />
                <Bar
                    dataKey="wfh"
                    stackId={1}
                    fill="#6b7280"
                    radius={[4, 4, 0, 0]}
                />
            </BarChart>
        </ResponsiveContainer>
    );
}
