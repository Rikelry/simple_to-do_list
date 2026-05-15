import type { Theme } from '../constants/theme';
import type { Task } from '../types/task';

import iconPencil from '../assets/iconPencil.svg';
import iconTrash from '../assets/iconTrash.svg';

type TaskItemProps = {
    theme: Theme;
    task: Task;
    onToggle: (id: string) => void;
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
};

export function TaskItem({ theme, task, onToggle, onEdit, onDelete }: TaskItemProps) {
    return (
        <li
            style={{
                minHeight: 72,
                borderRadius: 14,
                border: `1px solid ${theme.border}`,
                paddingInline: 18,
                marginBottom: 14,
                backgroundColor: theme.card,
                display: 'flex',
                alignItems: 'center',
                boxShadow: '0 5px 10px rgba(0,0,0,0.08)',
            }}
        >
            <button
                type="button"
                onClick={() => onToggle(task.id)}
                aria-label={task.done ? 'Marcar como não concluída' : 'Marcar como concluída'}
                style={{
                    width: 22,
                    height: 22,
                    borderRadius: 4,
                    border: `2px solid ${theme.text}`,
                    backgroundColor: task.done ? theme.text : 'transparent',
                    color: theme.bg,
                    cursor: 'pointer',
                    display: 'grid',
                    placeItems: 'center',
                    marginRight: 16,
                    flexShrink: 0,
                }}
            >
                {task.done ? '✓' : ''}
            </button>

            <span
                title={task.title}
                style={{
                    flex: 1,
                    fontSize: 17,
                    marginRight: 12,
                    color: task.done ? theme.subText : theme.text,
                    textDecoration: task.done ? 'line-through' : 'none',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}
            >
                {task.title}
            </span>

            <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <button
                    type="button"
                    onClick={() => onEdit(task)}
                    aria-label="Editar tarefa"
                    style={iconButton(theme)}
                >
                    <img
                        src={iconPencil}
                        alt=""
                        style={{ width: 18, height: 18 }}
                    />
                </button>

                <button
                    type="button"
                    onClick={() => onDelete(task.id)}
                    aria-label="Excluir tarefa"
                    style={iconButton(theme)}
                >
                    <img
                        src={iconTrash}
                        alt=""
                        style={{ width: 18, height: 18 }}
                    />
                </button>
            </div>
        </li >
    );
}

function iconButton(theme: Theme): React.CSSProperties {
    return {
        border: 'none',
        background: 'transparent',
        color: theme.text,
        fontSize: 18,
        cursor: 'pointer',
        padding: 4,
        lineHeight: 1,
    };
}