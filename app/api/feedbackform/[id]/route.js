import connectMongoDB from "@/libs/mongodb";
import Feedbackform from "@/models/feedbackform";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { id } = params;
  await connectMongoDB();
  const feedbackform = await Feedbackform.findById(id);
  return NextResponse.json({ feedbackform }, { status: 200 });
}

export async function PUT(request, { params }) {
  const { id } = params;
  const {
    urlSwitch,
    urlValue,
    dateSwitch,
    timeSwitch,
    dateFormatedvalue,
    timeFormatedvalue,
    feedbacktitle,
    feedbackform,
  } = await request.json();
  await connectMongoDB();
  await Feedbackform.findByIdAndUpdate(id, {
    urlSwitch: urlSwitch,
    urlValue: urlValue,
    dateSwitch: dateSwitch,
    timeSwitch: timeSwitch,
    dateFormatedvalue: dateFormatedvalue,
    timeFormatedvalue: timeFormatedvalue,
    feedbacktitle: feedbacktitle,
    feedbackform: feedbackform,
  });
  return NextResponse.json(
    { message: "feedbackform updated" },
    { status: 200 }
  );
}
