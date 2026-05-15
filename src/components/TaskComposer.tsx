import type { Theme } from '../constants/theme';

type TaskComposerProps = {
    theme: Theme;
    value: string;
    onChangeText: (text: string) => void;
    onSubmit: () => void;
};