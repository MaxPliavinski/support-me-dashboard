import { LightDarkToggle } from "@/components/ui/light-dark-toggle";

type Props = {
  children?: React.ReactNode;
};

export default function LoggedOutLayout({ children }: Props) {
  return (
    <>
      <div className="min-h-screen flex flex-col items-center justify-center gap-4 p-24">
        {children}
      </div>
      <LightDarkToggle className="fixed top-[calc(50%-12px)] right-2" />
    </>
  );
}
