import UserCard from "./components/UserCard"
import Maharaj from './assets/chhtraptishivaji.jpg'
import Jijamata from './assets/Jijamata.jpg'
import MahatamaPhule from './assets/mahatmaphule.jpg'
import './App.css'


function App() {
  

  return (
    <div className="container">
    <UserCard name="Chattrapati Shivaji Maharaj" desc="Indian ruler and a member of the Bhonsle dynasty" image={Maharaj}/>
    <UserCard name="Jijabai" desc="Jijabai was Shahjiraje's wife and Chatrapati Shivaji Maharaj's mother" image={Jijamata}/>
    <UserCard name="Jyotirao Phule" desc="Indian social activist, businessman, anti-caste social reformer and writer " image={MahatamaPhule}/>
    </div>
  )
}

export default App
