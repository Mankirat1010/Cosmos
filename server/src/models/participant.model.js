const mongoose = require("mongoose");

const ParticipantSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  eventsRegistered: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  eventsAttended: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  points: { type: Number, default: 0 },
});

module.exports = mongoose.model("Participant", ParticipantSchema);
