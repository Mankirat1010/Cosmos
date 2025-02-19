const mongoose = require("mongoose");

const AdminSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
  managedEvents: [{ type: mongoose.Schema.Types.ObjectId, ref: "Event" }],
  permissions: {
    canApproveOrganizers: { type: Boolean, default: true },
    canManageUsers: { type: Boolean, default: true },
  },
});

module.exports = mongoose.model("Admin", AdminSchema);
