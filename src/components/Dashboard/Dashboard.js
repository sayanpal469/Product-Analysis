import React from 'react';
import { Area, AreaChart, CartesianGrid, Legend, Line, LineChart, Tooltip, XAxis, YAxis } from 'recharts';

const Dashboard = () => {
   const data = [
        {
            "month": "Mar",
            "investment": 100000,
            "sell": 241,
            "revenue": 10401
        },
        {
            "month": "Apr",
            "investment": 200000,
            "sell": 423,
            "revenue": 24500
        },
        {
            "month": "May",
            "investment": 500000,
            "sell": 726,
            "revenue": 67010
        },
        {
            "month": "Jun",
            "investment": 500000,
            "sell": 529,
            "revenue": 40405
        },
        {
            "month": "Jul",
            "investment": 600000,
            "sell": 601,
            "revenue": 50900
        },
        {
            "month": "Aug",
            "investment": 700000,
            "sell": 670,
            "revenue": 61000
        }
    ]
    return (
        <div className='grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 mt-20'>
            <div className='chart-1 px-10 mx-auto'>
                <h1 className='text-center text-xl mb-6'>Monthly Chart</h1>
            <LineChart width={500} height={500} data={data}>
           <Line dataKey={'sell'}></Line>
           <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
           <XAxis dataKey={'month'} />
           <YAxis></YAxis>
           <Tooltip></Tooltip>
           <Legend />
            </LineChart>
            </div>

            <div className='chart-2 px-10 mx-auto'>
            <h1 className='text-center text-xl mb-6'>Monthly Chart</h1>

            <AreaChart width={500}
          height={500}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}>
          <Area type="monotone" dataKey={"investment"} stackId="1" stroke="#8884d8" fill="#8884d8" />
          <Area type="monotone" dataKey={"revenue"} stackId="1" stroke="#82ca9d" fill="#82ca9d" />
<CartesianGrid stroke="#ccc" strokeDasharray="3 3" />
          <XAxis dataKey={"revenue"} /> 
 <YAxis />
 <Tooltip></Tooltip>
        </AreaChart>
            </div>
        </div>
    );
};

export default Dashboard;