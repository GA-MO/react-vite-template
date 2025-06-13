import UIProvider from './libs/mantine/Provider'
import QueryProvider from './libs/reactQuery/Provider'
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
