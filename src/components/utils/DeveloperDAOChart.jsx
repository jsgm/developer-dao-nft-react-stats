import React, { Fragment } from 'react'
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';


export function PropChart({title, data, type}) {
    let total = 8000;

    data.sort(function(a, b) {
        return a.count - b.count;
    });
    return (
        <Fragment>
            <div class="col-lg-12">
                <div class="card nft-property mb-4">
                    <div class="card-body">
                        <h2>{title}</h2>
                        <p>There are <b>{data.length}</b> different attributes.</p>
                        <div id="chartContainer">
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart
                            width={500}
                            height={400}
                            data={data}
                            margin={{
                                top: 10,
                                right: 30,
                                left: 0,
                                bottom: 0,
                            }}
                            >
                            <CartesianGrid strokeDasharray="3 3" />
                            <XAxis dataKey="label" />
                            <YAxis />
                            <Tooltip />
                            <Area type="monotone" dataKey="count" stroke="black" fill="#c1c1c1" />
                            </AreaChart>
                        </ResponsiveContainer>
                        </div>
                    </div>
                </div>
            </div>

            <div class="col-lg-12">
                <div class="card nft-property">
                    <div class="card-body">
                        <table class="table">
                            <thead>
                                <tr>
                                    <td>Type</td>
                                    <td>Count</td>
                                    <td>Percentage</td>
                                </tr>
                            </thead>
                            <tbody>
                                {data.map(function(object, index){
                                    return <tr key={index}>
                                        <td>{object.label} {index===0 ? <span id="RarestItem">🔥 Rarest</span> : ''}</td>
                                        <td>{object.count}</td>
                                        <td>{(object.count/total*100).toFixed(4)}%</td>
                                    </tr>
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </Fragment>
    )
}