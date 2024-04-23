import { db } from "~/server/db";
export const dynamic = "force-dynamic";

/* eslint-disable @next/next/no-img-element */
export default async function HomePage() {
  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id),
  });
  return (
    <main>
      <div className="flex flex-wrap justify-center gap-4 p-4">
        {images.map((image) => (
          <div className="flex h-48 w-48 flex-col" key={image.id}>
            <img src={image.url} alt={image.name} />
            <span className="">{image.name}</span>
          </div>
        ))}
      </div>
    </main>
  );
}
