import { PageHeader } from "@bizflow/ui-components";
import { Inventory } from "@bizflow/feature-inventory";
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="feature-inventory" title="Inventory" description="Assembled from @bizflow/feature-inventory." />
      <Inventory />
    </>
  );
}
