const AttendanceSchema = new mongoose.Schema({
    user: { type: mongoose.Schema.Types.ObjectId, ref: "User", required: true },
    event: { type: mongoose.Schema.Types.ObjectId, ref: "Event", required: true },
    checkInTime: { type: Date, default: Date.now },
    checkOutTime: { type: Date },
    qrCode: { type: String }, // Unique QR for check-in
  });
  
  module.exports = mongoose.model("Attendance", AttendanceSchema);
  