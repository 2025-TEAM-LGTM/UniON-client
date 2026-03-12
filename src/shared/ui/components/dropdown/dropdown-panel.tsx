import {
  type ReactNode,
  useEffect,
  useLayoutEffect,
  useRef,
  useState,
} from 'react';
import { createPortal } from 'react-dom';

import { useDropdownContext } from './dropdown-context';
import * as styles from './dropdown-panel.css';

interface DropdownPanelProps {
  children: ReactNode;
}

const SCROLL_OPTS = { capture: true, passive: true } as const;
const SCROLL_REMOVE_OPTS = { capture: true } as const;

const DropdownPanel = ({ children }: DropdownPanelProps) => {
  const { open, close, panelId, triggerRef } = useDropdownContext();
  const panelRef = useRef<HTMLDivElement | null>(null);
  const [pos, setPos] = useState({ top: 0, left: 0 });
  const prevOpenRef = useRef(open);

  useLayoutEffect(() => {
    if (!open || !triggerRef.current) return;

    const update = () => {
      const rect = triggerRef.current!.getBoundingClientRect();
      setPos((prev) => {
        const next = {
          top: rect.bottom + window.scrollY,
          left: rect.left + window.scrollX,
        };
        return prev.top === next.top && prev.left === next.left ? prev : next;
      });
    };

    update();
    window.addEventListener('resize', update);
    window.addEventListener('scroll', update, SCROLL_OPTS);

    return () => {
      window.removeEventListener('resize', update);
      window.removeEventListener('scroll', update, SCROLL_REMOVE_OPTS);
    };
  }, [open, triggerRef]);

  useEffect(() => {
    if (!open) return;

    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') close();
    };

    const onPointerDown = (e: PointerEvent) => {
      const target = e.target as Node;
      if (
        !panelRef.current?.contains(target) &&
        !triggerRef.current?.contains(target)
      ) {
        close();
      }
    };

    document.addEventListener('keydown', onKeyDown);
    document.addEventListener('pointerdown', onPointerDown);

    return () => {
      document.removeEventListener('keydown', onKeyDown);
      document.removeEventListener('pointerdown', onPointerDown);
    };
  }, [open, close, triggerRef]);

  useEffect(() => {
    if (prevOpenRef.current && !open) {
      triggerRef.current?.focus();
    }
    prevOpenRef.current = open;
  }, [open, triggerRef]);

  if (!open) return null;

  return createPortal(
    <div
      ref={panelRef}
      id={panelId}
      className={styles.panel}
      style={{ top: pos.top, left: pos.left }}
    >
      <div className={styles.panelInner}>{children}</div>
    </div>,
    document.body,
  );
};

export default DropdownPanel;
