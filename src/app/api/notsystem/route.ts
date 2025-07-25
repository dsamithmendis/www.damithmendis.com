import { NextResponse } from 'next/server';

export const dynamic = "force-static";
// OR: export const revalidate = 60;

export async function GET() {
  return NextResponse.json({ message: 'Hello from notsystem route!' });
}
