import { FILTERS, type Theme } from '../constants/theme';
import type { Filter } from '../types/task';

type FilterBarProps = {
    theme: Theme;
    filter: Filter;
    tasksLeft: number;
    onChangeFilter: (value: Filter) => void;
};