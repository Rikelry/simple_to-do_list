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

    const visibleTasks = useMemo(() => {
        if (filter === 'Active') return tasks.filter((task) => !task.done);
        if (filter === 'Completed') return tasks.filter((task) => task.done);
        return tasks;
    }, [tasks, filter]);

    const addTask = useCallback(() => {
        const title = input.trim();

        if (!title) {
            window.alert('Digite uma tarefa. O campo não pode ficar vazio.');
            return;
        }

        const newTask: Task = {
            id: makeId(),
            title,
            done: false,
        };

        setTasks((current) => [newTask, ...current]);
        setInput('');
    }, [input]);

    const toggleTask = useCallback((taskId: string) => {
        setTasks((current) =>
            current.map((task) => (task.id === taskId ? { ...task, done: !task.done } : task)),
        );
    }, []);

    const requestDeleteTask = useCallback((taskId: string) => {
        const confirmed = askConfirm('Excluir tarefa', 'Deseja remover esta tarefa?');
        if (!confirmed) return;

        setTasks((current) => current.filter((task) => task.id !== taskId));
    }, []);

    const openEditTask = useCallback((task: Task) => {
        setEditingTask(task);
        setEditText(task.title);
    }, []);

    const saveEditTask = useCallback(() => {
        if (!editingTask) return;

        const title = editText.trim();
        if (!title) {
            window.alert('Digite um título válido para salvar a tarefa.');
            return;
        }

        setTasks((current) =>
            current.map((task) => (task.id === editingTask.id ? { ...task, title } : task)),
        );
        setEditingTask(null);
        setEditText('');
    }, [editText, editingTask]);

    const closeEditTask = useCallback(() => {
        setEditingTask(null);
        setEditText('');
    }, []);

    const clearCompleted = useCallback(() => {
        const hasCompleted = tasks.some((task) => task.done);

        if (!hasCompleted) {
            window.alert('Não há tarefas concluídas no momento.');
            return;
        }

        const confirmed = askConfirm('Limpar concluídas', 'Remover todas as tarefas concluídas?');
        if (!confirmed) return;

        setTasks((current) => current.filter((task) => !task.done));
    }, [tasks]);

    return {
        tasks: visibleTasks,
        allTasks: tasks,
        totalTasks: tasks.length,
        remainingTasks,
        filter,
        setFilter,
        input,
        setInput,
        addTask,
        toggleTask,
        requestDeleteTask,
        openEditTask,
        clearCompleted,
        editingTask,
        editText,
        setEditText,
        saveEditTask,
        closeEditTask,
    };
}