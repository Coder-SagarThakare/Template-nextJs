"use client";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHeader,
  TableRow,
} from "@/(components)/ui/table";
import { data } from "../app/utils/data";
import { Button } from "@/(components)/ui/button";
import TableRowData from "@/(components)/TableRowData";
import { useRef, useState } from "react";
import { Input } from "./ui/input";

export default function Tables() {
  const [index, setIndex] = useState(-1);
  const inputRef = useRef(null);

  const handleClick = (ind: number) => {
    // alert(`Button clicked!${ind}`);
    // inputRef.current.focus();
    setIndex(ind);
  };

  return (
    <Table>
      <TableCaption>A list of your recent Tasks.</TableCaption>
      {/* show table header */}
      <TableHeader>
        <TableRowData />
      </TableHeader>

      {/* show table body */}
      <TableBody>
        {data.map((ele, ind) => (
          <TableRow key={ele.empId} >
            <TableCell>{ele.empId}</TableCell>
            <TableCell className="font-medium">{ele.taskStatus}</TableCell>
            <TableCell>
              {index === ind ? (
                <Input className=" bg-neutral-300" type="email" defaultValue={ele.description} ref={inputRef} />
              ) : (
                ele.description
              )}
            </TableCell>
            <TableCell className="text-right">{ele.payment}</TableCell>
            <TableCell className="text-right ">
              <Button
                className="mr-2 bg-amber-400 text-black hover:bg-amber-500"
                onClick={() => handleClick(ind)}
              >
                Edit
              </Button>
              <Button className="bg-red-500 hover:bg-red-700 ">Delete</Button>
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
  );
}
