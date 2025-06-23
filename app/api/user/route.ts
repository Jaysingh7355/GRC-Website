import next from "next";
import connect from "@/lib/db";


import { NextResponse } from "next/server";
import User from "@/lib/models/user";
import { request } from "http";


export const GET = async () => {
  try {
    await connect();
    const users = await User.find({});
    return new NextResponse(JSON.stringify(users), { status: 200 });
  } catch (error: any) {
    console.error("Error fetching users:", error);
    return new NextResponse("Error fetching users  " + error.Message, {
      status: 500,
    });
  } 
};
