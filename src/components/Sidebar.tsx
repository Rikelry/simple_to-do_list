import type { Theme } from '../constants/theme';

type SidebarProps = {
    theme: Theme;
    isDark: boolean;
    onToggleTheme: () => void;
    onClearCompleted: () => void;
};

export function Sidebar({
    theme,
    isDark,
    onToggleTheme,
    onClearCompleted,
}: SidebarProps) {
    return (
        <aside
            style={{
                width: 88,
                paddingTop: 18,
                paddingInline: 14,
                borderRight: `1px solid ${theme.border}`,
                backgroundColor: theme.card,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                boxSizing: 'border-box',
            }}
        >
            <button
                type="button"
                aria-label="Menu"
                style={buttonBase(theme, false)}
                onClick={() => void 0}
            >
                ☰
            </button>

            <div style={{ width: '100%', height: 1, backgroundColor: theme.border, marginBottom: 18 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 18, alignItems: 'center' }}>
                <div style={activeItem(theme)} aria-hidden="true">
                    ☐
                </div>

                <button type="button" style={buttonBase(theme, false)} onClick={onClearCompleted}>
                    🗑
                </button>

                <button type="button" style={buttonBase(theme, false)} onClick={onToggleTheme}>
                    {isDark ? '☀' : '☾'}
                </button>
            </div>
        </aside>
    );
}