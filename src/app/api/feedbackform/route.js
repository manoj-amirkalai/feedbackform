import connectMongoDB from "@/libs/mongodb";
import Feedback from "@/models/feedback";
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
export async function PUT(request) {
  const {
    feedbackforminfoId,
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
  await Feedbackform.findByIdAndUpdate(feedbackforminfoId, {
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
    { message: "feedbackform updated" },
    { status: 200 }
  );
}
export async function GET(request) {
  await connectMongoDB();
  const feedbackformlist = await Feedbackform.find();
  return NextResponse.json({ feedbackformlist });
}

export async function DELETE(request) {
  const { id, type } = await request.json();
  if (type === "feedbackdata") {
    console.log(id);
    await connectMongoDB();
    const feedback = await Feedback.find({ formid: id });
    return NextResponse.json([feedback], { status: 200 });
  }
  if (type === "singledata") {
    console.log(id);
    await connectMongoDB();
    const feedbackform = await Feedbackform.findById({ _id: id });
    return NextResponse.json({ feedbackform }, { status: 200 });
  }
  if (type === "delete") {
    await connectMongoDB();
    await Feedbackform.findByIdAndDelete(id);
    return NextResponse.json({ message: "deleted" });
  }
}
