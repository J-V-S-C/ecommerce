import CustomSwitch from '../shared/customSwitch';

export default function Header() {
  return (
    <header className="fixed top-0 w-full bg-card shadow-md p-4">
      <div className="flex justify-between items-center">
        <p className="text-lg font-semibold">Hey</p>
        <CustomSwitch />
      </div>
    </header>
  );
}
