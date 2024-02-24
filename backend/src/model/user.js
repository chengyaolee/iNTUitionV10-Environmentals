
import mongoose, { Schema } from "mongoose";

const dataSchema = new mongoose.Schema({
  userName: {
    required: true,
    type: String,
  },
  userEmail: {
    required: true,
    type: String,
  },
  totalEnvironmentalsLevel: {
    type: Number,
    default: 0,
  },
  profilePictureUrl: {
    type: String,
    default: "",
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
  legendaries: {
    type: Number,
    default: 0,
  },
  collections: {
    type: Array,
    default: [
      {environmentalDefaultId: 1, count: 0},
      {environmentalDefaultId: 2, count: 0},
      {environmentalDefaultId: 3, count: 0},
      {environmentalDefaultId: 4, count: 0},
      {environmentalDefaultId: 5, count: 0},
      {environmentalDefaultId: 6, count: 0},
      {environmentalDefaultId: 7, count: 0},
      {environmentalDefaultId: 8, count: 0},
      {environmentalDefaultId: 9, count: 0},
      {environmentalDefaultId: 10, count: 0},
      {environmentalDefaultId: 11, count: 0},
      {environmentalDefaultId: 12, count: 0},
      {environmentalDefaultId: 13, count: 0},
      {environmentalDefaultId: 14, count: 0},
      {environmentalDefaultId: 15, count: 0},
      {environmentalDefaultId: 16, count: 0},
      {environmentalDefaultId: 17, count: 0},
      {environmentalDefaultId: 18, count: 0},
      {environmentalDefaultId: 19, count: 0},
      {environmentalDefaultId: 20, count: 0},
    ],
  },
});

const User = mongoose.model("User", dataSchema);

export { User };
