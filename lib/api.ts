export interface SubscribeResponse {
  message?: string;
  error?: string;
}

export async function subscribe(
  email: string,
  token: string,
): Promise<{ ok: true } | { ok: false; error: string }> {
  try {
    const res = await fetch("/api/subscribe", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, token }),
    });

    const data: SubscribeResponse = await res.json();

    if (res.ok) {
      return { ok: true };
    }
    return { ok: false, error: data.error || "Submission failed." };
  } catch {
    return { ok: false, error: "Network error. Please try again." };
  }
}
