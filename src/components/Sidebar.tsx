import { useState } from 'react';
import { Icon } from '@iconify/react';
import type { Theme } from '../constants/theme';
import avatar from '../../public/avatar.png';

type SidebarProps = {
    theme: Theme;
    isDark: boolean;
    onToggleTheme: () => void;
    onClearCompleted: () => void;
};

export function Sidebar({ theme, onToggleTheme, onClearCompleted }: SidebarProps) {
    const [expanded, setExpanded] = useState(false);
    const ICON_SIZE = 25;

    return (
        <aside
            style={{
                width: expanded ? 220 : 75,
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
            <button
                type="button"
                aria-label="Menu"
                onClick={() => setExpanded((v) => !v)}
                style={buttonBase(theme, false, expanded)}
            >
                <Icon icon="mdi:menu" width={ICON_SIZE} height={ICON_SIZE} />
            </button>

            <div
                style={{
                    width: '100%',
                    height: 1,
                    backgroundColor: theme.border,
                    margin: '12px 0 18px',
                }}
            />

            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    gap: 12,
                    width: '100%',
                }}
            >
                {expanded ? (
                    <div style={profileCard(theme)}>
                        <div style={avatarWrap(theme)}>
                            <img
                                src={avatar}
                                alt="Jane Doe"
                                style={avatarImage}
                            />
                        </div>

                        <div style={{ textAlign: 'center' }}>
                            <div style={profileName(theme)}>Jane Doe</div>
                            <div style={profileEmail(theme)}>janedoe@gmail.com</div>
                        </div>
                    </div>
                ) : (
                    <div style={collapsedProfile(theme)}>
                        <Icon icon="mdi:account-circle-outline" width={ICON_SIZE} height={ICON_SIZE} />
                    </div>
                )}

                <button
                    type="button"
                    style={buttonBase(theme, false, expanded)}
                    onClick={onClearCompleted}
                >
                    <Icon icon="mdi:format-list-checks" width={ICON_SIZE} height={ICON_SIZE} />
                    {expanded && <span>My Tasks</span>}
                </button>

                <button
                    type="button"
                    style={buttonBase(theme, false, expanded)}
                    onClick={onToggleTheme}
                >
                    <Icon icon="mdi:cog" width={ICON_SIZE} height={ICON_SIZE} />
                    {expanded && <span>Settings</span>}
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
        fontSize: 16,
    };
}

function collapsedProfile(theme: Theme): React.CSSProperties {
    return {
        width: '100%',
        height: 52,
        borderRadius: 16,
        backgroundColor: theme.bg,
        color: theme.text,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    };
}

function profileCard(theme: Theme): React.CSSProperties {
    return {
        width: '100%',
        borderRadius: 18,
        backgroundColor: theme.bg,
        padding: 14,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 10,
        boxSizing: 'border-box',
    };
}

function avatarWrap(theme: Theme): React.CSSProperties {
    return {
        width: 68,
        height: 68,
        borderRadius: '50%',
        overflow: 'hidden',
        backgroundColor: theme.cardSoft,
        border: `1px solid ${theme.border}`,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        flexShrink: 0,
    };
}

const avatarImage: React.CSSProperties = {
    width: '100%',
    height: '100%',
    objectFit: 'cover',
    display: 'block',
};

function profileName(theme: Theme): React.CSSProperties {
    return {
        fontSize: 16,
        fontWeight: 700,
        color: theme.text,
        lineHeight: 1.2,
    };
}

function profileEmail(theme: Theme): React.CSSProperties {
    return {
        fontSize: 12,
        color: theme.subText,
        lineHeight: 1.2,
    };
}