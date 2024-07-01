import mongoose, { Schema, model } from "mongoose";

const videoSchema = new Schema(
  {
    videoFile: {
      type: String,
      required: true,
    },
    thumbnail: {
      type: String,
      required: true,
    },
    owner: {
      type: Schema.Types.ObjectId,
      ref: "users",
    },
    title: { type: String, required: true },
    description: { type: String, required: true },
    duration: { type: number, required: true },
    views: { type: number, default: true },
    isPublished: { type: Boolean, default: true },
  },
  { timestamps: true }
);

export const Video = model("Video", videoSchema);
