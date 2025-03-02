
interface TextBoxProps {
    layout?: "column" | "wide";
    background?: "cyan" | "slate" | "sky";
    children: React.ReactNode;
}

const TextBox: React.FC<TextBoxProps> = ({ layout="column", background = "slate", children }) => {
    const layoutClasses = {
        column: "flex flex-col p-6 col-span-1",  // Column layout
        wide: "p-6 w-full sm:col-span-1 lg:col-span-2"  // Wide layout
      };

    const backgroundClasses = {
        cyan: "bg-cyan-800 bg-gradient-to-t from-cyan-900 to-cyan-600",
        slate: "bg-slate-600 bg-gradient-to-t from-slate-700 to-slate-500",
        sky: "bg-sky-950 bg-gradient-to-t from-sky-950 to-sky-700",
    };

    return (
        <div className={`${backgroundClasses[background]} ${layoutClasses[layout]} p-4 rounded-lg shadow-md hover:shadow-xl hover:scale-105 transition-transform duration-300 ease-in-out`}>
            {children}
        </div>
    );
}

export default TextBox;