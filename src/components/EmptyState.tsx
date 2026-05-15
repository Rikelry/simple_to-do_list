import type { Theme } from '../constants/theme';

type EmptyStateProps = {
    theme: Theme;
    text1?: string;
    text2?: string;
};

export function EmptyState({
    theme,
    text1 = 'Empty as my motivation on Monday 😅.',
    text2 = 'Let\'s start adding sttuf!'
}: EmptyStateProps) {
    return (
        <div
            style={{
                flex: 1,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'center',
                paddingInline: 24,
                minHeight: 280,
            }}
        >
            <img src="src/assets/selfie.svg" width={500}/>   
            <div
            style={{
                flexDirection: 'column'
            }}
            >
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: theme.subText, textIndent: 65 ,textAlign: 'center', maxWidth: 360 }}>
                {text1}
            </p>
            <p style={{ margin: 0, fontSize: 15, lineHeight: 1.5, color: theme.subText, textIndent: -50, textAlign: 'center', maxWidth: 360 }}>
                {text2}
            </p>
            
            </div>
        </div>
    );
}