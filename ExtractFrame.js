// extractFrames.js
import ffmpeg from "fluent-ffmpeg";
import ffmpegPath from "ffmpeg-static";
import { join, dirname } from "path";
import { existsSync, mkdirSync } from "fs";
import { fileURLToPath } from "url";

// Fix __dirname for ESM
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

// Set the path for ffmpeg binary
ffmpeg.setFfmpegPath(ffmpegPath);

// Paths
const videoPath = join(__dirname, "public/particals.mp4");
const framesDir = join(__dirname, "public/frames");

// Create frames directory if it doesn't exist
if (!existsSync(framesDir)) {
  mkdirSync(framesDir);
}

// Extract frames
ffmpeg(videoPath)
  .outputOptions(["-vf fps=30"])
  .output(join(framesDir, "frame_%04d.png"))
  .on("end", () => console.log("Frames extracted successfully!"))
  .on("error", (err) => console.error("Error: ", err))
  .run();
