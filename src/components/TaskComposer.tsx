import type { Theme } from '../constants/theme';

type TaskComposerProps = {
    theme: Theme;
    value: string;
    onChangeText: (text: string) => void;
    onSubmit: () => void;
};

export function TaskComposer({ theme, value, onChangeText, onSubmit }: TaskComposerProps) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 14,
        marginBottom: 18,
        maxWidth: 760,
        width: '100%',
        alignSelf: 'center',
      }}
    ></div>
  )
}
