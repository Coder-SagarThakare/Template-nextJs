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
  const [isOpen,setIsOpen] = useState(false);
  const inputRef = useRef(null);

  return (
    <div>
      <Button className="float-right" onClick={()=>setIsOpen(true)}>Add Product</Button>
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
      {isOpen && <DialogDemo isOpen={isOpen} setIsOpen={setIsOpen} setData={setData}/> }
    </div>
  );
}
