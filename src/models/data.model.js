import { Schema, model } from "mongoose";

const dataSchema = new Schema(
  {
    id_registro: {
      type: String,
      unique: true,
      required: true,
    },
    sensor_temperatura: {
      type: Number,
      required: true,
    },
    sensor_humedad: {
      type: Number,
      required: true,
    },
    sensor_proximidad: {
      type: Number,
    },
  },
  {
    versionKey: false, 
    timestamps: true, 
  }
);

export default model("data", dataSchema);
