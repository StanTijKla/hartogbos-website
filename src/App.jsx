import { C, FB } from "./theme";
import { Router } from "./router/Router";
import { useRouter } from "./router/useRouter";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { HomePage } from "./pages/HomePage";
import { DienstenPage } from "./pages/DienstenPage";
import { OverOnsPage } from "./pages/OverOnsPage";
import { ProjectenPage } from "./pages/ProjectenPage";
import { ContactPage } from "./pages/ContactPage";
import { OffertePage } from "./pages/OffertePage";
import { NotFoundPage } from "./pages/NotFoundPage";

const PAGES = {
  home: HomePage,
  diensten: DienstenPage,
  "over-ons": OverOnsPage,
  projecten: ProjectenPage,
  contact: ContactPage,
  offerte: OffertePage,
};

function CurrentPage() {
  const { page } = useRouter();
  const Page = PAGES[page] || NotFoundPage;
  return <Page />;
}

export default function App() {
  return (
    <Router>
      <div style={{ fontFamily: FB, background: C.bg, color: C.text, minHeight: "100vh", overflowX: "hidden" }}>
        <a href="#main" className="skip-link">Naar de inhoud</a>
        <Header />
        <main id="main">
          <CurrentPage />
        </main>
        <Footer />
      </div>
    </Router>
  );
}
