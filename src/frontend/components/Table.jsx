import React from 'react';
import '../styles/Table.css';

const Table = (props) => {
    let { data } = props;
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
                        <td key={row.product.name}>{row.product.name}</td>
                        <td key={row.product.price}>{row.product.price}</td>
                        <td key={row.quantity}>{row.quantity}</td>
                        <td>{(row.product.price*row.quantity).toFixed(2)}</td>
                    </tr>
                ))}
            </table>
        </div> 
    );
};

export default Table;