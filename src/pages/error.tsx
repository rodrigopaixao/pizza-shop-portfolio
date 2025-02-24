import { Link, useRouteError } from 'react-router'

export function Error() {
  const error = useRouteError() as Error

  return (
    <div className="flex h-screen flex-col items-center justify-center gap-2">
      <h1 className="text-4xl font-bold">Something went wrong</h1>
      <p className="text-accent-foreground">Error details:</p>

      <pre>{JSON.stringify(error, null, 2)}</pre>

      <p className="text-accent-foreground">
        Return to{' '}
        <Link to="/" className="text-sky-600 dark:text-sky-400">
          Dashboard
        </Link>
      </p>
    </div>
  )
}
