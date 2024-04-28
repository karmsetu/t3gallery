import { getImage } from "~/server/queries";

export default async function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
  console.log(photoId);
  console.log({ photoId });

  const image = await getImage(photoId);
  return (
    <div>
      <img src={image?.url} alt={image?.name} className="h-96 w-96" />
    </div>
  );
}
