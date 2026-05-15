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
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: 14,
                marginBottom: 20,
                maxWidth: 760,
                width: '100%',
                justifySelf: 'center',
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

            <button
                type="button"
                onClick={onSubmit}
                style={{
                    height: 52,
                    paddingInline: 18,
                    borderRadius: 12,
                    border: 'none',
                    backgroundColor: theme.accent,
                    color: theme.accentText,
                    cursor: 'pointer',
                    fontSize: 16,
                    fontWeight: 700,
                }}
            >
                + Add
            </button>
        </div>
    );
}