export default function CianAboutUsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div>
      {children}
      &copy; Next JS 마스터로 가는 길
    </div>
  );
}
