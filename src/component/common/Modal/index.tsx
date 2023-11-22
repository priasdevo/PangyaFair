import React from "react";

interface ModalProps {
  isOpen: boolean;
  children?: React.ReactNode;
}

const Modal = (props: ModalProps) => {
  const { isOpen, children } = props;
  if (!isOpen) return null;

  return (
    <div
      style={{
        position: "fixed", // Changed to 'fixed' to position relative to the viewport
        top: "0",
        left: "0",
        width: "100%",
        height: "100%",
        backgroundColor: "rgba(0, 0, 0, 0.5)", // Semi-transparent background
        backdropFilter: "blur(5px)", // Apply blur effect to the background
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        zIndex: 1000, // Ensure it's above other content
      }}
    >
      <div
        style={{
          position: "relative", // Position the modal content relative to the overlay
          borderRadius: "12px",
          boxShadow: "2px 2px 20px 0px rgba(0, 0, 0, 0.20)",
          background: "white",
          padding: "32px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "24px",
          zIndex: 1001, // Ensures modal content is above the overlay
        }}
      >
        {children}
      </div>
    </div>
  );
};

export default Modal;
