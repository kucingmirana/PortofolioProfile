import "./globals.css";

export const metadata = {
  title: "Alexandro Wullur | Web Programmer",
  description:
    "Portofolio Alexandro Ricardo Wullur - Software Developer dengan 5+ tahun pengalaman di ASP.NET MVC dan C#.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  );
}
