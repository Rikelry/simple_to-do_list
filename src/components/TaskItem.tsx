import type { Theme } from '../constants/theme';
import type { Task } from '../types/task';

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

        </li>
    )
}