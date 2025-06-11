import UIProvider from './plugins/mantine/provider'
import QueryProvider from './plugins/reactQuery/provider'
import AppRoutes from './AppRoutes'

export default function App() {
  return (
    <UIProvider>
      <QueryProvider>
        <AppRoutes />
      </QueryProvider>
    </UIProvider>
  )
}
