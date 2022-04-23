export const WEEKDAY = ['일', '월', '화', '수', '목', '금', '토'] as const;
export type DayType = keyof typeof WEEKDAY;
