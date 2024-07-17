"use client";

import React from "react";
import { Table } from "flowbite-react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/rootReducer";

const WorkOrderTable = (): React.JSX.Element => {
  const workOrderData = useSelector((state: RootState) => state.workOrder);

  return (
    <div className="overflow-x-auto">
      <Table hoverable>
        <Table.Head>
          <Table.HeadCell>Product name</Table.HeadCell>
          <Table.HeadCell>Customer name</Table.HeadCell>
          <Table.HeadCell>City</Table.HeadCell>
          <Table.HeadCell>Price</Table.HeadCell>
          <Table.HeadCell>Order Date</Table.HeadCell>
          <Table.HeadCell>
            <span className="sr-only">Edit</span>
          </Table.HeadCell>
        </Table.Head>
        <Table.Body className="divide-y">
          {workOrderData.map((orderData) => (
            <Table.Row key={orderData.id} className="bg-white dark:border-gray-700 dark:bg-gray-800">
              <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
                {orderData.product_name}
              </Table.Cell>
              <Table.Cell>{orderData.customer_name}</Table.Cell>
              <Table.Cell>{orderData.city}</Table.Cell>
              <Table.Cell>{orderData.price} &#8377;</Table.Cell>
              <Table.Cell>{orderData.order_date}</Table.Cell>
              <Table.Cell>
                <p className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                  Action
                </p>
              </Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>
      </Table>
    </div>
  );
};

export default WorkOrderTable;
