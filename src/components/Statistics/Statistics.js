import React from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';

const Statistics = () => {
    const loadData = useLoaderData();
    const { data } = loadData;
    console.log(data);

    return (
        <div>
            <h2 className='mt-5 text-2xl font-bold text-accent'>Questions statistics of availabe Topics</h2>
            <div className='w-3/4 mx-auto my-8'>
                <BarChart width={600} height={350} data={data}>
                    <XAxis
                        dataKey="name"
                        tick={{ fill: "#C149AD" }}
                        tickLine={{ stroke: '#C149AD' }}
                    />
                    <YAxis
                        tick={{ fill: "#C149AD" }}
                        stroke="#C149AD"
                    />
                    <Tooltip
                        cursor={{ fill: "#B2EBF2" }}
                    />
                    <Bar
                        dataKey="total"
                        fill="#4DD0E1"
                        barSize={70} />
                </BarChart>
            </div>



        </div>
    );
};

export default Statistics;