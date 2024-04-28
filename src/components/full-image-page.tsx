/* eslint-disable @next/next/no-img-element */
import { getImage } from "~/server/queries";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  return (
    <div className="flex h-full w-full min-w-0 bg-green-500">
      <div className="flex-shrink items-center justify-center">
        <img src={image?.url} alt={image?.name} className=" object-contain" />
      </div>
      <div className="flex w-48 flex-shrink flex-col border-l">
        <div className="text-xl font-bold ">{image?.name}</div>
      </div>
    </div>
  );
}
