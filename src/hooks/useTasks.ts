import { useCallback, useEffect, useMemo, useState } from 'react';
import type { Filter, Task } from '../types/task';
import { taskStorage } from '../data/taskStorage';

function makeId(): string {
    return `${Date.now()}-${Math.random().toString(16).slice(2)}`;
}

function askConfirm(title: string, message: string): boolean {
    return window.confirm(`${title}\n\n${message}`);
}

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [filter, setFilter] = useState<Filter>('All');
    const [input, setInput] = useState('');
    const [editingTask, setEditingTask] = useState<Task | null>(null);
    const [editText, setEditText] = useState('');
    const [isHydrated, setIsHydrated] = useState(false);

    useEffect(() => {
        let mounted = true;

        void (async () => {
            try {
                const loadedTasks = await taskStorage.load();
                if (mounted) setTasks(loadedTasks);
            } catch (error) {
                console.error('Erro ao carregar tarefas:', error);
            } finally {
                if (mounted) setIsHydrated(true);
            }
        })();

        return () => {
            mounted = false;
        };
    }, []);

    useEffect(() => {
        if (!isHydrated) return;

        void taskStorage.save(tasks).catch((error) => {
            console.error('Erro ao salvar tarefas:', error);
        });
    }, [tasks, isHydrated]);

    const remainingTasks = useMemo(
        () => tasks.filter((task) => !task.done).length,
        [tasks],
    );
}