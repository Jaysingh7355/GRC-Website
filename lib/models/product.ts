import mongoose, { Schema, model, Document } from "mongoose";

interface IProduct extends Document {
  name: string;
  image: string;
  createdAt: Date;
  updatedAt: Date;
}

const imagePathValidator = (value: string) => {
  // Allow:
  // 1. HTTP URLs (http://, https://)
  // 2. Absolute paths (/images/...)
  // 3. Relative paths (./images/...)
  return /^(https?:\/\/)/i.test(value) || /^(\/|\.\/)images\//i.test(value);
};

const productSchema = new Schema(
  {
    name: {
      type: String,
      required: [true, "Product name is required"],
      trim: true,
      minlength: [2, "Product name must be at least 2 characters"],
      maxlength: [100, "Product name cannot exceed 100 characters"],
    },
    image: {
      type: String,
      required: [true, "Product image is required"],
      validate: {
        validator: imagePathValidator,
        message: "Image must be a valid URL or path starting with /images/",
      },
    },
  },
  {
    timestamps: true,
  }
);

// Prevent model overwrite in hot-reload environments
if (mongoose.models.Product) {
  delete mongoose.models.Product;
}

export default model<IProduct>("Product", productSchema);
