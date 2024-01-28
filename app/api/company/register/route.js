import connectDB from "@/config/database";
import Company from "@/models/Company";
import { NextResponse } from "next/server";
import bcrypt from 'bcryptjs'


export async function POST(request){
    try {
        await connectDB()
        const body=await request.json()
        const {email,companyName, password,confirmPassword}=body
        console.log(email)
    
        if(password!=confirmPassword){
            return NextResponse.json({"message":"password !=confirm password"})
        }
        const companyExist = await Company.findOne({email: email });
        if (companyExist) {
            return NextResponse.json(
                { msg: 'Email  already used' },
                { status: 400 }
            );
        };
        const hashedPassword=await bcrypt.hash(password,10)
        const company =await Company.create({email,password:hashedPassword,companyName})
        if (!company) {
            return NextResponse.json(
                { msg: "Error saving details" },
                { status: 400 }
            );
        }
       
        const emailResponse = await company.verifyEmail();
        console.log("MessageId for emailResponse",emailResponse.messageId);
        return NextResponse.json(
            { msg: "Company Applied for registration and verification link has been sent to the email" },
            { status: 201 }
        );

    } catch (error) {
        return NextResponse.json({msg:"Internal Server Error"},{status:500})
    }
}