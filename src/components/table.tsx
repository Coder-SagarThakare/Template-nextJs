"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { empData } from "../app/utils/data";
import { Button } from "@/components/ui/button";
import TableRowData from "@/components/TableRowData";
import { useEffect, useRef, useState } from "react";
import { Input } from "./ui/input";
import { DropdownMenuDemo } from "./Dropdown";
import { DialogDemo } from "./Dialog";
import { PaginationDemo } from "./pagination";

interface filterDataProps {
  empData: Array<object>;
  currentPage: number;
}

export const filterData = (empData: Array<object>, currentPage: number) => {
  return;
};

export default function Tables() {
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState(empData);
  const totalPages = Math.floor(data.length / 5 + 1);

  const [isOpen, setIsOpen] = useState(false);

  const handleSearch = (value: string) => {
    if (value !== "") {
      const newData = data.filter((ele) => {
        return ele.description
          .toLocaleLowerCase()
          .includes(value.toLocaleLowerCase());
      });
      setData(newData);
    } else {
      setData(empData);
    }
  };

  return (
    <div>
      <div className="flex justify-between p-2">
        <div className="flex gap-2">
          <Input
            className="border border-gray-400"
            type="email"
            placeholder="Search Task ..."
            onChange={(e) => handleSearch(e.target.value)}
          />
        </div>

        <Button onClick={() => setIsOpen(true)}>Add +</Button>
      </div>

      <Table>
        {/* show table header */}
        <TableHeader>
          <TableRowData />
        </TableHeader>

        {/* show table body */}
        <TableBody>
          {data
            .slice((currentPage - 1) * 5, (currentPage - 1) * 5 + 5)
            .map((ele, ind) => (
              <TableRow key={ind}>
                <TableCell>{ele.empId}</TableCell>
                <TableCell className="font-medium">{ele.taskStatus}</TableCell>
                <TableCell>
                  <span>{ele.description}</span>
                </TableCell>
                <TableCell className="text-right">{ele.payment}</TableCell>
                <TableCell className=" float-right ">
                  <DropdownMenuDemo data={data} setData={setData} ind={ind} />
                </TableCell>
              </TableRow>
            ))}
        </TableBody>
      </Table>

      <PaginationDemo
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        totalPages={totalPages}
      />
      {isOpen && (
        <DialogDemo isOpen={isOpen} setIsOpen={setIsOpen} setData={setData} />
      )}
    </div>
  );
}
