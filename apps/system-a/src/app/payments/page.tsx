import { PageHeader } from "@bizflow/ui-components";
import { Payments } from "@bizflow/feature-payments";
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="feature-payments" title="Payments" description="Assembled from @bizflow/feature-payments." />
      <Payments />
    </>
  );
}
