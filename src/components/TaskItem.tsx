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
    ></li>
  )
}