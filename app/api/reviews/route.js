import { NextResponse } from "next/server";
import pool from "@/app/libs/mysql"

export async function GET() {
    try {
        const db = await pool;
        const query = 'select * from reviews'
        const [rows] = await db.query(query)

        return NextResponse.json(rows)
    } catch (error) {
        return NextResponse.json({
            error: error
        }, {status:500 })
    }
}