import connectMongoDB from "@/libs/mongodb";
import Feedbackform from "@/models/feedbackform";
import { NextResponse } from "next/server";

export async function POST(request) {
  const {
    urlSwitch,
    urlValue,
    dateSwitch,
    timeSwitch,
    dateFormatedvalue,
    timeFormatedvalue,
    submitted,
    viewed,
    feedbacktitle,
    feedbackform,
  } = await request.json();
  await connectMongoDB();
  await Feedbackform.create({
    urlSwitch: urlSwitch,
    urlValue: urlValue,
    dateSwitch: dateSwitch,
    timeSwitch: timeSwitch,
    dateFormatedvalue: dateFormatedvalue,
    timeFormatedvalue: timeFormatedvalue,
    submitted: submitted,
    viewed: viewed,
    feedbacktitle: feedbacktitle,
    feedbackform: feedbackform,
  });

  return NextResponse.json(
    { message: "Feedback form created" },
    { status: 201 }
  );
}
export async function GET(request) {
  await connectMongoDB();
  const feedbackformlist = await Feedbackform.find();
  return NextResponse.json({ feedbackformlist });
}

export async function DELETE(request) {
  const { id } = await request.json();

  await connectMongoDB();
  await Feedbackform.findByIdAndDelete(id);
  return NextResponse.json({ message: "deleted" });
}
