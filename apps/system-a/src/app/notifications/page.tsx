import { PageHeader } from "@bizflow/ui-components";
import { Notifications } from "@bizflow/feature-notifications";
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="feature-notifications" title="Notifications" description="Assembled from @bizflow/feature-notifications." />
      <Notifications />
    </>
  );
}
