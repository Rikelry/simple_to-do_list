import type { Theme } from '../constants/theme';

type EditTaskModalProps = {
    visible: boolean;
    theme: Theme;
    value: string;
    onChangeText: (text: string) => void;
    onClose: () => void;
    onSave: () => void;
};

export function EditTaskModal({
    visible,
    theme,
    value,
    onChangeText,
    onClose,
    onSave,
}: EditTaskModalProps) {
    if (!visible) return null;

    return (

  )
}