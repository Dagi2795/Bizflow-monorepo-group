import { PageHeader } from "@bizflow/ui-components";
import { Reporting } from "@bizflow/feature-reporting";
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="feature-reporting" title="Reporting" description="Assembled from @bizflow/feature-reporting." />
      <Reporting />
    </>
  );
}
