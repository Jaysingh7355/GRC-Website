import connect from "@/lib/db";
import Inquiry from "@/lib/models/Inquiry";
import { NextResponse } from "next/server";

export const GET = async (req: Request) => {
  try {
    await connect();

    // Parse query parameters
    const { searchParams } = new URL(req.url);
    const status = searchParams.get("status") as
      | "pending"
      | "resolved"
      | "archived"
      | null;
    const page = parseInt(searchParams.get("page") || "1");
    const limit = parseInt(searchParams.get("limit") || "10");
    const sort = searchParams.get("sort") || "-createdAt";

    // Build query
    const query: any = {};
    if (status) query.status = status;

    // Get paginated results
    const inquiries = await Inquiry.find(query)
      .sort(sort)
      .skip((page - 1) * limit)
      .limit(limit)
      .lean();

    // Get total count for pagination
    const total = await Inquiry.countDocuments(query);

    return NextResponse.json({
      success: true,
      data: inquiries,
      pagination: {
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
      },
    });
  } catch (error: unknown) {
    console.error("Error fetching inquiries:", error);

    let errorMessage = "Error fetching inquiries";
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
};

export const POST = async (req: Request) => {
  try {
    // Parse the request body
    const body = await req.json();

    // Validate required fields
    if (!body.name || !body.email || !body.phone || !body.message) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    await connect();

    // Create and save inquiry
    const inquiry = new Inquiry({
      name: body.name,
      email: body.email,
      phone: body.phone,
      message: body.message,
      source: body.source || "website",
      ipAddress:
        req.headers.get("x-forwarded-for") || req.headers.get("x-real-ip"),
    });

    await inquiry.save();

    return NextResponse.json(
      {
        message: "Inquiry submitted successfully",
        data: inquiry,
      },
      { status: 201 }
    );
  } catch (error: unknown) {
    console.error("Error submitting inquiry:", error);

    let errorMessage = "Error submitting inquiry";
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;

      // Handle duplicate key errors
      if (error.message.includes("duplicate key error")) {
        return NextResponse.json(
          { error: "This email has already submitted an inquiry" },
          { status: 409 }
        );
      }
    }

    return NextResponse.json({ error: errorMessage }, { status: 500 });
  }
};

export const DELETE = async (req: Request) => {
  try {
    await connect();

    // Get inquiry ID from URL params
    const { searchParams } = new URL(req.url);
    const id = searchParams.get("id");

    // Validate ID parameter
    if (!id) {
      return NextResponse.json(
        { success: false, error: "Inquiry ID is required" },
        { status: 400 }
      );
    }

    // Check if inquiry exists
    const existingInquiry = await Inquiry.findById(id);
    if (!existingInquiry) {
      return NextResponse.json(
        { success: false, error: "Inquiry not found" },
        { status: 404 }
      );
    }

    // Soft delete (recommended approach)
    const deletedInquiry = await Inquiry.findByIdAndUpdate(
      id,
      { status: "archived" }, // Instead of actual deletion
      { new: true }
    );

    // For hard delete (uncomment if preferred):
    // const deletedInquiry = await Inquiry.findByIdAndDelete(id);

    return NextResponse.json({
      success: true,
      message: "Inquiry deleted successfully",
      data: deletedInquiry,
    });
  } catch (error: unknown) {
    console.error("Error deleting inquiry:", error);

    let errorMessage = "Error deleting inquiry";
    if (error instanceof Error) {
      errorMessage += `: ${error.message}`;

      // Handle invalid ObjectId format
      if (error.message.includes("Cast to ObjectId failed")) {
        return NextResponse.json(
          { success: false, error: "Invalid inquiry ID format" },
          { status: 400 }
        );
      }
    }

    return NextResponse.json(
      { success: false, error: errorMessage },
      { status: 500 }
    );
  }
};
