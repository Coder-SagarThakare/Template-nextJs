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
import { useRef, useState } from "react";
import { Input } from "./ui/input";
import { DropdownMenuDemo } from "./Dropdown";
import { DialogDemo } from "./Dialog";

export default function Tables() {
  const [data, setData] = useState(empData);
  const [isOpen, setIsOpen] = useState(false);
  const inputRef = useRef(null);

  const handleSearch = () => {
    const value = inputRef.current.value;

    if (value!=="") {
      const newData = data.filter((ele) => {
        return ele.description.includes(value) && ele;
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
            ref={inputRef}
            onChange={handleSearch}
          />
        </div>

        <Button onClick={() => setIsOpen(true)}>Add Product</Button>
      </div>

      <Table>
        <TableCaption>A list of your recent Tasks.</TableCaption>

        {/* show table header */}
        <TableHeader>
          <TableRowData />
        </TableHeader>

        {/* show table body */}
        <TableBody>
          {data.map((ele, ind) => (
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
        {/* <TableFooter>
        <TableRow>
          <TableCell colSpan={3}>Total</TableCell>
          <TableCell className="text-right">$2,500.00</TableCell>
        </TableRow>
      </TableFooter> */}
      </Table>
      {isOpen && (
        <DialogDemo isOpen={isOpen} setIsOpen={setIsOpen} setData={setData} />
      )}
    </div>
  );
}
