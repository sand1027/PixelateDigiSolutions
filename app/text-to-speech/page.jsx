"use client";
import { useState, useEffect, useRef } from "react";
import styles from "../styles/PixelTalk.module.css";

export default function TextToSpeechPage() {
  const [text, setText] = useState("");
  const [voice, setVoice] = useState("robot");
  const [addEffects, setAddEffects] = useState(true);
  const [speed, setSpeed] = useState("normal");
  const [status, setStatus] = useState("READY TO CONVERT TEXT TO SPEECH");
  const [isProcessing, setIsProcessing] = useState(false);
  const [voices, setVoices] = useState([]);
  const audioRef = useRef(null);

  // Load available voices for Web Speech API (for playback)
  useEffect(() => {
    const loadVoices = () => {
      const availableVoices = window.speechSynthesis.getVoices();
      setVoices(availableVoices);
    };

    loadVoices();
    window.speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  // Map voice selection to simulated voices (using pitch/rate)
  const getVoiceSettings = () => {
    let pitch = 1;
    let rate = speed === "slow" ? 0.5 : speed === "fast" ? 1.5 : 1;

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

    return { pitch, rate };
  };

  const handleGenerateAudio = () => {
    if (!text.trim()) {
      setStatus("ERROR: PLEASE ENTER SOME TEXT");
      return;
    }

    setStatus("PROCESSING... PLEASE WAIT");
    setIsProcessing(true);

    const utterance = new SpeechSynthesisUtterance(text);
    const { pitch, rate } = getVoiceSettings();
    utterance.pitch = pitch;
    utterance.rate = rate;

    // Select a voice (using the first available voice for simplicity)
    const selectedVoice = voices[0];
    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    utterance.onend = () => {
      setStatus("SUCCESS! AUDIO GENERATED");
      setIsProcessing(false);
    };

    utterance.onerror = (err) => {
      setStatus("ERROR: AUDIO GENERATION FAILED");
      setIsProcessing(false);
      console.error("Speech synthesis error:", err);
    };

    window.speechSynthesis.speak(utterance);
  };

  const handleReset = () => {
    setText("");
    setVoice("robot");
    setAddEffects(true);
    setSpeed("normal");
    setStatus("READY TO CONVERT TEXT TO SPEECH");
    window.speechSynthesis.cancel(); // Stop any ongoing speech
  };

  const handleDownload = async () => {
    if (!text.trim()) {
      setStatus("ERROR: PLEASE ENTER SOME TEXT");
      return;
    }

    setStatus("GENERATING AUDIO FILE...");
    setIsProcessing(true);

    try {
      const response = await fetch("/api/tts", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          text,
          voice,
          speed: speed === "slow" ? 0.5 : speed === "fast" ? 1.5 : 1,
          addEffects,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to generate audio");
      }

      const blob = await response.blob();
      const url = URL.createObjectURL(blob);
      const link = document.createElement("a");
      link.href = url;
      link.download = "pixeltalk-audio.mp3";
      link.click();
      URL.revokeObjectURL(url);

      setStatus("AUDIO DOWNLOADED SUCCESSFULLY");
    } catch (err) {
      setStatus("ERROR: AUDIO DOWNLOAD FAILED");
      console.error("Download error:", err);
    } finally {
      setIsProcessing(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-black bg-opacity-90 mt-10">
      <div className="w-full max-w-[90vw] sm:max-w-2xl">
        {/* Main container */}
        <div className="pixel-card p-4 sm:p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4 sm:mb-6">
            <h1 className="text-xl sm:text-2xl md:text-3xl font-press-start text-pixel-green">
              PIXEL<span className="text-pixel-purple">TALK</span>
            </h1>
            <div className="flex items-center">
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-pixel-yellow border-4 border-black mr-2"></div>
              <div className="w-5 h-5 sm:w-6 sm:h-6 md:w-8 md:h-8 bg-pixel-red border-4 border-black"></div>
            </div>
          </div>

          {/* Speaker visualization */}
          <div className="flex justify-center mb-4 sm:mb-6">
            <div className={`relative ${styles.speakerAnimation}`}>
              <div className="w-16 h-16 sm:w-20 sm:h-20 md:w-24 md:h-24 bg-gray-200 border-4 border-black flex items-center justify-center">
                <div className="flex">
                  <div className="w-1 h-4 sm:w-2 sm:h-6 md:h-8 bg-black mr-1"></div>
                  <div className="w-1 h-5 sm:w-2 sm:h-8 md:h-12 bg-black mr-1"></div>
                  <div className="w-1 h-6 sm:w-2 sm:h-10 md:h-16 bg-black mr-1"></div>
                  <div className="w-1 h-5 sm:w-2 sm:h-8 md:h-12 bg-black mr-1"></div>
                  <div className="w-1 h-4 sm:w-2 sm:h-6 md:h-8 bg-black"></div>
                </div>
              </div>
              <div className="absolute -bottom-2 left-0 right-0 flex justify-center">
                <div className="w-5 sm:w-6 md:w-8 h-2 bg-black"></div>
              </div>
            </div>
          </div>

          {/* Text input */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base font-vt323 text-pixel-yellow mb-2">
              ENTER YOUR TEXT:
            </label>
            <textarea
              id="textInput"
              className="pixel-input w-full h-24 sm:h-32 p-3 bg-white text-sm sm:text-base font-vt323"
              placeholder="Type something here..."
              value={text}
              onChange={(e) => setText(e.target.value)}
            ></textarea>
          </div>

          {/* Voice settings */}
          <div className="mb-4 sm:mb-6">
            <label className="block text-sm sm:text-base font-vt323 text-pixel-yellow mb-2">
              VOICE SETTINGS:
            </label>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              {["robot", "wizard", "knight", "princess"].map((voiceOption) => (
                <div key={voiceOption}>
                  <label className="flex items-center text-xs sm:text-sm font-vt323 text-white">
                    <input
                      type="radio"
                      name="voice"
                      className={styles.pixelRadio}
                      checked={voice === voiceOption}
                      onChange={() => setVoice(voiceOption)}
                    />
                    {voiceOption.toUpperCase()}
                  </label>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <label className="flex items-center text-xs sm:text-sm font-vt323 text-white">
                  <input
                    type="checkbox"
                    className={styles.pixelCheckbox}
                    checked={addEffects}
                    onChange={() => setAddEffects(!addEffects)}
                  />
                  ADD EFFECTS
                </label>
              </div>
              <div className="flex items-center">
                <label className="text-xs sm:text-sm font-vt323 text-white mr-2">
                  SPEED:
                </label>
                <select
                  className="pixel-input text-xs sm:text-sm p-1 bg-white font-vt323"
                  value={speed}
                  onChange={(e) => setSpeed(e.target.value)}
                >
                  <option value="slow">SLOW</option>
                  <option value="normal">NORMAL</option>
                  <option value="fast">FAST</option>
                </select>
              </div>
            </div>
          </div>

          {/* Controls */}
          <div className="flex flex-col sm:flex-row sm:justify-between gap-4">
            <button
              className="pixel-btn bg-pixel-red text-sm sm:text-base"
              onClick={handleReset}
            >
              RESET
            </button>
            <button
              className="pixel-btn bg-pixel-purple text-sm sm:text-base"
              onClick={handleGenerateAudio}
              disabled={isProcessing}
            >
              GENERATE AUDIO
            </button>
            <button
              className="pixel-btn bg-pixel-green text-sm sm:text-base"
              onClick={handleDownload}
              disabled={isProcessing}
            >
              DOWNLOAD
            </button>
          </div>

          {/* Status bar */}
          <div className="mt-4 sm:mt-6 bg-gray-200 p-2 pixel-border text-xs sm:text-sm font-vt323 flex items-center">
            <div className="w-4 h-4 bg-pixel-yellow border-2 border-black mr-2"></div>
            <span>{status}</span>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-4 text-center text-xs sm:text-sm font-vt323 text-white">
          <p>PIXELTALK v1.0 • TEXT TO SPEECH AI • PRESS START</p>
        </div>
      </div>
    </div>
  );
}
