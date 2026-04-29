import { PageHeader } from "@bizflow/ui-components";
import { Profile } from "@bizflow/feature-profile";
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="feature-profile" title="Profile" description="Assembled from @bizflow/feature-profile." />
      <Profile />
    </>
  );
}
