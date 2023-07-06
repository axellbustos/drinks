import { CategoriesProvider } from "./context/CategoriesProvider"
import { MainLayout } from "./layout/MainLayout"
import { AppRoutes } from "./routes/AppRoutes"


function App() {

  return (
    <CategoriesProvider>
        <MainLayout>
          <AppRoutes/>
        </MainLayout>
    </CategoriesProvider>
    
  )
}

export default App
