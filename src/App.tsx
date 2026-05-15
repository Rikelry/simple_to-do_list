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
}