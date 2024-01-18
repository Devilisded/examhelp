import { NextResponse } from "next/server";
import { transporter} from "../nodemailer";

export async function POST(req){
    const tempData=await req.json();
    const data={
        from: '"! Exam Help ! "  <mayank.calinfo7@gmail.com>',
        to: "sainimayank7603@gmail.com",
        subject:"New Project has arrived .. get back to work",
        html:`Person Name is ${tempData.name} <br> Person Email is ${tempData.email} <br> Person Mobile Number is ${tempData.num} <br> Project Details are ${tempData.detail}`
    }
    transporter.sendMail(data,(err)=>{
        if (err)return NextResponse.json({status:500},{error : err})    
        return NextResponse.json({message:"Data has been mailed by nodemailer "})
    });
    return NextResponse.json({message:"Data has been sent !"})
}