import './App.css'
import Klass from './Klass';
import TestComponent from './TestComponent';
function App() {
  return (
    <AppContent />
  );
}

const AppContent = () => {
  return (
    <div>
      <Header />
       <TestComponent city='Gaya' state='Bihar' />
      <Klass age={20} />
      <Timer />
      <Footer />
    </div>
  )
}


const Timer = () => {
  const currDate = new Date();
  return (
    <h2>Today is {currDate.toLocaleDateString()}.</h2>
  )
}

const Footer = () => {
  return (
    <div>
      <p> This is a footer for This Page</p>
    </div>
  )
}

const Header = () => {
  return (
    <div>
      <p> Welcome to JSX </p>
    </div>
  )
}

export default App
