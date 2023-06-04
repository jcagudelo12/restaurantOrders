import {GlobalProvider} from './context/GlobalState'
import Header from './components/Header'
import OrdersForm from './components/OrdersForm'

function App() {

  return (
    <GlobalProvider>
      <Header/>
      <OrdersForm/>
      <h1>
        hello world
      </h1>
    </GlobalProvider>
  )
}

export default App
