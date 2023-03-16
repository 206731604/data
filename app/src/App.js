import React, { Component } from "react";
import "./App.css";
import { Table } from "antd";
import { MinusCircleTwoTone, PlusCircleTwoTone } from "@ant-design/icons";

const data = [
	{
		key: 1,
		name: "John Brown sr.",
		age: 60,
		address: "New York No. 1 Lake Park",
		children: [
			{
				key: 11,
				name: "John Brown",
				age: 42,
				address: "New York No. 2 Lake Park",
			},
			{
				key: 12,
				name: "John Brown jr.",
				age: 30,
				address: "New York No. 3 Lake Park",
				children: [
					{
						key: 121,
						name: "Jimmy Brown",
						age: 16,
						address: "New York No. 3 Lake Park",
					},
				],
			},
			{
				key: 13,
				name: "Jim Green sr.",
				age: 72,
				address: "London No. 1 Lake Park",
				children: [
					{
						key: 131,
						name: "Jim Green",
						age: 42,
						address: "London No. 2 Lake Park",
						children: [
							{
								key: 1311,
								name: "Jim Green jr.",
								age: 25,
								address: "London No. 3 Lake Park",
							},
							{
								key: 1312,
								name: "Jimmy Green sr.",
								age: 18,
								address: "London No. 4 Lake Park",
							},
						],
					},
				],
			},
		],
	},
	{
		key: 2,
		name: "Joe Black",
		age: 32,
		address: "Sydney No. 1 Lake Park",
	},
];
const App = () => {
	const columns = [
		{
			title: "Name",
			dataIndex: "name",
			key: "name",
		},
		{
			title: "Age",
			dataIndex: "age",
			key: "age",
			width: "12%",
		},
		{
			title: "Address",
			dataIndex: "address",
			width: "30%",
			key: "address",
		},
	];
	return (
		<div className="App">
			<Table
				columns={columns}
				rowSelection={{}}
				expandIconAsCell={false}
				expandable={{
					// expandedRowRender: record => (
					// 	<p
					// 		style={{
					// 			margin: 0,
					// 		}}>
					// 		{record.description}
					// 	</p>
					// ),
					expandIconAsCell: false,
					childrenColumnName: "children",
					expandRowByClick: true,
					// expandIcon: ({ expanded, onExpand, record }) => {
					// 	expanded ? (
					// 		<MinusCircleTwoTone
					// 			onClick={e => onExpand(record, e)}
					// 		/>
					// 	) : (
					// 		<PlusCircleTwoTone
					// 			onClick={e => onExpand(record, e)}
					// 		/>
					// 	);
					// },
				}}
				dataSource={data}
			/>
		</div>
	);
};

export default App;
