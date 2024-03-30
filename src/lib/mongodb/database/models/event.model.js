import { Schema, model, models } from "mongoose";

const eventSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
  },
  location: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  imageUrl: {
    type: String,
    required: true
  },
  startDate: {
    type: Date,
    default: Date.now
  },
  endDate: {
    type: Date,
    default: Date.now
  },
  price: {
    type: Number,
  },
  isFree: {
    type: Boolean,
    default: false
  },
  url: {
    type: String,
  },
  category: {
    type: Schema.Types.ObjectId,
    ref: "Category"
  },
  organizer: {
    type: Schema.Types.ObjectId,
    ref: "User"
  }
})

const Event = models.Event || model("Event", eventSchema);

export default Event