import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import { UploadCurriculum } from './components/UploadCurriculum';
import { ScheduleView } from './components/ScheduleView';

// Placeholder components (We will build these out in future phases)
const Dashboard = () => <div className="p-8 text-center text-gray-600">Dashboard (Coming Soon)</div>;

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-gray-50">
        {/* Top Navigation Bar */}
        <nav className="bg-white shadow-sm border-b border-gray-200">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex justify-between h-16">
              <div className="flex items-center gap-8">
                <span className="text-xl font-bold text-blue-600">Teacher Planner</span>
                <div className="hidden md:flex gap-4">
                  <Link to="/" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Dashboard</Link>
                  <Link to="/upload" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Upload</Link>
                  <Link to="/schedule" className="text-gray-700 hover:text-blue-600 px-3 py-2 rounded-md text-sm font-medium">Schedule</Link>
                </div>
              </div>
            </div>
          </div>
        </nav>

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto py-6 sm:px-6 lg:px-8">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/upload" element={<UploadCurriculum />} />
            <Route path="/schedule" element={<ScheduleView />} />
          </Routes>
        </main>
      </div>
    </BrowserRouter>
  )
}

export default App
