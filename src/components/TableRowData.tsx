import React from "react";
import { TableHead, TableRow } from "@/components/ui/table";

function TableRowData() {
  return (
    <TableRow>
      <TableHead className="w-[100px]">Emp-ID</TableHead>
      <TableHead>Status</TableHead>
      <TableHead>Task</TableHead>
      <TableHead className="text-right">Amount</TableHead>
      <TableHead className="text-right">Action</TableHead>
    </TableRow>
  );
}

export default TableRowData;
