import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import { Result, Button } from 'antd'

export default function RouteError() {
  const error = useRouteError()
  const isResp = isRouteErrorResponse(error)

  const title = isResp ? `${error.status} ${error.statusText}` : 'Что-то пошло не так'
  const subTitle =
    isResp ? (error.data as any)?.message ?? 'Route error' : error instanceof Error ? error.message : ''

  return (
    <Result
      status="error"
      title={title}
      subTitle={subTitle}
      extra={
        <Button type="primary">
          <Link to="/">На главную</Link>
        </Button>
      }
    />
  )
}
