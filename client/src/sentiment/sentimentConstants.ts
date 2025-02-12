export const MAX_INPUT_LENGTH = 500;

export enum SENTIMENT_RESULT {
  POSITIVE = "POSITIVE",
  NEUTRAL = "NEUTRAL",
  NEGATIVE = "NEGATIVE",
}

export const SENTIMENT_RESULT_DESCRIPTION: Record<SENTIMENT_RESULT, string> = {
  [SENTIMENT_RESULT.POSITIVE]: "😊 Positive sentiment! Great news.",
  [SENTIMENT_RESULT.NEUTRAL]: "😐 Neutral sentiment. No strong emotions.",
  [SENTIMENT_RESULT.NEGATIVE]:
    "☹️ Negative sentiment. Maybe consider changing the tone?",
};

export type Result = { label: SENTIMENT_RESULT, score: number };
