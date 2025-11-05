import { NextResponse } from "next/server";
import Product from "@/lib/models/product";
import connectDB from "@/lib/db";

type ApiResponse = {
  success: boolean;
  data: string;
  error?: string;
  validationErrors?: Record<string, string>;
};

export async function POST(request: Request): Promise<Response> {
  const response: ApiResponse = {
    success: false,
    data: "",
  };

  try {
    await connectDB();

    
    let requestBody: { name?: string; image?: string };
    try {
      requestBody = await request.json();
    } catch {
      return NextResponse.json(
        { ...response, error: "Invalid JSON format" },
        { status: 400 }
      );
    }

    
    const validationErrors: Record<string, string> = {};

    if (!requestBody?.name?.trim()) {
      validationErrors.name = "Product name is required";
    } else if (requestBody.name.trim().length < 2) {
      validationErrors.name = "Name must be at least 2 characters";
    }

    if (!requestBody?.image?.trim()) {
      validationErrors.image = "Image path  is required";
    }

    if (Object.keys(validationErrors).length > 0) {
      return NextResponse.json(
        { ...response, error: "Validation failed", validationErrors },
        { status: 400 }
      );
    }

    const product = new Product({
      name: (requestBody.name ?? "").trim(),
      image: (requestBody.image ?? "").trim(),
    });

    await product.save();

    
    return NextResponse.json({ success: true, data: product }, { status: 201 });
  } catch (error: unknown) {
    console.error("API Error:", error);

    // Handle Mongoose validation errors
    if (
      error &&
      typeof error === "object" &&
      (error as { name?: string }).name === "ValidationError"
    ) {
      const validationErrors: Record<string, string> = {};
      const mongooseError = error as {
        errors: Record<string, { message: string }>;
      };
      for (const field in mongooseError.errors) {
        validationErrors[field] = mongooseError.errors[field].message;
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
