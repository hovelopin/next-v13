export default function AboutLayout({
  children
}: {
  children : React.ReactNode
}){
  return (
    <>
      <h1>About Layout</h1>
      <nav>{children}</nav>
    </>
  )
}