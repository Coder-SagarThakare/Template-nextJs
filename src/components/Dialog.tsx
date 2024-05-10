import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useRef, useState } from "react";

interface DialogDemoProps {
  data?: Array<object>;
  setData: Function;
  ind?: number ;
  isOpen: boolean;
  setIsOpen: Function;
  title : String
}


export function DialogDemo({
  data,
  setData,
  ind,
  isOpen,
  setIsOpen,
  title
}: DialogDemoProps) {
  const descriptionRef = useRef<HTMLInputElement>(null);
  const taskStatusRef = useRef<HTMLInputElement>(null);
  const paymentRef = useRef<HTMLInputElement>(null);
  const empIdRef = useRef<HTMLInputElement>(null);

  const handleUpdateData = () => {
    const newObj = {
      empId: empIdRef.current?.value,
      description: descriptionRef.current?.value,
      taskStatus: taskStatusRef.current?.value,
      payment: paymentRef.current?.value,
    };

    if (data) {
      data[ind] = newObj;
      setData([...data]);
      setIsOpen(false);

      return;
    }
    if(newObj.empId!== "" && newObj.description!=="" && newObj.payment!==""&& newObj.taskStatus!==""){
      setData((prev)=>[...prev,newObj]);
      setIsOpen(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={() => setIsOpen(false)}>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>{title}</DialogTitle>
          <DialogDescription>
            Make changes to your Task here. Click save when youre done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Emp-ID
            </Label>
            <Input
              id="name"
              defaultValue={(data && data[ind]?.empId) || ""}
              placeholder="emp-id"
              className="col-span-3"
              ref={empIdRef}
            />
          </div>

          {/* update task */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Task
            </Label>
            <Input
              id="name"
              defaultValue={(data && data[ind]?.description) || ""}
              placeholder="description"
              className="col-span-3"
              ref={descriptionRef}
            />
          </div>

          {/* upadte status */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Status
            </Label>
            <Input
              id="name"
              defaultValue={(data && data[ind]?.taskStatus) || ""}
              placeholder="task status"
              className="col-span-3"
              ref={taskStatusRef}
            />
          </div>

          {/* update Amount */}
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Payment
            </Label>
            <Input
              id="username"
              defaultValue={(data && data[ind]?.payment) || ""}
              placeholder="payment"
              className="col-span-3"
              ref={paymentRef}
            />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit" onClick={handleUpdateData}>
            Update changes
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
