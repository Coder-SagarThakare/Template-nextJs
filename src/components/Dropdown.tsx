import {
  CaretSortIcon,
  ChevronDownIcon,
  DotsHorizontalIcon,
} from "@radix-ui/react-icons";

import {
  Cloud,
  CreditCard,
  Github,
  Keyboard,
  LifeBuoy,
  LogOut,
  Mail,
  MessageSquare,
  Plus,
  PlusCircle,
  Settings,
  User,
  UserPlus,
  Users,
} from "lucide-react";
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

interface DropdownMenuProps {
  setData: Function;
  data: Array<object>;
  ind: number;
}

export function DropdownMenuDemo({ data, setData, ind }: DropdownMenuProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleDeleteRow = () => {
    data.splice(ind, 1);
    console.log(data);
    
    // set updated array after splice data
    setData([...data]);
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <DotsHorizontalIcon />
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Operations</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuGroup>
          {/* dialog box for edit data */}
          <DialogDemo
            data={data}
            setData={setData}
            ind={ind}
            isOpen={isOpen}
            setIsOpen={setIsOpen}
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
        <DropdownMenuSeparator />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
