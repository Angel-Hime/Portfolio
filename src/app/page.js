import SideScroll from "@/components/SideScroll";

export default function Home() {
  return (
    <>
      <SideScroll intro={true} route={"api/projects/bootcamp"} />
      <SideScroll intro={false} route={"api/projects/personal"} />
    </>
  );
}
