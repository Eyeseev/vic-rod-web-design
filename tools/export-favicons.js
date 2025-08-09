import sharp from "sharp";

const src = "assets/favicon.svg";

try {
  await sharp(src).resize(32, 32).png().toFile("assets/favicon-32x32.png");
  await sharp(src).resize(180, 180).png().toFile("assets/apple-touch-icon.png");
  await sharp(src).resize(192, 192).png().toFile("assets/favicon-192.png");
  await sharp(src).resize(512, 512).png().toFile("assets/favicon-512.png");
  console.log("✅ Favicons exported successfully!");
} catch (error) {
  console.error("❌ Error exporting favicons:", error.message);
  process.exit(1);
}
