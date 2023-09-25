import Container from "@/components/Container/Container";
import NavbarDashboard from "@/components/NavbarDashboard";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="px-5 max-w-[1440px] mx-auto">
      <NavbarDashboard />
      <hr />
      {children}
    </div>
  );
}
