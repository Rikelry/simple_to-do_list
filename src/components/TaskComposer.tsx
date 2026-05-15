import type { Theme } from '../constants/theme';

type TaskComposerProps = {
    theme: Theme;
    value: string;
    onChangeText: (text: string) => void;
    onSubmit: () => void;
};

export function TaskComposer({ theme, value, onChangeText, onSubmit }: TaskComposerProps) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 14,
                marginBottom: 18,
                maxWidth: 760,
                width: '100%',
                alignSelf: 'center',
            }}
        >
            <input
                value={value}
                onChange={(event) => onChangeText(event.target.value)}
                onKeyDown={(event) => {
                    if (event.key === 'Enter') onSubmit();
                }}
                placeholder="Type your task here.."
                style={{
                    flex: 1,
                    height: 52,
                    borderRadius: 12,
                    paddingInline: 16,
                    border: `1px solid ${theme.border}`,
                    backgroundColor: theme.inputBg,
                    color: theme.text,
                    fontSize: 16,
                    outline: 'none',
                    boxSizing: 'border-box',
                }}
            />
        </div>
    )
}
