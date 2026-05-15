import type { Theme } from '../constants/theme';

import iconSun from '../assets/iconSun.svg';
import iconMoon from '../assets/iconMoon.svg';

type HeaderProps = {
    theme: Theme;
    isDark: boolean;
    onToggleTheme: () => void;
};

export function Header({ theme, isDark, onToggleTheme }: HeaderProps) {
    return (
        <header
            style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                marginBottom: 38,
            }}
        >
            <h1 style={{ margin: 0, fontSize: 34, fontWeight: 700, color: theme.text }}>My Tasks</h1>

            <button
                type="button"
                onClick={onToggleTheme}
                aria-label="Alternar tema"
                style={{
                    border: 'none',
                    background: 'transparent',
                    color: theme.text,
                    fontSize: 24,
                    cursor: 'pointer',
                    padding: 6,
                }}
            >
                {isDark 
                ? <img src={iconSun} alt="" style={{ width: 18, height: 25 }} />
                : <img src={iconMoon} alt="" style={{ width: 18, height: 25 }} />
                }
            </button>
        </header>
    );
}
