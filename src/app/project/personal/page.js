import SideScroll from "@/components/SideScroll";

export default function PersonalProjects() {
  return (
    <>
      {/*  */}
      <h1>Personal Projects</h1>
      <SideScroll route={"../api/projects/personal"} />
      {/*  */}
    </>
  );
}
