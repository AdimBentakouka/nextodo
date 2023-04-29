interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    /**
     * Label du bouton
     */
    label: string;

    /**
     * Type du bouton
     */

    color: "default" | "danger";

    /**
     * onClick evenement
     */
    onClick?: () => void;
}


enum colorButton {
    "default" = "bg-blue-600 hover:bg-blue-700 focus:ring-blue-800",
    "danger" = "bg-red-600 hover:bg-red-700 focus:ring-red-900"
}

export const Button = ({ label, color = "default", className, ...props }: ButtonProps) => {

    return (
        <button
            className={`${colorButton[color]} ${className} text-white focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5  focus:outline-none `}
            {...props}
        >
            {label}
        </button>
    );
};

