"use client";
import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Label } from "@/components/ui/label";

import Image from "next/image";
import { DialogForm } from "@/components/DialogForm";

function Profile() {
  const imgAddr =
    "data:image/png;base64,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";

  // CONST imgAddr = "https://st.depositphotos.com/46542440/55684/i/450/depositphotos_556847326-stock-illustration-square-face-character-stiff-art.jpg"

  const [user, setUser] = useState({
    firstName: "Sagar",
    lastName: "Thakare",
    phone: "+91 9876543210",
    gender: "Male",
    email: "Sagar@gmail.com",
  });

  const [open, setOpen] = useState(false);

  return (
    <div className="flex justify-center mt-16 ">
      <Card className="w-full ">
        <CardHeader>
          <CardTitle>Profile</CardTitle>
        </CardHeader>
        <CardContent>
          <Card className="border flex p-5 rounded gap-5 m-2">
            <div className="rounded  overflow-hidden h-24 w-24 ">
              <Image
                src={imgAddr}
                width={500}
                height={500}
                className="h-full"
                alt="profile_img"
              />
            </div>

            <div className=" h-full flex flex-col ">
              <span>
                <b>
                  {" "}
                  {user.firstName} {user.lastName}
                </b>
              </span>
              <span>Jr. Software Engineer</span>
              <span>{user.phone}</span>
            </div>
          </Card>

          <Card className="m-2">
            <CardHeader>
              <div className="flex justify-between">
                <CardTitle>Personal Information</CardTitle>
                <DialogForm
                  user={user}
                  setUser={setUser}
                  open={open}
                  setOpen={setOpen}
                />
              </div>
            </CardHeader>
            <CardContent>
              <div className="flex  p-2  py-4">
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Firstname</Label>
                    <span>{user.firstName}</span>
                  </div>
                </div>

                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Lastname</Label>
                    <span>{user.lastName}</span>
                  </div>
                </div>
              </div>

              <div className="flex p-2 py-4">
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Phone</Label>
                    <span>{user.phone}</span>
                  </div>
                </div>

                <div className="grid w-full items-center gap-4 ">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Email</Label>
                    <span>{user.email}</span>
                  </div>
                </div>
              </div>

              <div className="flex p-2 py-4">
                <div className="grid w-full items-center gap-4">
                  <div className="flex flex-col space-y-1.5">
                    <Label htmlFor="name">Gender</Label>
                    <span>{user.gender}</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}

export default Profile;
