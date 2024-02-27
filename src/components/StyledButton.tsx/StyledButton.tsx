import { styled } from "@mui/material"
import { ReactNode } from "react"

interface StyledButtonProps {
    children: ReactNode
    onClick: () => void // Corrigindo o nome da propriedade para onClick
}

const StyledButton: React.FC<StyledButtonProps> = ({ children, onClick }) => { // Corrigindo o nome da propriedade para onClick

    const StyledButtonComponent = styled("button")(({ theme }) => ({ // Renomeando o componente para evitar conflito de nomes
        backgroundColor: "transparent",
        border: `1px solid ${theme.palette.primary.contrastText}`,
        borderRadius: "3px",
        padding: "5px 15px",
        width: "100%",
        color: theme.palette.primary.contrastText,
        display: "inline-flex",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        '&:hover': {
            backgroundColor: theme.palette.secondary.light
        },
        cursor:"pointer"
    }))

    return (
        <>
            <StyledButtonComponent onClick={onClick}> 
                {children}
            </StyledButtonComponent>
        </>
    )
}

export default StyledButton
