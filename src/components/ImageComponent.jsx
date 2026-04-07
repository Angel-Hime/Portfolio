import Image from "next/image";

export default function ImageComponent({ c, s, a, w, h }) {
  // have loading state imported here
  return (
    //  loading component here
    <Image
      className={c}
      src={s}
      alt={`image showing the web app ${a}`}
      // fix the sizing it is a bit big rn
      width={w}
      height={h}
      loading="eager"
    />
  );
}
