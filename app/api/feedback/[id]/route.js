import connectMongoDB from "@/libs/mongodb";
import Feedback from "@/models/feedback";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const feedback = await Feedback.find({ formid: id });
  return NextResponse.json([feedback], { status: 200 });
}
