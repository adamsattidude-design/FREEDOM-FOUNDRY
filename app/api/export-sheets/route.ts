import { NextResponse } from 'next/server';
export async function POST(){return NextResponse.json({ok:true,mode:'placeholder',message:'Google Sheets backup placeholder ready. Set GOOGLE_SHEET_ID and credentials to enable live append.'})}
