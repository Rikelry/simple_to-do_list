import type { Theme } from '../constants/theme';
import { Icon } from '@iconify/react';

type SidebarProps = {
    theme: Theme;
    isDark: boolean;
    onToggleTheme: () => void;
    onClearCompleted: () => void;
};

export function Sidebar({ theme, onToggleTheme, onClearCompleted, }: SidebarProps) {
    return (
        <aside
            style={{
                width: 75,
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
                <Icon icon="mdi:menu" />
            </button>

            <div style={{ width: '100%', height: 1, backgroundColor: theme.border, marginBottom: 18 }} />

            <div style={{ display: 'flex', flexDirection: 'column', gap: 15, alignItems: 'center' }}>
                <div style={activeItem(theme)} aria-hidden="true">
                    <Icon icon="mdi:account-circle-outline" />
                </div>

                <button type="button" style={buttonBase(theme, false)} onClick={onClearCompleted}>
                    <button type="button" style={buttonBase(theme, false)} onClick={onToggleTheme}>
                    <Icon icon="mdi:format-list-checks" />
                    </button>
                </button>

                <button type="button" style={buttonBase(theme, false)} onClick={onToggleTheme}>
                    <Icon icon="mdi:cog" />
                </button>
            </div>
        </aside>
    );
}

function buttonBase(theme: Theme, active: boolean): React.CSSProperties {
  return {
    width: 52,
    height: 52,
    borderRadius: 16,
    border: 'none',
    backgroundColor: active ? theme.bg : 'transparent',
    color: theme.text,
    fontSize: 24,
    cursor: 'pointer',
    display: 'grid',
    placeItems: 'center',
    padding: 0,
  };
}

function activeItem(theme: Theme): React.CSSProperties {
  return {
    ...buttonBase(theme, true),
    cursor: 'default',
  };
}