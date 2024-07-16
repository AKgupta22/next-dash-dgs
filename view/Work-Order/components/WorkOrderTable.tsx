"use client";

import React from "react";
import { Table } from "flowbite-react";

const WorkOrderTable = (): React.JSX.Element => {
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
          <Table.Row className="bg-white dark:border-gray-700 dark:bg-gray-800">
            <Table.Cell className="whitespace-nowrap font-medium text-gray-900 dark:text-white">
              Apple MacBook Pro 17
            </Table.Cell>
            <Table.Cell>XYZ</Table.Cell>
            <Table.Cell>Noida</Table.Cell>
            <Table.Cell>2999 &#8377;</Table.Cell>
            <Table.Cell>17/05/2024</Table.Cell>
            <Table.Cell>
              <p className="font-medium text-cyan-600 hover:underline dark:text-cyan-500">
                Action
              </p>
            </Table.Cell>
          </Table.Row>
        </Table.Body>
      </Table>
    </div>
  );
};

export default WorkOrderTable;
