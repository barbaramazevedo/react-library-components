import type { ReactNode } from "react";

export interface hyperlinkProps {
    elementType: 'a';
    href: string;
    target: '_blank' | '_self' | '_parent' | '_top';
    title: string;
    className: string;
    dataDisable?: boolean;
    "data-icon"?: 'ok' | 'alert' | 'danger' | 'disable';
    text?: string;
    id?: string;
    children?: ReactNode;
}