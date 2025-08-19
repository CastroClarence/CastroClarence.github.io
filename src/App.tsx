import './App.css'
import Body from './components/Body'
import Credentials from './components/Credentials'
// import Navigation from './components/Navigation'

function App() {

  return (
    <div className='lg:px-24 px-5 pt-15 flex flex-col gap-4'>
      {/* <Navigation /> */}
      <div className='flex gap-4 flex-col-reverse lg:flex-row'>
        <Credentials/>
        <Body/>
      </div>
    </div>
  )
}

export default App
