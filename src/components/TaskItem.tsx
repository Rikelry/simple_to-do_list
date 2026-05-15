import type { Theme } from '../constants/theme';
import type { Task } from '../types/task';

type TaskItemProps = {
  theme: Theme;
  task: Task;
  onToggle: (id: string) => void;
  onEdit: (task: Task) => void;
  onDelete: (id: string) => void;
};