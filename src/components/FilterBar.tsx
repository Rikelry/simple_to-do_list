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
                justifyContent: 'center',
                gap: 12,
                maxWidth: 760,
                width: '100%',
                marginInline: 'auto',
                marginBottom: 16,
                flexWrap: 'wrap',
            }}
        >
            {FILTERS.map((item) => (
                <button
                    key={item}
                    type="button"
                    onClick={() => onChangeFilter(item)}
                    style={{
                        border: 'none',
                        background: 'transparent',
                        color: filter === item ? theme.text : theme.subText,
                        fontWeight: filter === item ? 700 : 500,
                        fontSize: 16,
                        cursor: 'pointer',
                        padding: 0,
                    }}
                >
                    {item}
                </button>
            ))}

            <span
                style={{
                    fontSize: 14,
                    color: theme.subText,
                }}
            >
                {tasksLeft} tasks left
            </span>
        </div>
    );
}