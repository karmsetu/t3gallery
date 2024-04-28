import { getImage } from "~/server/queries";
import { Modal } from "./modal";
import FullPageImageView from "~/components/full-image-page";

export default function PhotoModal({
  params: { id: photoId },
}: {
  params: { id: number };
}) {
  console.log(photoId);
  console.log({ photoId });

  return (
    <Modal>
      <FullPageImageView id={photoId} />
    </Modal>
  );
}
