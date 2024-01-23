import Image from "next/image";
import TaskList from "@/components/TaskList";
import TaskSheet from "@/components/TaskSheet";

export default function Home() {
  return (
    <main className="mx-10 my-40">
      <div className="lg:flex lg:justify-center my-auto">
        <TaskSheet />
      </div>
    </main>
  );
}
