import { PageHeader } from "@bizflow/ui-components";
import { Admin } from "@bizflow/feature-admin";
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="feature-admin" title="Admin" description="Assembled from @bizflow/feature-admin." />
      <Admin />
    </>
  );
}
