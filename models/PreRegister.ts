import mongoose, { Schema, model, models } from "mongoose";

const PreRegisterSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
  },
  { timestamps: { createdAt: true, updatedAt: false } }
);

export const PreRegister =
  models.PreRegister || model("PreRegister", PreRegisterSchema);
