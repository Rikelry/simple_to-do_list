import { useState } from 'react';
import type { Theme } from '../constants/theme';
import { Icon } from '@iconify/react';

type SidebarProps = {
    theme: Theme;
    isDark: boolean;
    onToggleTheme: () => void;
    onClearCompleted: () => void;
};

export function Sidebar({
    theme,
    onToggleTheme,
    onClearCompleted,
}: SidebarProps) {
    const [expanded, setExpanded] = useState(false);
    const ICON_SIZE = 25;

    return (
        <aside
            style={{
                width: expanded ? 200 : 75,
                transition: 'width 0.2s ease',
                overflow: 'hidden',

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
            {/* MENU */}
            <button
                type="button"
                aria-label="Menu"
                style={buttonBase(theme, false)}
                onClick={() => setExpanded((v) => !v)}
            >
                <Icon icon="mdi:menu" width={ICON_SIZE} height={ICON_SIZE} />
            </button>

            <div style={{ width: '100%', height: 1, backgroundColor: theme.border, marginBottom: 18 }} />

            {/* ITEMS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 15, alignItems: 'center' }}>

                <div style={activeItem(theme)}>
                    <Icon icon="mdi:account-circle-outline" width={ICON_SIZE} height={ICON_SIZE} />
                    {expanded && <span style={{ marginLeft: 10 }}>My Tasks</span>}
                </div>

                <button
                    type="button"
                    style={buttonBase(theme, false)}
                    onClick={onClearCompleted}
                >
                    <Icon icon="mdi:format-list-checks" width={ICON_SIZE} height={ICON_SIZE} />
                    {expanded && <span style={{ marginLeft: 10 }}>Clear</span>}
                </button>

                <button
                    type="button"
                    style={buttonBase(theme, false)}
                    onClick={onToggleTheme}
                >
                    <Icon icon="mdi:cog" width={ICON_SIZE} height={ICON_SIZE} />
                    {expanded && <span style={{ marginLeft: 10 }}>Theme</span>}
                </button>

            </div>
        </aside>
    );
}

function buttonBase(theme: Theme, active: boolean): React.CSSProperties {
    return {
        width: '100%',
        height: 52,
        borderRadius: 16,
        border: 'none',
        backgroundColor: active ? theme.bg : 'transparent',
        color: theme.text,
        cursor: 'pointer',

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,

        padding: 0,
    };
}

function activeItem(theme: Theme): React.CSSProperties {
    return {
        width: '100%',
        height: 52,
        borderRadius: 16,
        backgroundColor: theme.bg,
        color: theme.text,

        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: 10,
    };
}