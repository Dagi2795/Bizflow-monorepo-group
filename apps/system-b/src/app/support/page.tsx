import { PageHeader } from "@bizflow/ui-components";
import { Support } from "@bizflow/feature-support";
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="feature-support" title="Support" description="Assembled from @bizflow/feature-support." />
      <Support />
    </>
  );
}
