import React from "react";
import styled from "styled-components";

export const Footer = () => {
    return (
        <StyledFooter>
                <div className="ft-container">
                    <div className="copyright">
                        <span>Copyright &copy; Lisandro Palavecino 2023</span>
                    </div>
                </div>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 2rem;
    font-weight: 600;
    font-size: 1.1rem;
    background-color: #333;
    color: white;
    text-align: center;
`;