import connectDB from "@/lib/connectDB";

export const POST = async (request) => {
  try {
    const db = await connectDB();
    const userCollection = db.collection("users");
    const newUser = await request.json();
    const res = await userCollection.insertOne(newUser);
    return Response.json({ message: "New User Created" });
  } catch (error) {
    return Response.json({ message: "Something Went Wrong" });
  }
};
