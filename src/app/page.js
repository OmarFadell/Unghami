import Image from "next/image";
import Sidebar from "../../Components/Sidebar";
export default function Home() {
  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 overflow-hidden">
      <main className="flex flex-col gap-[32px] row-start-2 sm:items-start">
        <Sidebar/>
        <h1> hi guys</h1>
      </main>
        
    </div>
  );
}
