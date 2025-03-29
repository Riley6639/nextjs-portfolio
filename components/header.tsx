export default function Header() {
    return (
        <header className="bg-gradient-to-l from-gray-900 to-indigo-900 text-white p-4 w-full">
            <h1 className="text-3xl font-bold">Riley Mecham&apos;s Portfolio</h1>
            <div className="flex justify-center space-x-8">
                <a href="https://www.linkedin.com/in/riley-mecham-9a0241198/" className="hover:text-blue-400 hover:underline">LinkedIn</a>
                <a href="https://github.com/your-github-username" className="hover:text-blue-400 hover:underline">GitHub</a>
                <a href="mailto:your-email@example.com" className="hover:text-blue-400 hover:underline">Email</a>
            </div>
        </header>
    )
}