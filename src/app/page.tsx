import Image from "next/image";
import TaskList from "@/components/TaskList";
import TaskSheet from "@/components/TaskSheet";

export default function Home() {
  return (
    <main>
      <div>
        <TaskSheet />
      </div>
    </main>
  );
}
