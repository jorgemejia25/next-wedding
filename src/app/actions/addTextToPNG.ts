"use server";

import { createCanvas, loadImage } from "canvas";

import fs from "fs";
import path from "path";

const addTextToPNG = async (text: string) => {
  try {
    const baseImagePath = "base.png";
    const outputPath = path.join("/tmp", `${text}.png`);

    const image = await loadImage(baseImagePath);
    const canvas = createCanvas(image.width, image.height);
    const ctx = canvas.getContext("2d");

    ctx.drawImage(image, 0, 0, image.width, image.height);

    ctx.font = "bold 48px Arial";
    ctx.fillStyle = "black";
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillText(text, canvas.width / 2, canvas.height / 2 + 50);

    const buffer = canvas.toBuffer("image/png");
    fs.writeFileSync(outputPath, new Uint8Array(buffer));

    return `/tmp/${text}.png`;
  } catch (error) {
    console.error("Error al modificar PNG:", error);
    throw error;
  }
};

export default addTextToPNG;
