import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from "recharts";
import { Helmet } from "react-helmet";

const Statistics = () => {
  // Retrieve data using the loader
  const data = useLoaderData();

  return (
    <>
      <Helmet>
        <title>Stats || Gadget Haven</title>
      </Helmet>
      <div className="bg-[#9538E2] p-10 rounded-lg shadow-lg">
  <div className="max-w-3xl mx-auto text-center">
    <h1 className="text-4xl font-bold text-white mb-4 transition-transform transform hover:scale-105">
      Statistics
    </h1>
    <p className="text-lg text-white mb-6 opacity-90 hover:opacity-100 transition-opacity duration-300">
      Show There Is the Trending Of product's category!!
    </p>
  </div>
</div>

<div className="flex justify-center mt-8">
  <BarChart width={1500} height={500} data={data}>
    <defs>
      <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
        <stop offset="5%" stopColor="#ff8a00" stopOpacity={0.8}/>
        <stop offset="95%" stopColor="#ff2e7d" stopOpacity={0.8}/>
      </linearGradient>
    </defs>
    <CartesianGrid strokeDasharray="3 3" stroke="#cccccc" />
    <XAxis dataKey="title" stroke="#ffffff" />
    <YAxis stroke="#ffffff" />
    <Tooltip 
      contentStyle={{ backgroundColor: "#444444", borderColor: "#aaaaaa" }} 
      itemStyle={{ color: "#ffffff" }} 
      cursor={{ fill: "#333333" }} 
    />
    <Bar 
      dataKey="price" 
      fill="url(#colorPrice)" 
      barSize={35} 
      radius={[10, 10, 0, 0]} 
    />
  </BarChart>
</div>

    </>
  );
  
};

export default Statistics;
