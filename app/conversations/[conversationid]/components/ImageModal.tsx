"use client";

import Modal from "@/app/components/Modal";
import Image from "next/image";
import React from "react";

interface IImageModalProps {
  isOpen?: boolean;
  onClose: () => void;
  src: string | null | undefined;
}
const ImageModal: React.FC<IImageModalProps> = ({ isOpen, onClose, src }) => {
  if (!src) return null;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="w-80 h-80">
        <Image alt="Image" fill src={src} className="object-contain p-4" />
      </div>
    </Modal>
  );
};

export default ImageModal;
