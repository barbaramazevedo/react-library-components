import type { ReactNode } from "react";
import type { createComponentProps } from "../../../utils/interface/createComponent.interface";

interface ModalBase extends createComponentProps {
  elementType: "div";
  animation?: "fade" | "slide";
  className: "modal";
  isOpen: boolean;
  onClose: () => void;
  headertext?: string;
  type: "message" | "content";
}

export interface ModalMessage extends ModalBase {
  type: "message";
  messageText: string;
  onOk?: () => void;
}

interface ModalContent extends ModalBase {
  type: "content";
  children: ReactNode;
}

export type ModalProps = ModalMessage | ModalContent;