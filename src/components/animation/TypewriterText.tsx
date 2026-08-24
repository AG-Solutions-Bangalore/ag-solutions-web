import React, { useState, useEffect } from "react";

interface TypewriterTextProps {
  /** Single string text (for simple single-run typing) */
  text?: string;
  /** Array of words/phrases to rotate through with typing and backspacing */
  words?: string[];
  /** Fixed static prefix rendered before the rotating typed text (e.g. "We provide ") */
  prefix?: string;
  /** Typing speed in ms per character (default: 45) */
  speed?: number;
  /** Deletion speed in ms per character (default: 25) */
  deleteSpeed?: number;
  /** Initial delay before typing starts in ms (default: 300) */
  delay?: number;
  /** Pause time in ms when a word is fully typed before reversing (default: 1500) */
  pauseTime?: number;
  /** Whether to loop indefinitely (default: true) */
  loop?: boolean;
  /** Whether to show blinking cursor */
  showCursor?: boolean;
  /** Extra container className */
  className?: string;
  /** Cursor className */
  cursorClassName?: string;
}

export const TypewriterText: React.FC<TypewriterTextProps> = ({
  text,
  words,
  prefix = "",
  speed = 45,
  deleteSpeed = 25,
  delay = 300,
  pauseTime = 1500,
  loop = true,
  showCursor = false,
  className = "",
  cursorClassName = "text-pink font-bold ml-0.5 animate-pulse",
}) => {
  const wordList = words && words.length > 0 ? words : text ? [text] : [];

  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState(wordList[0] || "");
  const [isDeleting, setIsDeleting] = useState(false);
  const [hasStarted, setHasStarted] = useState(false);

  // Initial delay trigger
  useEffect(() => {
    const startTimer = setTimeout(() => {
      setHasStarted(true);
    }, delay);
    return () => clearTimeout(startTimer);
  }, [delay]);

  useEffect(() => {
    if (!hasStarted || wordList.length === 0) return;

    const currentFullWord = wordList[currentWordIndex];
    let timer: ReturnType<typeof setTimeout>;

    if (!isDeleting) {
      // Typing mode
      if (currentText.length < currentFullWord.length) {
        timer = setTimeout(() => {
          setCurrentText(currentFullWord.slice(0, currentText.length + 1));
        }, speed);
      } else {
        // Word is complete. If only 1 word and not looping, stay.
        if (wordList.length === 1 && !loop) return;

        // Pause then start deleting
        timer = setTimeout(() => {
          setIsDeleting(true);
        }, pauseTime);
      }
    } else {
      // Deleting mode
      if (currentText.length > 0) {
        timer = setTimeout(() => {
          setCurrentText(currentFullWord.slice(0, currentText.length - 1));
        }, deleteSpeed);
      } else {
        // Finished deleting, move to next word
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % wordList.length);
      }
    }

    return () => clearTimeout(timer);
  }, [
    hasStarted,
    currentText,
    isDeleting,
    currentWordIndex,
    wordList,
    speed,
    deleteSpeed,
    pauseTime,
    loop,
  ]);

  return (
    <span className={`inline-flex items-center flex-wrap ${className}`}>
      {prefix && <span className="mr-1.5">{prefix}</span>}
      <span className="font-bold text-teal">
        {currentText}
      </span>
      {showCursor && <span className={cursorClassName}>|</span>}
    </span>
  );
};

export default TypewriterText;
