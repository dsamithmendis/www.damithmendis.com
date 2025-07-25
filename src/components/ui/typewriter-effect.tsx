"use client";

import { cn } from "@/components/utils/utils";
import { motion, stagger, useAnimate, useInView } from "motion/react";
import { useEffect } from "react";

type MainWord = {
  text: string | string[];
  className?: string;
  isHtml?: boolean;
};

const normalizeWords = (words: MainWord[]): MainWord[] => {
  return words.map((word) =>
    word.isHtml
      ? word
      : {
          ...word,
          text: typeof word.text === "string" ? word.text.split("") : word.text,
        }
  );
};

export const TypewriterEffect = ({
  mainwords,
  className,
  cursorClassName,
}: {
  mainwords: MainWord[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = normalizeWords(mainwords);
  const [scope, animate] = useAnimate();
  const isInView = useInView(scope);

  useEffect(() => {
    if (isInView) {
      animate(
        "span",
        {
          display: "inline-block",
          opacity: 1,
          width: "fit-content",
        },
        {
          duration: 0.3,
          delay: stagger(0.1),
          ease: "easeInOut",
        }
      );
    }
  }, [isInView, animate]);

  const renderWords = () => {
    return (
      <motion.div ref={scope} className="inline">
        {wordsArray.map((word, idx) => {
          if (word.isHtml && word.text === "<br />") {
            return <br key={`br-${idx}`} />;
          }

          return (
            <span key={`word-${idx}`} className="inline-block">
              {(word.text as string[]).map((char, index) => (
                <motion.span
                  initial={{ opacity: 0 }}
                  key={`char-${idx}-${index}`}
                  className={cn(
                    "dark:text-white text-black opacity-0",
                    word.className
                  )}
                >
                  {char}
                </motion.span>
              ))}
              &nbsp;
            </span>
          );
        })}
      </motion.div>
    );
  };

  return (
    <div
      className={cn(
        "text-4xl md:text-5xl font-extrabold text-center",
        className
      )}
    >
      {renderWords()}
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "inline-block rounded-sm w-[4px] h-10 md:h-12 bg-black",
          cursorClassName
        )}
      />
    </div>
  );
};

export const TypewriterEffectSmooth = ({
  mainwords,
  className,
  cursorClassName,
}: {
  mainwords: MainWord[];
  className?: string;
  cursorClassName?: string;
}) => {
  const wordsArray = normalizeWords(mainwords);

  const renderWords = () => {
    return (
      <>
        {wordsArray.map((word, idx) => {
          if (word.isHtml && word.text === "<br />") {
            return <br key={`br-${idx}`} />;
          }

          return (
            <span key={`word-${idx}`} className="inline-block">
              {(word.text as string[]).map((char, index) => (
                <span
                  key={`char-${idx}-${index}`}
                  className={cn("dark:text-white text-black", word.className)}
                >
                  {char}
                </span>
              ))}
              &nbsp;
            </span>
          );
        })}
      </>
    );
  };

  return (
    <div className={cn("flex", className)}>
      <motion.div
        className="overflow-hidden"
        initial={{ width: "0%" }}
        whileInView={{ width: "fit-content" }}
        transition={{
          duration: 2,
          ease: "linear",
          delay: 1,
        }}
      >
        <div
          className="text-4xl md:text-5xl font-extrabold"
          style={{ whiteSpace: "nowrap" }}
        >
          {renderWords()}
        </div>
      </motion.div>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{
          duration: 0.8,
          repeat: Infinity,
          repeatType: "reverse",
        }}
        className={cn(
          "block rounded-sm w-[4px] h-10 md:h-12 bg-white/10",
          cursorClassName
        )}
      />
    </div>
  );
};
