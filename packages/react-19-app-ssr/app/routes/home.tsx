import type { Route } from "./+types/home";
import { state } from "shared-state";
import { useSnapshot } from "valtio";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "New React Router App" },
    { name: "description", content: "Welcome to React Router!" },
  ];
}

export default function Home() {
  const snap = useSnapshot(state);

  return (
    <>
      <h1>React Router</h1>
      <div className="card">
        <button onClick={() => ++state.count}>count is {snap.count}</button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}
