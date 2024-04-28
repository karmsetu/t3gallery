import "server-only";
import { db } from "./db";
import { auth } from "@clerk/nextjs/server";

export async function getMyImages() {
  const user = auth();
  if (!user.userId) console.log(`unauthorised`);
  //  if (!user.userId) throw new Error("Unauthorised");
  else {
    const images = await db.query.images.findMany({
      where: (model, { eq }) => eq(model.userId, user.userId),
      orderBy: (model, { desc }) => desc(model.id),
    });
    return images;
  }
}
