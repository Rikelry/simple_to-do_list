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