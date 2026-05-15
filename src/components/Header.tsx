import type { Theme } from '../constants/theme';

type HeaderProps = {
    theme: Theme;
    isDark: boolean;
    onToggleTheme: () => void;
};