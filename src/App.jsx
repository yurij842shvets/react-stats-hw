import './App.css'
import Statistics from './Statistics'
import statsData from './statistics.json'

function App() {

  return (
    <>
      <Statistics stats={statsData}/>
    </>
  )
}

export default App
