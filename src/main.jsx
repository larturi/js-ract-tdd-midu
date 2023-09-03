import { createRoot } from 'react-dom/client'
import { Calculator } from './reactCalculator'

import './styles.css'

createRoot(
  document.getElementById('root')
).render(
  <Calculator />
)
