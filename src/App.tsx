import { useState } from 'react';
import './index.css';
import { DARK_THEME, LIGHT_THEME } from './constants/theme';
import { useTasks } from './hooks/useTasks';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { TaskComposer } from './components/TaskComposer';
import { FilterBar } from './components/FilterBar';
import { TaskList } from './components/TaskList';
import { EmptyState } from './components/EmptyState';
import { EditTaskModal } from './components/EditTaskModal';

export default function App() {
    const [isDark, setIsDark] = useState(false);
    const theme = isDark ? DARK_THEME : LIGHT_THEME;

    const {
        tasks,
        allTasks,
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
    } = useTasks();

    const hasAnyTask = allTasks.length > 0;
    
    return (
        <div style={{ minHeight: '100vh', backgroundColor: theme.bg, color: theme.text }}>
            <div style={{ display: 'flex', minHeight: '100vh' }}>
                <Sidebar
                    theme={theme}
                    isDark={isDark}
                    onToggleTheme={() => setIsDark((current) => !current)}
                    onClearCompleted={clearCompleted}
                />

                <main style={{ flex: 1, padding: '26px 20px 18px' }}>
                    <Header
                        theme={theme}
                        isDark={isDark}
                        onToggleTheme={() => setIsDark((current) => !current)}
                    />

                    <TaskComposer theme={theme} value={input} onChangeText={setInput} onSubmit={addTask} />

                    <FilterBar
                        theme={theme}
                        filter={filter}
                        tasksLeft={remainingTasks}
                        onChangeFilter={setFilter}
                    />

                    {hasAnyTask ? (
                        tasks.length > 0 ? (
                            <TaskList
                                theme={theme}
                                tasks={tasks}
                                onToggle={toggleTask}
                                onEdit={openEditTask}
                                onDelete={requestDeleteTask}
                            />
                        ) : (
                            <EmptyState
                                theme={theme}
                                text1="Empty as my motivation on Monday 😅."
                                text2="Let\'s start adding sttuf!"
                            />
                        )
                    ) : (
                        <EmptyState theme={theme} />
                    )}
                </main>
            </div>

            <EditTaskModal
                visible={editingTask !== null}
                theme={theme}
                value={editText}
                onChangeText={setEditText}
                onClose={closeEditTask}
                onSave={saveEditTask}
            />
        </div>
    );
}