import * as React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './components/Home/Home';
import Setting from './components/Setting/Setting';
import MainDrawer from './components/Drawer/MainDarwer';
import './App.css'
import UpdateDocument from './components/File/UpdateDocument';
import Profile from './Pages/Profile/Profile';
import Workflow from './Pages/Workflow/Workflow';
import ConvertToSearchable from './Pages/Toolkit/ConvertToSearchable';
import RemoveDuplicates from './Pages/Toolkit/RemoveDuplicates';
import FileChecker from './Pages/Toolkit/FileChecker';
import FileSort from './Pages/Toolkit/FileSort';
import Convert from './Pages/Toolkit/Convert';
import TextFileAnalysis from './Pages/Toolkit/TextFileAnalysis';
import FileOperation from './Pages/Toolkit/FileOperation';
import MoveContent from './Pages/Toolkit/MoveContent';
import ErrorCorrection from './Pages/Toolkit/ErrorCorrection';
import RenameFile from './Pages/Toolkit/RenameFile';

function App() {
  return (
    <Router>
      <MainDrawer>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/editdetails" element={<UpdateDocument />} />
          <Route path="/analyze" element={<Setting />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/workflow" element={<Workflow />} />
          <Route path="/convert-to-searchable" element={<ConvertToSearchable />} />
          <Route path="/remove-duplicates" element={<RemoveDuplicates />} />
          <Route path="/file-checker" element={<FileChecker />} />
          <Route path="/file-sorter" element={<FileSort />} />
          <Route path="/convert" element={<Convert />} />
          <Route path="/text-file-analysis" element={<TextFileAnalysis />} />
          <Route path="/file-operation" element={<FileOperation />} />
          <Route path="/move-content" element={<MoveContent />} />
          <Route path="/error-correction" element={<ErrorCorrection />} />
          <Route path="/rename-file" element={<RenameFile />} />
        </Routes>
      </MainDrawer>
    </Router>
  );
}

export default App;
