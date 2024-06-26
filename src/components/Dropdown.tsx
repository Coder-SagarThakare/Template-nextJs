import { MoreHorizontal } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuPortal,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { DialogDemo } from "./Dialog";
import { useState } from "react";
import { Button } from "./ui/button";

interface DropdownMenuProps {
  setData: Function;
  data: Array<object>;
  ind: number;
}

export function DropdownMenuDemo({ data, setData, ind }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteRow = () => {
    data.splice(ind, 1);

    // set updated array after splice data
    setData([...data]);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button aria-haspopup="true" size="icon" variant="ghost">
          <MoreHorizontal className="h-4 w-4" />
          <span className="sr-only">Toggle menu</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuGroup>
          {/* dialog box for edit data */}
          <DialogDemo
            data={data}
            setData={setData}
            ind={ind}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
            title={"Update"}
          />

          {/* button to delete data */}
          <DropdownMenuItem
            onSelect={(e) => {
              e.preventDefault();
              setIsOpen(true);
            }}
          >
            <span>Edit</span>
          </DropdownMenuItem>
          <DropdownMenuItem onClick={handleDeleteRow}>
            <span>Delete</span>
          </DropdownMenuItem>
        </DropdownMenuGroup>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
