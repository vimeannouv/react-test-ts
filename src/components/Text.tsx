import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  underline?: boolean;
}

const Text = ({ children, underline }: Props) => {
  return (
    <p
      style={{
        textAlign: "center",
        fontSize: "20px",
        marginTop: "20px",
        textDecoration: underline ? "underline" : "none"
      }}>
      {children}
    </p>
  );
};

export default Text;
