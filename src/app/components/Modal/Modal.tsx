import styles from "./modal.module.css";

import { useCallback, useRef, useState } from "react";
import { createPortal } from "react-dom";

/**
 * Callback from trigger element for forwarding result of modal window.
 */
type ResultCb = (res: boolean) => void;

/**
 * Callbach which opens modal window. Takes callback for result forwarding.
 */
type OpenModal = (resultCb: ResultCb) => void;

type Props = {
  renderTriggerElement: (openModal: OpenModal) => JSX.Element;
  title: string;
  text: string;
  resolveText: string;
  rejectText: string;
};

export default function Modal({
  renderTriggerElement,
  title,
  text,
  resolveText,
  rejectText,
}: Props) {
  const [open, setOpen] = useState(false);

  const openModal: OpenModal = useCallback(
    (resultCb: (res: boolean) => void) => {
      resultCbRef.current = resultCb;
      setOpen(true);
    },
    []
  );

  const resultCbRef = useRef((res: boolean) => {});

  const resolve = useCallback(() => {
    resultCbRef.current(true);
    setOpen(false);
  }, []);

  const reject = useCallback(() => {
    resultCbRef.current(false);
    setOpen(false);
  }, []);

  return (
    <>
      {open &&
        createPortal(
          <div className={styles.modal}>
            <div className={styles.alert}>
              <h3 className={styles.header}>{title}</h3>
              <p className={styles.text}>{text}</p>

              <button
                className={`${styles.btn} ${styles.btnResolve}`}
                type="button"
                onClick={() => resolve()}
              >
                {resolveText}
              </button>

              <button
                className={`${styles.btn} ${styles.btnReject}`}
                type="button"
                onClick={() => reject()}
              >
                {rejectText}
              </button>
            </div>
          </div>,

          document.body
        )}

      <div>{renderTriggerElement(openModal)}</div>
    </>
  );
}
