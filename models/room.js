const mongoose = require("mongoose");

const SchemaRoom = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "please Enter your Room Name"],
      trim: true,
      maxlength: [150, "please do not enter grather then 150 character"],
    },
    pricePerNight: {
      type: Number,
      required: [true, "please Enter your Room Price"],
      maxlength: [5, "please do not enter grather then 15 character"],
      default: 0.0,
    },
    description: {
      type: String,
      required: [true, "please Enter your Room description"],
    },
    address: {
      type: String,
      required: [true, "please Enter your Room address"],
    },
    capacity: {
      type: Number,
      required: [true, "please Enter your Room capacity"],
      default: 2,
    },
    numOfBeds: {
      type: Number,
      required: [true, "please Enter your Room number Beds"],
      default: 2,
    },
    internet: {
      type: Boolean,
      default: false,
    },
    cleaningRoom: {
      type: Boolean,
      default: false,
    },
    airConditioned: {
      type: Boolean,
      default: false,
    },
    breakfast: {
      type: Boolean,
      default: false,
    },
    petsAllowed: {
      type: Boolean,
      default: false,
    },
    ratings: {
      type: Number,
      default: 0,
    },
    numReviews: {
      type: Number,
      default: 0,
    },
    images: [
      {
        public_id: {
          type: String,
          required: true,
        },
        url: {
          type: String,
          required: true,
        },
      },
    ],
    category: {
      type: String,
      required: [true, "please enter your category"],
      enum: {
        values: ["King", "Single", "Twins"],
        message: "please Select your category",
      },
    },
    reviews: [
      {
        user: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "User",
        },
        name: {
          type: String,
          required: true,
        },
        rating: {
          type: Number,
          required: true,
        },
        comment: {
          type: String,
          required: true,
        },
      },
    ],
    user: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
    },
  },
  {
    timestamps: true,
  },
);

module.exports = mongoose.models.room || mongoose.model("room", SchemaRoom);
