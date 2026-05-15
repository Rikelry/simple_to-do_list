import type { Theme } from '../constants/theme';

type EditTaskModalProps = {
    visible: boolean;
    theme: Theme;
    value: string;
    onChangeText: (text: string) => void;
    onClose: () => void;
    onSave: () => void;
};