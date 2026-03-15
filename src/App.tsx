interface MockDataProps {
  id: number;
  name: string;
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

export default function App() {
  return (
    <div className="flex min-h-screen w-screen items-center justify-center bg-neutral-300 text-neutral-800">
      <div className="text-center">
        <h1 className="text-2xl font-bold">Vite React + Tailwind + React Hook Form</h1>
        <h1 className="text-2xl italic">Project Template</h1>
      </div>
    </div>
  );
}