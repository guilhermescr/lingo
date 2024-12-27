import { Button } from "@/components/ui/button";

export default function Home() {
  return (
    <div className="flex flex-col gap-4 p-5">
      <div>
        <Button size="lg">Large Button</Button>
        <button
          type="button"
          className="my-4 p-2 bg-green-500 hover:bg-green-600/90"
        >
          Limpar
        </button>
      </div>
    </div>
  );
}
