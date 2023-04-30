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
        <div>
          <h1>One by One</h1>
          <p>Well Come My Blog</p>
          <br/>
        </div>
      </header>
  )
  const footer = (
      <footer>
        <h3>
          <br/>
          <p>developed by dasog@naver.com</p>
        </h3>
      </footer>
  )

  return (
      <html lang="en">
      <body>
      {header}
      {children}
      {footer}
      </body>
      </html>
  )

}
