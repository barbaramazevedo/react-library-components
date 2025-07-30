export function openModal(modalRef: React.RefObject<HTMLDivElement>) {
    if (modalRef.current) {
        modalRef.current.setAttribute('data-open', 'true');
    }
}