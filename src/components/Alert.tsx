import { type ReactNode } from "react";

// All this was apart of this coding tutorial: https://www.youtube.com/watch?v=SqcY0GlETPk

interface AlertProps {
  children: ReactNode;
  onClose: () => void;
}

const Alert = ({ children, onClose }: AlertProps) => {
  return (
    <div className="alert alert-primary alert-dismissible" role="alert">
      {children}
      <button
        type="button"
        className="btn-close"
        data-bs-dismiss="alert"
        aria-label="Close"
        onClick={onClose}></button>
    </div>
  );
};

export default Alert;
