import { CtaButton } from '../../components/ctaButton/view';
import { useNotificationToast } from '../../components/notificationToast/controller/usenotificationToast.controller';
import { NotificationToast } from '../../components/notificationToast/view';

export const PageNotificationToast = () => {
  const { toastData, triggerToast, closeToast } = useNotificationToast();

  return (
    <div className="page-wrapper">
      <div className="box">
        <div className="buttons-container">
          <CtaButton
            id="button"
            elementType="button"
            text="Success Notification"
            className="primary"
            onClick={() =>
              triggerToast({
                message: 'Your comment has been sent successfully!',
                type: 'success',
              })
            }
          />
          <CtaButton
            id="button"
            elementType="button"
            text="Error Notification"
            className="primary"
            onClick={() =>
              triggerToast({
                message: "You didn't fill out your form correctly!",
                type: 'error',
                duration: 5000,
              })
            }
          />
          <CtaButton
            id="button"
            elementType="button"
            text="Warning Notification"
            className="primary"
            onClick={() =>
              triggerToast({
                message: 'Your password must be 8 characters long!',
                type: 'warning',
                duration: 5000,
              })
            }
          />
          <CtaButton
            id="button"
            elementType="button"
            text="Info Notification"
            className="primary"
            onClick={() =>
              triggerToast({
                message: 'information message here...',
                type: 'info',
                duration: 3000,
              })
            }
          />
          {toastData && (
            <NotificationToast
              message={toastData.message}
              type={toastData.type}
              duration={toastData.duration}
              onClose={closeToast}
            />
          )}
        </div>
      </div>
    </div>
  );
};
