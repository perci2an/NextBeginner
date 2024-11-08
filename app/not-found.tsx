import Navigation from "../components/navigation";

export const metadata = {
  title: "Not found",
};

export default function NotFound() {
  return (
    <div>
      <Navigation />
      <h1>존재하지 않는 페이지</h1>
    </div>
  );
}
