export function closeModal(modalRef: React.RefObject<HTMLDivElement>) {
    if (modalRef.current) {
        modalRef.current.setAttribute('data-open', 'false');
    }
}