import mongoose, { Schema, Model, Document } from "mongoose";

// 1. Stronger typing for status values
type InquiryStatus = "pending" | "resolved" | "archived"; // Added archive option for future use

// 2. Enhanced interface with additional metadata
interface IInquiry extends Document {
  name: string;
  email: string;
  phone: string;
  message: string;
  status: InquiryStatus;
  source?: string; // Track where inquiry came from (website, phone, etc.)
  ipAddress?: string; // For analytics
  resolvedAt?: Date; // Track resolution time
  createdAt?: Date; // Automatically added by Mongoose timestamps
}

// 3. Schema with validation and indexes
const InquirySchema = new Schema<IInquiry>(
  {
    name: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
      maxlength: [100, "Name cannot exceed 100 characters"],
    },
    email: {
      type: String,
      required: [true, "Email is required"],
      trim: true,
      lowercase: true,
      match: [
        /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/,
        "Please fill a valid email address",
      ],
    },
    phone: {
      type: String,
      required: [true, "Phone number is required"],
      trim: true,
    },
    message: {
      type: String,
      required: [true, "Message is required"],
      trim: true,
      minlength: [10, "Message should be at least 10 characters long"],
      maxlength: [2000, "Message cannot exceed 2000 characters"],
    },
    status: {
      type: String,
      enum: ["pending", "resolved", "archived"],
      default: "pending",
      index: true, 
    },
    source: {
      type: String,
      enum: ["website", "phone", "email", "walk-in"],
      default: "website",
    },
    ipAddress: String,
    resolvedAt: Date,
  },
  {
    timestamps: true,
    toJSON: { virtuals: true }, 
    toObject: { virtuals: true },
  }
);

// 4. Add virtual for response time (in hours)
InquirySchema.virtual("responseTime").get(function (this: IInquiry) {
  if (this.status === "resolved" && this.resolvedAt && this.createdAt) {
    return Math.round(
      (this.resolvedAt.getTime() - this.createdAt.getTime()) / (1000 * 60 * 60)
    );
  }
  return null;
});

// 5. Pre-save hook for status changes
InquirySchema.pre<IInquiry>("save", function (next) {
  if (
    this.isModified("status") &&
    this.status === "resolved" &&
    !this.resolvedAt
  ) {
    this.resolvedAt = new Date();
  }
  next();
});

// 6. Static methods for common queries
InquirySchema.statics = {
  async findPending(): Promise<IInquiry[]> {
    return this.find({ status: "pending" }).sort({ createdAt: 1 }).exec();
  },
  async findResolved(): Promise<IInquiry[]> {
    return this.find({ status: "resolved" }).sort({ resolvedAt: -1 }).exec();
  },
};

// 7. Type for the model with statics
interface IInquiryModel extends Model<IInquiry> {
  findPending(): Promise<IInquiry[]>;
  findResolved(): Promise<IInquiry[]>;
}

// 8. Export with proper typing
const Inquiry: IInquiryModel =
  (mongoose.models.Inquiry as IInquiryModel) ||
  mongoose.model<IInquiry, IInquiryModel>("Inquiry", InquirySchema);

export default Inquiry;
