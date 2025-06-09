
import { NextResponse } from "next/server";
import Product from '@/lib/models/product'
import connectDB from "@/lib/db";

type ApiResponse = {
  success: boolean;
  data?: any;
  error?: string;
  validationErrors?: Record<string, string>;
};

export async function POST(request: Request) {
  const response: ApiResponse = { success: false };

  try {
    // 1. Connect to database
    await connectDB();

    // 2. Parse and validate request body
    let requestBody;
    try {
      requestBody = await request.json();
    } catch (e) {
      return NextResponse.json(
        { ...response, error: "Invalid JSON format" },
        { status: 400 }
      );
    }

    // 3. Validate required fields
    const validationErrors: Record<string, string> = {};

    if (!requestBody?.name?.trim()) {
      validationErrors.name = "Product name is required";
    } else if (requestBody.name.trim().length < 2) {
      validationErrors.name = "Name must be at least 2 characters";
    }

    if (!requestBody?.image?.trim()) {
      validationErrors.image = "Image path is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { ...response, error: "Validation failed", validationErrors },
        { status: 400 }
      );
    }

    // 4. Create and save product
    const product = new Product({
      name: requestBody.name.trim(),
      image: requestBody.image.trim(),
    });

    await product.save();

    // 5. Return successful response
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error: any) {
    console.error("API Error:", error);

    // Handle Mongoose validation errors
    if (error.name === "ValidationError") {
      const validationErrors: Record<string, string> = {};
      for (const field in error.errors) {
        validationErrors[field] = error.errors[field].message;
      }
      return NextResponse.json(
        { ...response, error: "Validation failed", validationErrors },
        { status: 400 }
      );
    }

    // Generic server error
    return NextResponse.json(
      { ...response, error: "Internal server error" },
      { status: 500 }
    );
  }
}
