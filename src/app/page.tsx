import { db } from "~/server/db";
export const dynamic = "force-dynamic";

/* eslint-disable @next/next/no-img-element */
export default async function HomePage() {
  const posts = await db.query.posts.findMany();
  const mockImagesURL = [
    "https://utfs.io/f/fa5179ce-1b44-4760-97b1-d247f67f36a2-s3302p.jpg",
    "https://utfs.io/f/fa5179ce-1b44-4760-97b1-d247f67f36a2-s3302p.jpg",
    "https://utfs.io/f/fa5179ce-1b44-4760-97b1-d247f67f36a2-s3302p.jpg",
    "https://utfs.io/f/fa5179ce-1b44-4760-97b1-d247f67f36a2-s3302p.jpg",
    "https://utfs.io/f/fa5179ce-1b44-4760-97b1-d247f67f36a2-s3302p.jpg",
    "https://utfs.io/f/fa5179ce-1b44-4760-97b1-d247f67f36a2-s3302p.jpg",
    "https://utfs.io/f/fa5179ce-1b44-4760-97b1-d247f67f36a2-s3302p.jpg",
    "https://utfs.io/f/fa5179ce-1b44-4760-97b1-d247f67f36a2-s3302p.jpg",
  ];
  return (
    <main>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {[...mockImagesURL].map((image, index) => (
          <div key={index} className="flex h-48 w-48 flex-col ">
            <img src={image} alt="image" />
          </div>
        ))}
      </div>
      <div>
        {posts.map((post, index) => (
          <div key={index}>{post.name}</div>
        ))}
      </div>
    </main>
  );
}
