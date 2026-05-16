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
                transition: 'width 0.25s ease',

                height: '100vh',
                overflow: 'hidden',

                display: 'flex',
                flexDirection: 'column',
                alignItems: 'stretch',

                paddingTop: 18,
                paddingInline: 12,

                borderRight: `1px solid ${theme.border}`,
                backgroundColor: theme.card,
                boxSizing: 'border-box',
            }}
        >
            {/* MENU */}
            <button
                type="button"
                aria-label="Menu"
                onClick={() => setExpanded((v) => !v)}
                style={buttonBase(theme, false, true)}
            >
                <Icon icon="mdi:menu" width={ICON_SIZE} height={ICON_SIZE} />
                {expanded && <span style={{ marginLeft: 10 }}>Menu</span>}
            </button>

            <div
                style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: theme.border,
                    margin: '12px 0 18px',
                }}
            />

            {/* ITEMS */}
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    width: '100%',
                }}
            >
                <div style={activeItem(theme, expanded)}>
                    <Icon icon="mdi:account-circle-outline" width={ICON_SIZE} height={ICON_SIZE} />
                    {expanded && <span style={{ marginLeft: 10 }}>My Tasks</span>}
                </div>

                <button
                    type="button"
                    style={buttonBase(theme, false, expanded)}
                    onClick={onClearCompleted}
                >
                    <Icon icon="mdi:format-list-checks" width={ICON_SIZE} height={ICON_SIZE} />
                    {expanded && <span style={{ marginLeft: 10 }}>Clear</span>}
                </button>

                <button
                    type="button"
                    style={buttonBase(theme, false, expanded)}
                    onClick={onToggleTheme}
                >
                    <Icon icon="mdi:cog" width={ICON_SIZE} height={ICON_SIZE} />
                    {expanded && <span style={{ marginLeft: 10 }}>Theme</span>}
                </button>
            </div>
        </aside>
    );
}

function buttonBase(theme: Theme, active: boolean, expanded: boolean): React.CSSProperties {
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
        justifyContent: expanded ? 'flex-start' : 'center',

        gap: 10,
        paddingInline: 14,
    };
}

function activeItem(theme: Theme, expanded: boolean): React.CSSProperties {
    return {
        width: '100%',
        height: 52,
        borderRadius: 16,
        backgroundColor: theme.bg,
        color: theme.text,

        display: 'flex',
        alignItems: 'center',
        justifyContent: expanded ? 'flex-start' : 'center',

        gap: 10,
        paddingInline: 14,
    };
}