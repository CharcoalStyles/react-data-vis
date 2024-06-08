import { PropsWithChildren } from "react";
import { Header } from "./header";

export const PageSetup = ({ children }: PropsWithChildren) => {
  return (
    <main className="bg-gray-900 h-screen">
      <div className="h-full">
        <Header />
        <div className="container m-auto mt-8">{children}</div>
      </div>
    </main>
  );
};
