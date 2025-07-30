export type HeadingLevel = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6' | 'p';

export interface titleProps {
    elementType: HeadingLevel;
    text?: string;
    id?: string;
    className?: string;
}