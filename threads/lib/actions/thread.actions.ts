"use server";

import { revalidatePath } from "next/cache";
import Thread from "../models/Thread.model";
import { connectToDB } from "../mongoose";
import User from "../models/user.model";

interface Params {
  text: string;
  author: string;
  comunityId: string | null;
  path: string;
}

export async function createThread({ text, author, comunityId, path }: Params) {
  try {
    connectToDB();

    const createThread = await Thread.create({
      text,
      author,
      community: null,
    });
    //Update user model
    await User.findByIdAndUpdate(author, {
      $push: { threads: createThread._id },
    });
    revalidatePath(path);
  } catch (error: any) {
    throw new Error(`Failed to create Thread user: ${error.message}`);
  }
}
