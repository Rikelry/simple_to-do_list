import type { Theme } from '../constants/theme';

type EditTaskModalProps = {
    visible: boolean;
    theme: Theme;
    value: string;
    onChangeText: (text: string) => void;
    onClose: () => void;
    onSave: () => void;
};

export function EditTaskModal({
    visible,
    theme,
    value,
    onChangeText,
    onClose,
    onSave,
}: EditTaskModalProps) {
    if (!visible) return null;

    return (
        <div
            role="presentation"
            onClick={onClose}
            style={{
                position: 'fixed',
                inset: 0,
                backgroundColor: 'rgba(0,0,0,0.5)',
                display: 'grid',
                placeItems: 'center',
                padding: 20,
                zIndex: 50,
            }}
        >
            <div
                role="dialog"
                aria-modal="true"
                aria-labelledby="edit-task-title"
                onClick={(event) => event.stopPropagation()}
                style={{
                    width: '100%',
                    maxWidth: 420,
                    borderRadius: 18,
                    padding: 20,
                    border: `1px solid ${theme.border}`,
                    backgroundColor: theme.card,
                    boxSizing: 'border-box',
                }}
            >
                <h2 id="edit-task-title" style={{ margin: '0 0 14px', fontSize: 22, fontWeight: 700, color: theme.text }}>
                    Edit task
                </h2>

                <input
                    value={value}
                    onChange={(event) => onChangeText(event.target.value)}
                    onKeyDown={(event) => {
                        if (event.key === 'Enter') onSave();
                        if (event.key === 'Escape') onClose();
                    }}
                    autoFocus
                    placeholder="Task title"
                    style={{
                        width: '100%',
                        height: 50,
                        borderRadius: 12,
                        paddingInline: 14,
                        border: `1px solid ${theme.border}`,
                        backgroundColor: theme.inputBg,
                        color: theme.text,
                        fontSize: 16,
                        marginBottom: 16,
                        outline: 'none',
                        boxSizing: 'border-box',
                    }}
                />

                <div style={{ display: 'flex', justifyContent: 'flex-end', gap: 12 }}>
                    <button
                        type="button"
                        onClick={onClose}
                        style={modalBtn(theme.cardSoft, theme.text)}
                    >
                        Cancel
                    </button>
                    <button
                        type="button"
                        onClick={onSave}
                        style={modalBtn(theme.text, theme.bg)}
                    >
                        Save
                    </button>
                </div>
            </div>
        </div>
    );
}