import { Header } from "@/components/global/header";
import Footer from "./footer";

interface LayoutProps {
  children: React.ReactNode;
}

export function Layout({ children }: LayoutProps) {
  return (
    <div>
      <div style={{ backgroundColor: "aqua" }}>
        <Header />
      </div>
      <div>
        <main>{children}</main>
      </div>
      <div style={{ backgroundColor: "black" }}>
       <Footer/>
      </div>
    </div>
  );
}
