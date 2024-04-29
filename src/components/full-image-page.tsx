/* eslint-disable @next/next/no-img-element */
import { clerkClient } from "@clerk/nextjs/server";
import { deleteImage, getImage } from "~/server/queries";
import { Button } from "./ui/button";

export default async function FullPageImageView(props: { id: number }) {
  const image = await getImage(props.id);
  if (!image) throw new Error(`no image`);
  const uploaderInfo = await clerkClient.users.getUser(image?.userId);
  return (
    <div className="flex h-full w-full min-w-0 bg-slate-900/30">
      <div className="flex-shrink items-center justify-center">
        <img src={image?.url} alt={image?.name} className=" object-contain" />
      </div>
      <div className="flex w-48 flex-shrink flex-col gap-2 border-l">
        <div className="border-b  p-4 text-center text-lg">{image?.name}</div>
        <div className="flex flex-col">
          Uploaded by:
          <span className="px-2">{uploaderInfo.fullName}</span>
        </div>
        <div className="flex flex-col">
          Created on:
          <span className="px-2">
            {new Date(image.createdAt).toLocaleDateString()}
          </span>
        </div>
        <div className="p-2">
          <form
            action={async () => {
              "use server";
              await deleteImage(props.id);
            }}
          >
            <Button variant={"destructive"}>Delete</Button>
          </form>
        </div>
      </div>
    </div>
  );
}
