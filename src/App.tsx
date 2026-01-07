import { useState } from 'react';
import Overview from '../src/components/Overview';
import CopyModal from './components/CopyModal';
import EmailForm from './components/EmailForm';

function App() {
  const [formData, setFormData] = useState({
    name: '',
    engName: '',
    team: '',
    part: '',
    duty: '',
    engDuty: '',
    phoneNumber: '',
    email: '',
    position: '',
    engPosition: '',
  });

  const [isCopyModalOpen, setIsCopyModalOpen] = useState(false);

  return (
    <>
      <div className="flex h-screen w-screen items-center justify-center bg-Color-Background-Alternative">
        <div className="flex items-center justify-center gap-20">
          <EmailForm
            formData={formData}
            setFormData={setFormData}
            onOpenModal={() => setIsCopyModalOpen(true)}
          />
          <Overview formData={formData} />
        </div>
      </div>
      {isCopyModalOpen && (
        <div
          onClick={() => setIsCopyModalOpen(false)}
          className="fixed inset-0 z-10 flex items-center justify-center bg-black/40"
        >
          <CopyModal
            formData={formData}
            onOpenModal={() => setIsCopyModalOpen(false)}
          />
        </div>
      )}
    </>
  );
}

export default App;
