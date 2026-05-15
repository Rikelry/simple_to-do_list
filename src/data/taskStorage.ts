import type { Task } from '../types/task';

const STORAGE_KEY = '@simple_todo_list_v1';

function isBrowser(): boolean {
  return typeof window !== 'undefined';
}

export const taskStorage = {
  async load(): Promise<Task[]> {
    if (!isBrowser()) return [];

    try {
      const raw = window.localStorage.getItem(STORAGE_KEY);
      if (!raw) return [];

      const parsed = JSON.parse(raw) as unknown;
      if (!Array.isArray(parsed)) return [];

      return parsed.filter((item): item is Task => {
        if (typeof item !== 'object' || item === null) return false;
        const value = item as Task;
        return (
          typeof value.id === 'string' &&
          typeof value.title === 'string' &&
          typeof value.done === 'boolean'
        );
      });
    } catch {
      return [];
    }
  },

  async save(tasks: Task[]): Promise<void> {
    if (!isBrowser()) return;
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(tasks));
  },
};