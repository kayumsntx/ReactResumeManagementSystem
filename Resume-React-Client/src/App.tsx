import './App.css'
import EmployeeManagement from './components/EmployeeManagement'

export const App: React.FC = () => {
  return (
    <div className='min-vh-100 bg-danger-subtle'>
      <nav className='navbar navbar-expand-lg text-black mb-4'>
        <div className='container'>
          <a className='navbar-brand' href='#home'>
            Resume Management
          </a>
        </div>
      </nav>
      <main>
        <EmployeeManagement />
      </main>
    </div>
  );
};

export default App