import { PageHeader } from "@bizflow/ui-components";
import { Login } from "@bizflow/feature-auth";
export default function Page() {
  return (
    <>
      <PageHeader eyebrow="feature-auth" title="Login" description="Assembled from @bizflow/feature-auth." />
      <Login />
    </>
  );
}
