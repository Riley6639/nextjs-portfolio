
interface TextBoxProps {
    size?: "small" | "medium" | "large";
    children: React.ReactNode;
}

const TextBox: React.FC<TextBoxProps> = ({ size = "medium", children }) => {
    const sizeClasses = {
        small: "w-40 h-20",
        medium: "w-60 h-32",
        large: "w-80 h-40",
    };

    return (
        <div className={`bg-gray-200 p-4 rounded-lg shadow-md ${sizeClasses[size]}`}>
            {children}
        </div>
    );
}

export default TextBox;