import { SignedOut, SignInButton, SignedIn, UserButton } from "@clerk/nextjs";
// import { SignedOut } from "node_modules/@clerk/nextjs/dist/types/components.server";

export function TopNav() {
  return (
    <nav className="flex w-full items-center justify-between p-4 text-xl font-semibold">
      <div>Gallery</div>
      <div>
        <SignedOut>
          <SignInButton />
        </SignedOut>
        <SignedIn>
          <UserButton />
        </SignedIn>
      </div>
    </nav>
  );
}
