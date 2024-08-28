import connectMongoDB from "@/libs/mongodb";
import Feedbackform from "@/models/feedbackform";
import { NextResponse } from "next/server";

export async function PUT(request, { params }) {
  const { id } = params;
  const { newTitle: title, newDescription: description } = await request.json();
  await connectMongoDB();
  await Feedbackform.findByIdAndUpdate(id, { title, description });
  return NextResponse.json(
    { message: "feedbackform updated" },
    { status: 200 }
  );
}

// export async function GET(request, { params }) {
//   const { id } = params;
//   await connectMongoDB();
//   const feedbackform = await Feedbackform.findOne({ _id: id });
//   return NextResponse.json({ feedbackform }, { status: 200 });
// }

export async function GET({ params }) {
  const { id } = params;
  await connectMongoDB();
  try {
    const feedbackformlist = await Feedbackform.findById({ _id: id });
    return NextResponse.json({ feedbackformlist });
  } catch (e) {
    return NextResponse.json({ e });
  }
}
