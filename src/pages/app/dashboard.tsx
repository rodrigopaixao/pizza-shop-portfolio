import { Helmet } from 'react-helmet-async'

export function DashboardPage() {
  return (
    <>
      <Helmet title="Login" />
      <div className="fle flex-col gap-4">
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
      </div>
    </>
  )
}
