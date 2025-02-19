const mongoose = require("mongoose");

const OrganizerSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  eventsCreated: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  organizationName: { type: String },
  approvalStatus: { type: Boolean, default: false },
});

module.exports = mongoose.model("Organizer", OrganizerSchema);
