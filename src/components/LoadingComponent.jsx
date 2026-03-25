import Image from "next/image";
import loadGIF from "@/../public/download.gif";

export default function LoadingComponent() {
  return (
    <>
      <Image height={500} src={loadGIF} unoptimized alt="loading..." />
    </>
  );
}
