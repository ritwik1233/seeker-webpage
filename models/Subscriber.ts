import mongoose, { Schema, model, models } from "mongoose";

const SubscriberSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const Subscriber =
  models.Subscriber || model("Subscriber", SubscriberSchema);
