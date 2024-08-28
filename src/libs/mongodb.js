import moongoose from "mongoose";
const connectMongoDB = async () => {
  try {
    await moongoose.connect(
      "mongodb+srv://amrareone:todo@cluster0.jejiozy.mongodb.net/feedbackform?retryWrites=true&w=majority&appName=Cluster0"
    );
    console.log("db connected");
  } catch (err) {
    console.log("db not connected");
  }
};

export default connectMongoDB;
