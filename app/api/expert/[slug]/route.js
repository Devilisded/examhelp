import { NextRequest, NextResponse } from "next/server";
import pool from "@/app/libs/mysql"
import { useParams } from 'next/navigation'


export async function GET(req,{params}) {

    try {
        const db = await pool;
        const query = 'select * from experts where id = ?' 
        const[rows] = await db.query(query, [params.slug])
        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, {status:500 })
    }
    console.log(params.slug);
    return NextResponse.json(params.slug);
}

