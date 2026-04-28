export type TypographyVariant =
  | "headlineL"
  | "headlineM"
  | "headlineS"
  | "title1"
  | "title2"
  | "title3"
  | "title4"
  | "body1"
  | "body2"
  | "button1"
  | "button2"
  | "button3"
  | "labelL"
  | "labelM"
  | "labelS"
  | "captionL"
  | "captionM"
  | "captionS"

export type TypographyWeight = 'bold' | 'medium' | 'regular'

export const FontWeight = {
  bold: 700,
  medium: 500,
  regular: 400,
}

export const Typography = {
  headlineL: { fontSize: 32, lineHeight: "120%" },
  headlineM: { fontSize: 28, lineHeight: "120%" },
  headlineS: { fontSize: 24, lineHeight: "120%" },
  title1: { fontSize: 24, lineHeight: "120%" },
  title2: { fontSize: 20, lineHeight: "120%" },
  title3: { fontSize: 18, lineHeight: "120%" },
  title4: { fontSize: 16, lineHeight: "120%" },
  body1: { fontSize: 16, lineHeight: "150%" },
  body2: { fontSize: 14, lineHeight: "150%" },
  button1: { fontSize: 16, lineHeight: "24px" },
  button2: { fontSize: 14, lineHeight: "20px" },
  button3: { fontSize: 12, lineHeight: "18px" },
  labelL: { fontSize: 16, lineHeight: "24px" },
  labelM: { fontSize: 14, lineHeight: "20px" },
  labelS: { fontSize: 12, lineHeight: "20px" },
  captionL: { fontSize: 16, lineHeight: "24px" },
  captionM: { fontSize: 14, lineHeight: "20px" },
  captionS: { fontSize: 11, lineHeight: "16px" }
}