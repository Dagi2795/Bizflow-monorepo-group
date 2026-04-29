import { PageHeader } from "@bizflow/ui-components";
import { Analytics } from "@bizflow/feature-analytics";
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="feature-analytics" title="Analytics" description="Assembled from @bizflow/feature-analytics." />
      <Analytics />
    </>
  );
}
