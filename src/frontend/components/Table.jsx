import React from 'react';
import '../styles/Table.css';

const Table = (props) => {
    let { data } = props;
    console.log(data)
    return (
        <div className='Table-main'>
            <h2>Order Summary</h2>
            <table>
                <tr>
                    <th>Product</th>
                    <th>Unit Price</th>
                    <th>Units</th>
                    <th>Total Price</th>
                </tr>
                {data.map(row => ( 
                    <tr>
                        <td key={row.name}>{row.name}</td>
                        <td key={row.id}>{row.id}</td>
                        <td key={row.price}>{row.price}</td>
                        <td>2564</td>
                    </tr>
                ))}
            </table>
        </div> 
    );
};

export default Table;