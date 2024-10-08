import HomeButton from "@/components/HomeButton";


export default function SubPages({ children }) {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center py-20 px-16">
    <HomeButton />
        {children}
    </main>
  );
}
