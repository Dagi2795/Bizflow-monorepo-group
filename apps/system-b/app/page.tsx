import { Login } from "@bizflow/feature-auth";
import { Profile } from "@bizflow/feature-profile";

export default function SystemB() {
  return (
    <main style={{ padding: "40px", maxWidth: "1000px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <header style={{ marginBottom: "40px", borderBottom: "1px solid #ccc", paddingBottom: "20px" }}>
        <h1 style={{ fontSize: "32px", margin: "0 0 10px 0" }}>System B</h1>
        <p style={{ color: "#666", margin: 0 }}>Individual Assembly Component</p>
      </header>

      <section style={{ marginBottom: "60px" }}>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>1. Authentication Module</h2>
        <Login />
      </section>

      <section>
        <h2 style={{ fontSize: "24px", marginBottom: "20px" }}>2. User Profile Module</h2>
        <Profile />
      </section>
    </main>
  );
}