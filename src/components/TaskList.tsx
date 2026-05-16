import type { Theme } from '../constants/theme';
import type { Task } from '../types/task';
import { TaskItem } from './TaskItem';

type TaskListProps = {
    theme: Theme;
    tasks: Task[];
    onToggle: (id: string) => void;
    onEdit: (task: Task) => void;
    onDelete: (id: string) => void;
};

export function TaskList({ theme, tasks, onToggle, onEdit, onDelete }: TaskListProps) {
    return (
        <ul
            style={{
                listStyle: 'none',
                padding: 0,
                margin: 0,
                paddingBottom: 24,
                maxWidth: 760,
                width: '100%',
                marginInline: 'auto',
            }}
        >
            {tasks.map((task) => (
                <TaskItem
                    key={task.id}
                    theme={theme}
                    task={task}
                    onToggle={onToggle}
                    onEdit={onEdit}
                    onDelete={onDelete}
                />
            ))}
        </ul>
    );
}