"use client";
import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { empData } from "../app/utils/data";
import { Button } from "@/components/ui/button";
import TableRowData from "@/components/TableRowData";
import { useState } from "react";
import { Input } from "./ui/input";
import { DropdownMenuDemo } from "./Dropdown";
import { DialogDemo } from "./Dialog";
import { PaginationDemo } from "./pagination";
import { Search } from "lucide-react";

export default function Tables() {
  const [currentPage, setCurrentPage] = useState(1);

  const [data, setData] = useState(empData);
  const totalPages = Math.floor(data.length / 5 + 1);
  const startAt = (currentPage - 1) * 5;

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
      <div className="flex justify-between p-2 ">
        <div className="relative flex-1 md:grow-0">
          <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
          <Input
            type="search"
            placeholder="Search..."
            className="w-full rounded-lg bg-background pl-8 md:w-[200px] lg:w-[336px]"
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
          {data.slice(startAt, startAt + 5).map((ele, ind) => (
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
        <DialogDemo isOpen={isOpen} setIsOpen={setIsOpen} setData={setData} title={"Add"}/>
      )}
    </div>
  );
}
