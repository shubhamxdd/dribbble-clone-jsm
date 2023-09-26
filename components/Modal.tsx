"use client";

import Image from "next/image";
import { useRouter } from "next/navigation";
import { MouseEvent, useCallback, useRef } from "react";

const Modal = ({ children }: { children: React.ReactNode }) => {
  const overlay = useRef<HTMLDivElement>(null);
  const wrapper = useRef<HTMLDivElement>(null);
  const router = useRouter();
  const onClose = useCallback(() => {
    router.push("/");
  }, [router]);
  const onClick = useCallback(
    (e: MouseEvent) => {
      if (e.target === overlay.current && onClose) {
        onClose();
      }
    },
    [onClose, overlay]
  );
  return (
    <div ref={overlay} className="modal" onClick={onClick}>
      <button
        type="button"
        onClick={onClose}
        className="absolute top-4 right-8"
      >
        <Image src="/close.svg" alt="close icon" width={17} height={17} />
      </button>
      <div ref={wrapper} className="modal_wrapper">
        {children}
      </div>
    </div>
  );
};

export default Modal;
