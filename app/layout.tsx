import Link from "next/link"
import "../styles/globals.css"
import Image from "next/image"

export const metadata = {
  title: 'Next.js',
  description: 'Generated by Next.js',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
    const header = (
        <header>
            <div className="text-center bg-indigo-700 p-8 my-6 rounded-md">
                <Image src="/logo.png" width={40} height={40} alt={"It need to be fixed"} className="mx-auto" />
                <Link href="/">
                    <h1 className="text-2xl font-mono text-white mt-4">
                        O3O blog
                    </h1>
                </Link>
                <p className="text-gray-200">Welcome My Blog</p>
            </div>
        </header>
    )
    const footer = (
        <footer>
            <h3 className="border-t border-gray-700 mt-12 py-6 text-center">
                <p>developed by dasog@naver.com</p>
            </h3>
        </footer>
    )

    return (
        <html lang="en">
        <body>
        <div className="mx-auto max-w-2xl px-6">
            {header}
            {children}
            {footer}
        </div>
        </body>
        </html>
    )

}
