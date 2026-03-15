import { useState } from "react";

interface MockDataProps {
  id: number;
  name: string;
}

// This is for frontend only
interface EditingMockDataProps extends MockDataProps {
  isEditing: boolean;
}

const MOCK_DATA: MockDataProps[] = [
  {
    id: 712489,
    name: "John Doe"
  },
  {
    id: 162489,
    name: "Jake Doe"
  },
  {
    id: 247185,
    name: "Blake Doe"
  },
  {
    id: 375184,
    name: "Jane Doe"
  },
  {
    id: 812940,
    name: "Alice Doe"
  },
];

// Add the isEditing to each
const EDITING_MOCK_DATA: EditingMockDataProps[] = MOCK_DATA.map(item => ({ ...item, isEditing: false }));

export default function App() {

  // Simulating fetched Data
  const [fetchedData, setFetchedData] = useState<MockDataProps[]>(MOCK_DATA);
  const [editingData, setEditingData] = useState<EditingMockDataProps[]>(EDITING_MOCK_DATA); // For temporary UI display

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-neutral-300 text-neutral-800">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Vite React + Tailwind + React Hook Form</h1>
        <h1 className="text-2xl italic">Project Template</h1>
      </div>
    </div>
  );
}