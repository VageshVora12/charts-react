import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
const data = [{name: 'Page A', uv: 400, pv: 2400, amt: 2400},{name: 'Page A', uv: 200, pv: 2000, amt: 1400},{name: 'Page A', uv: 800, pv: 4400, amt: 2800},{name: 'Page A', uv: 400, pv: 2400, amt: 2400},];


const Pie=()=>{

    return(
        <>

        <BarChart width={600} height={300} data={data}>
    <XAxis dataKey="name" stroke="#8884d8" />
    <YAxis />
    <Tooltip />
    <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
    <Bar dataKey="uv" fill="#8884d8" barSize={30} />
  </BarChart>
        </>
    )
}

export default Pie;