import { type ReactNode } from "react";

interface Props {
  children: ReactNode;
  underline?: boolean;
  bold?: boolean;
}

const Text = ({ children, underline, bold = false }: Props) => {
  return (
    <p
      style={{
        textAlign: "center",
        fontSize: "20px",
        marginTop: "20px",
        textDecoration: underline ? "underline" : "none",
        fontWeight: bold ? "bold" : "none",
      }}>
      {children}
    </p>
  );
};

export default Text;
