

export default function NotFound() {
  return (
    <>
      <div className="flex">
        <a href="/" aria-label="Home">
          teste
        </a>
      </div>
      <p className="mt-20 text-sm font-medium text-gray-700">404</p>
      <h1 className="mt-3 text-lg font-semibold text-gray-900">
        Page not found
      </h1>
      <p className="mt-3 text-sm text-gray-700">
        Sorry, we couldn’t find the page you’re looking for.
      </p>
      <a href="/" className="mt-10">
        Go back home
      </a>
    </>
  )
}
