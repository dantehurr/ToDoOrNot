import Image from "next/image";

import TaskSheet from "@/components/TaskSheet";

export default function Home() {
  return (
    <main className="mx-10 my-40">
      <div className="lg:flex lg:justify-center my-auto">
        <TaskSheet />
      </div>
      <footer className="flex justify-center pt-10">
        <img className="w-28" src="/logo.svg"/>
      </footer>
    </main>
  );
}
