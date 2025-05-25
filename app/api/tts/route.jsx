import { NextResponse } from "next/server";
import gTTS from "gtts";

export async function POST(req) {
  try {
    const { text, voice, speed, addEffects } = await req.json();

    if (!text) {
      return NextResponse.json({ error: "Text is required" }, { status: 400 });
    }

    // Map voice and settings to gTTS parameters
    let lang = "en"; // Default to English
    let pitch = 1;

    switch (voice) {
      case "robot":
        pitch = addEffects ? 0.8 : 1;
        break;
      case "wizard":
        pitch = addEffects ? 0.6 : 1;
        break;
      case "knight":
        pitch = addEffects ? 0.5 : 1;
        break;
      case "princess":
        pitch = addEffects ? 1.5 : 1;
        break;
      default:
        pitch = 1;
    }

    // gTTS doesn't support pitch directly, so we'll adjust speed
    const tts = new gTTS(text, lang);
    tts.speed = speed;

    // Create a buffer from the TTS output
    const buffer = await new Promise((resolve, reject) => {
      const chunks = [];
      tts
        .stream()
        .on("data", (chunk) => chunks.push(chunk))
        .on("end", () => resolve(Buffer.concat(chunks)))
        .on("error", (err) => reject(err));
    });

    return new NextResponse(buffer, {
      status: 200,
      headers: {
        "Content-Type": "audio/mpeg",
        "Content-Disposition": "attachment; filename=pixeltalk-audio.mp3",
      },
    });
  } catch (err) {
    console.error("TTS error:", err);
    return NextResponse.json(
      { error: "Failed to generate audio" },
      { status: 500 }
    );
  }
}
