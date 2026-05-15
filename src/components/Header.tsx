import { Icon } from '@iconify/react';
import type { Theme } from '../constants/theme';

type HeaderProps = {
    theme: Theme;
    isDark: boolean;
    onToggleTheme: () => void;
};

export function Header({ theme, isDark, onToggleTheme }: HeaderProps) {
    return (
        <header
            style={{
                position: 'relative',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginBottom: 40,
            }}
        >
            <h1
                style={{
                    margin: 0,
                    fontSize: 34,
                    fontWeight: 700,
                    color: theme.text,
                }}
            >
                My Tasks
            </h1>

            <button
                type="button"
                onClick={onToggleTheme}
                aria-label="Alternar tema"
                style={{
                    position: 'absolute',
                    right: 0,
                    border: 'none',
                    background: 'transparent',
                    color: theme.text,
                    fontSize: 24,
                    cursor: 'pointer',
                    padding: 6,
                }}
            >
                <Icon icon="mdi:theme-light-dark" />
            </button>
        </header>
    );
}