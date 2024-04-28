import { SignedIn, SignedOut } from "@clerk/nextjs";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic";

/* eslint-disable @next/next/no-img-element */
export default async function HomePage() {
  const images = await getMyImages();
  const Images = () => {
    if (!images) return <div>Some error has occured</div>;
    return (
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image) => (
          <div className="flex h-48 w-48 flex-col" key={image.id}>
            <img src={image.url} alt={image.name} />
            <span className="">{image.name}</span>
          </div>
        ))}
      </div>
    );
  };
  return (
    <main>
      <SignedOut>
        <div className="h-full w-full text-center text-2xl ">
          to view the gallery please sign in first
        </div>
      </SignedOut>
      <SignedIn>
        <Images />
      </SignedIn>
    </main>
  );
}
