import Header from '@/components/layout/header';
import CustomSwitch from '../components/shared/customSwitch';

export default function Home() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-background text-foreground transition-colors duration-300">
      <Header />
    </div>
  );
}
