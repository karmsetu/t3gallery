import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
// import { useRouter } from "next/navigation";
// import { UploadButton } from "~/utils/uploadthing";
import { SimpleUploadButton } from "./simple-upload-button";
// import { SignedOut } from "node_modules/@clerk/nextjs/dist/types/components.server";

export function TopNav() {
  // const router = useRouter();
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div className="flex flex-row">
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          {/* <UploadButton
            endpoint="imageUploader"
            onClientUploadComplete={() => {
              router.refresh();
            }}
          /> */}
          <SimpleUploadButton />
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
