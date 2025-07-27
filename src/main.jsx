import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import Container from './components/Container'
import { Provider } from 'mobx-react'
import rootStore from './stores/rootStore'

createRoot(document.getElementById('root')).render(
  <Provider {...rootStore}>
    <StrictMode>
      <Container/>
    </StrictMode>
  </Provider>
)
