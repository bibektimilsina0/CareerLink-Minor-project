import connectDB from "@/config/dbconfig/database";
import Admin from "@/models/Admin";
import { NextResponse } from "next/server";
import bcrypt from "bcryptjs";

export async function POST(request) {
    try {
        await connectDB();
        const { username, password } = await request.json();
        if (!username || !password) {
            return NextResponse.json({ msg: "Invalid Credentials" });
        }
        const adminExist = await Admin.findOne({ $and: [{ username: username }, { state: "Approved" }] });
        if (!adminExist) {
            return NextResponse.json({ msg: "Admin Doesnot Exist" });
        }
        // checking if password is macthed.
        const isPasswordMatched = await bcrypt.compare(password, adminExist.password);

        if (!isPasswordMatched) {
            return NextResponse.json({ msg: "Invalid Login Creddentials" });
        }
        // creating a JWT 
        const token  = await adminExist.createJWT()
        console.log(token);
        const response = NextResponse.json({ msg: "Successful Login", success: true, token: token }, { status: 200 });

        // setting jwt token in cookies and sending in response object
        response.cookies.set("token", token, { httpOnly: true, secure: true });
        return response;

    } catch (error) {
        if(error instanceof SyntaxError){
            return NextResponse.json({msg:"Invlaid JSON in the request body"});
        }
        console.log(error);
        return NextResponse.json({ msg: "Error, check server for error logs" });
    }
}