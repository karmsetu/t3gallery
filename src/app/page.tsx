import { SignedIn, SignedOut } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";
import { object } from "zod";
import { getMyImages } from "~/server/queries";
export const dynamic = "force-dynamic";

export default async function HomePage() {
  const images = await getMyImages();
  const Images = () => {
    if (!images) return <div>Some error has occured</div>;
    return (
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image) => (
          <div className="flex h-48 w-48 flex-col" key={image.id}>
            {/* <img src={image.url} alt={image.name} /> */}
            <Link href={`/img/${image.id}`}>
              <Image
                src={image.url}
                alt={image.name}
                // style={{ objectFit: "contain" }}
                width={480}
                height={480}
              />
              <span className="">{image.name}</span>
            </Link>
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
