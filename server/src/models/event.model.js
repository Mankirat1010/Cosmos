const EventSchema = new mongoose.Schema({
    title: { type: String, required: true },
    description: { type: String, required: true },
    category: { type: String, enum: ["technical", "cultural", "sports", "academic"], required: true },
    organizer: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    venue: { type: String, required: true },
    date: { type: Date, required: true },
    time: { type: String, required: true },
    capacity: { type: Number, required: true }, // Max attendees allowed
    registeredUsers: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users who registered
    attendees: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }], // Users who attended
    status: { type: String, enum: ["upcoming", "ongoing", "completed"], default: "upcoming" },
    resources: [{ type: mongoose.Schema.Types.ObjectId, ref: "Resource" }],
    feedback: [{ type: mongoose.Schema.Types.ObjectId, ref: "Feedback" }],
    createdAt: { type: Date, default: Date.now }
  });
  
  module.exports = mongoose.model("Event", EventSchema);
  