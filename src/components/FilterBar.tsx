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
                justifyContent: 'space-between',

                maxWidth: 760,
                width: '100%',
                marginInline: 'auto',
                marginBottom: 16,

                paddingLeft: 10,
                paddingRight: 10,
            }}
        >
            {/* LEFT */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                {FILTERS.map((item, index) => (
                    <div key={item} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                        <button
                            type="button"
                            onClick={() => onChangeFilter(item)}
                            style={{
                                border: 'none',
                                background: 'transparent',
                                cursor: 'pointer',

                                fontSize: 16,
                                fontWeight: filter === item ? 700 : 500,
                                color: filter === item ? theme.text : theme.subText,
                            }}
                        >
                            {item}
                        </button>

                        {index < FILTERS.length - 1 && (
                            <span
                                style={{
                                    color: theme.subText,
                                    opacity: 0.5,
                                    fontSize: 14,
                                }}
                            >
                                |
                            </span>
                        )}
                    </div>
                ))}
            </div>

            {/* RIGHT */}
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