export type Theme = {
  bg: string;
  card: string;
  cardSoft: string;
  text: string;
  subText: string;
  border: string;
  accent: string;
  accentText: string;
  inputBg: string;
};

export const LIGHT_THEME: Theme = {
  bg: '#F4F4F6',
  card: '#FFFFFF',
  cardSoft: '#F7F7F9',
  text: '#2B2B2B',
  subText: '#667085',
  border: '#D9D9DE',
  accent: '#111111',
  accentText: '#FFFFFF',
  inputBg: '#FFFFFF',
};

export const DARK_THEME: Theme = {
  bg: '#0F172A',
  card: '#1E293B',
  cardSoft: '#334155',
  text: '#F8FAFC',
  subText: '#CBD5E1',
  border: '#334155',
  accent: '#94A3B8',
  accentText: '#0F172A',
  inputBg: '#334155',
};

export const FILTERS = ['All', 'Active', 'Completed'] as const;
