import bcrypt from "bcryptjs";

import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { email, name, password } = body;

    if (!email || !name || !password) {
      return new NextResponse("Some Missing Info!", { status: 400 });
    }

    const hashPassword = await bcrypt.hash(password, 12);

    const isUserExists = await prisma.user.findUnique({
      where: {
        email: email,
      },
    });
    if (isUserExists)
      return new NextResponse("This Email Already Exists!", { status: 400 });

    const user = await prisma.user.create({
      data: {
        email,
        name,
        hashPassword,
      },
    });

    return NextResponse.json(user);
  } catch (error: any) {
    console.log(error, "REGISTRATION_ERROR");
    return new NextResponse("Internal Error", { status: 500 });
  }
}
