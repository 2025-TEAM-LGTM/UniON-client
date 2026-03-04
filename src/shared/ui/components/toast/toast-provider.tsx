import { AlertIcon, CheckIcon } from '@shared/assets/icons';
import { type ReactNode, useCallback, useMemo, useRef, useState } from 'react';

import Toast from './toast';
import { type ToastActions, ToastContext } from './toast-context';

const TOAST_DURATION_MS = 2000;

type ToastType = 'success' | 'error';

interface ToastState {
  open: boolean;
  type: ToastType;
  message: string;
}

const initialState: ToastState = {
  open: false,
  type: 'success',
  message: '',
};

export const ToastProvider = ({ children }: { children: ReactNode }) => {
  const [toast, setToast] = useState<ToastState>(initialState);
  const timerRef = useRef<number | null>(null);

  const clearTimer = useCallback(() => {
    if (timerRef.current === null) return;
    window.clearTimeout(timerRef.current);
    timerRef.current = null;
  }, []);

  const show = useCallback(
    (type: ToastType, message: string) => {
      clearTimer();
      setToast({ open: true, type, message });

      timerRef.current = window.setTimeout(() => {
        setToast((prev) => ({ ...prev, open: false }));
        timerRef.current = null;
      }, TOAST_DURATION_MS);
    },
    [clearTimer],
  );

  const success = useCallback(
    (message: string) => show('success', message),
    [show],
  );
  const error = useCallback(
    (message: string) => show('error', message),
    [show],
  );

  const value = useMemo<ToastActions>(
    () => ({ success, error }),
    [success, error],
  );

  const icon = toast.type === 'success' ? <CheckIcon /> : <AlertIcon />;

  return (
    <ToastContext.Provider value={value}>
      {children}
      {toast.open ? <Toast icon={icon} message={toast.message} /> : null}
    </ToastContext.Provider>
  );
};
