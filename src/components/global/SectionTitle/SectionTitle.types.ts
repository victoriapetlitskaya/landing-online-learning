// Interfaces and types from component SectionTitle

// Component Props
export interface SectionTitleProps {
  title: string;
  color?: TitleColor;
  underlined?: boolean;
}

type TitleColor = "primary" | "secondary";
