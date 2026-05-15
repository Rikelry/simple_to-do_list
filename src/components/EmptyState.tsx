import type { Theme } from '../constants/theme';

type EmptyStateProps = {
    theme: Theme;
    title?: string;
    text?: string;
};

export function EmptyState({
    theme,
    title = 'No tasks here yet',
    text = 'Add a task to get the list moving. Small steps, tidy list, calmer brain.',
}: EmptyStateProps) {
    return (
        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                paddingInline: 24,
                minHeight: 280,
            }}
        >
            <h2 style={{ margin: '0 0 10px', fontSize: 22, fontWeight: 700, color: theme.text, textAlign: 'center' }}>
                {title}
            </h2>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: theme.subText, textAlign: 'center', maxWidth: 360 }}>
                {text}
            </p>
        </div>
    );
}