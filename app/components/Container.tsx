export function Container({children}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="container mx-auto px-4 md:px-6 py-12">
      {children}
    </div>

  )}
