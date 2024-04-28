import FullPageImageView from "~/components/full-image-page";

export default function PhotoPage({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
  return <FullPageImageView id={photoId} />;
}
