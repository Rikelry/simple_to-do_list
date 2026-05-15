import { FILTERS, type Theme } from '../constants/theme';
import type { Filter } from '../types/task';

type FilterBarProps = {
    theme: Theme;
    filter: Filter;
    tasksLeft: number;
    onChangeFilter: (value: Filter) => void;
};

export function FilterBar({ theme, filter, tasksLeft, onChangeFilter }: FilterBarProps) {
    return (
        <div
            style={{
                display: 'flex',
                alignItems: 'center',
                gap: 12,
                maxWidth: 760,
                width: '100%',
                marginBottom: 16,
                alignSelf: 'center',
                flexWrap: 'wrap',
            }}
        ></div>
    )
}
