import { Inter } from 'next/font/google';
// import Timeline from '../components/Timeline';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  return (
    <main className={`flex min-h-screen flex-col items-center justify-between p-24 ${inter.className}`}>
      <div>
        <h1 className="text-4xl font-bold">Welcome to My Portfolio</h1>
        <p className="text-lg">I am a Software Engineer with 4+ years of experience. Look at my apecializations & key skills.</p>
      </div>
      <div>
        <h2 className="text-3xl">My Career Journey</h2>
        {/* <Timeline /> */}
      </div>
    </main>
  );
}