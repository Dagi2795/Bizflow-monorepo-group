import { PageHeader } from "@bizflow/ui-components";
import { Orders } from "@bizflow/feature-orders";
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="feature-orders" title="Orders" description="Assembled from @bizflow/feature-orders." />
      <Orders />
    </>
  );
}
