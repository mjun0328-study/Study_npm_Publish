import React from "react";
import styled from "styled-components";

interface ButtonProps {
  children?: React.ReactNode;
  onClick?: () => void;
  variant?: "primary" | "secondary";
}

const StyledButton = styled.button<{ variant: "primary" | "secondary" }>`
  padding: 8px 16px;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  background-color: ${(props) =>
    props.variant === "primary" ? "#007bff" : "#6c757d"};
  color: white;
`;

export const Button = ({
  children,
  onClick,
  variant = "primary",
  ...rest
}: ButtonProps) => {
  return (
    <StyledButton onClick={onClick} variant={variant} {...rest}>
      {children}
    </StyledButton>
  );
};
