import "../styles/global.css";
import Navigation from "../components/navigation";

export const metadata = {
  title: {
    template: "%s | GiGamakhinae",
    default: "Metadata conjugation",
  },
  description: "The best of the best",
};

export default function CianLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
