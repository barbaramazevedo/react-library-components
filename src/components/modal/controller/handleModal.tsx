export const handleModalClose = (
  event: React.MouseEvent,
  onClose: () => void
) => {
  event.stopPropagation();
  onClose();
};