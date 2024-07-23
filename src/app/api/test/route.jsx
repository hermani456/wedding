import { NextResponse } from "next/server";
import pool from "../../../utils/db";

export const GET = async () => {
  try {
    const data = await pool.query("SELECT * FROM invitationCodes");
    return NextResponse.json(data.rows);
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
};
