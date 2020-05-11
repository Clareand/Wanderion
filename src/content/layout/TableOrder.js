import React from 'react'
import { Table } from 'antd'

function TableOrder({
columns,
data,
className,
header,
footer
}) 
{
    return (
        <Table
            className={className}
            columns={columns}
            dataSource={data}
            bordered
            title={() => 'header'}
            footer={() => 'head'}
        />
    )
}

export default TableOrder
