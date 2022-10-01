import { COLORS } from "./colors";
import { EMOTIONS } from "./data/emotions";

export const GROUPS = [
  {
    name: EMOTIONS.proud,
    color: COLORS.green,
    children: [
      EMOTIONS.engaged,
      EMOTIONS.fascinated,
      EMOTIONS.intrigued,
      EMOTIONS.energetic,
    ],
  },
  {
    name: EMOTIONS.intrigued,
    color: COLORS.green,
    children: [
      EMOTIONS.engaged,
      EMOTIONS.fascinated,
      EMOTIONS.intrigued,
      EMOTIONS.energetic,
    ],
  },
  {
    name: EMOTIONS.intrigued,
    color: COLORS.green,
    children: [
      EMOTIONS.engaged,
      EMOTIONS.fascinated,
      EMOTIONS.intrigued,
      EMOTIONS.energetic,
    ],
  },
];
