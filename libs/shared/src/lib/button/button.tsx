import { type FormEvent } from "react"

type ButtonProps = Readonly<{
    onClick: (event: FormEvent) => void
    text: string
}>

export const Button = ({ onClick, text }: ButtonProps) => {
    return (
        <button type="button" className="border rounded mt-2 mb-2" onClick={onClick}>{text}</button> 
    )
}