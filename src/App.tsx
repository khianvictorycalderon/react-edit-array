import { useState } from "react";

interface MockDataProps {
  id: number;
  name: string;
}

// This is for frontend only
interface EditingMockDataProps extends MockDataProps {
  isEditing: boolean;
}

// Sample fetched data from server
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

// Add the { isEditing: false } to each, so it can be editted individually
const EDITING_MOCK_DATA: EditingMockDataProps[] = MOCK_DATA.map(item => ({ ...item, isEditing: false }));

export default function App() {

  // Simulating fetched Data
  const [users, setUsers] = useState<EditingMockDataProps[]>(EDITING_MOCK_DATA); // For temporary UI display

  const handleEditingMode = async(id: number) => {
    setUsers(prev => prev.map(item => item.id === id ? { ...item, isEditing: true} : item));
  }

  const handleInputOnChange = async(id: number, value: string) => {
    setUsers(prev => prev.map(item => item.id === id ? { ...item, name: value } : item));
  }

  const handleEditingDone = async(action: "save" | "cancel", id: number) => {
    
    setUsers(prev =>
      prev.map(user => {
        if (user.id != id) return user;

        if (action === "save") {
          return { ...user, isEditing: false }
        }

        if (action === "cancel") {
          const original = MOCK_DATA.find(u => u.id === id)!;
          return { ...original, isEditing: false }
        }

        return user;
      })
    );

    // Simulating fetch or axios to backend
    // Logic here...
  }

  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-neutral-300 text-neutral-800">
      <div className="flex flex-col gap-2">
        {users.map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex flex-row gap-4 items-center">
            {item.isEditing ? (
              <>
                <input className="bg-white p-2 rounded-md" type="text" value={item.name} onChange={(e) => handleInputOnChange(item.id, e.target.value)} />
                <button onClick={() => handleEditingDone("save", item.id)} className="rounded-md px-6 py-2 bg-green-600 hover:bg-green-500 text-white cursor-pointer transition duration-300">Save</button>
                <button onClick={() => handleEditingDone("cancel", item.id)} className="rounded-md px-6 py-2 bg-red-600 hover:bg-red-500 text-white cursor-pointer transition duration-300">Cancel</button>
              </>
            ) : (
              <>
                <p className="font-semibold">
                  {item.name}
                </p>
                <button 
                  onClick={() => handleEditingMode(item.id)}
                  className="rounded-md px-6 py-2 bg-blue-600 text-white cursor-pointer hover:bg-blue-500 transition duration-300"
                  >
                  Edit
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}