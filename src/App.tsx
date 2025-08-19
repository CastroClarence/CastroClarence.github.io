import './App.css'
import Body from './components/Body'
import Credentials from './components/Credentials'
// import Navigation from './components/Navigation'

function App() {

  return (
    <div className='px-24 pt-5 flex flex-col gap-4'>
      {/* <Navigation /> */}
      <div className='flex gap-4'>
        <Credentials/>
        <Body/>
      </div>
    </div>
  )
}

export default App
