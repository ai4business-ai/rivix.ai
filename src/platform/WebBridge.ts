import type { PlatformBridge } from "./PlatformBridge";
import type { UserSettings } from "@/lib/schemas";
import type {
  AppOutput,
  ChatResponseEnd,
  FileAttachment,
  ComponentSelection,
} from "@/ipc/ipc_types";

const API_BASE = import.meta.env.VITE_API_BASE || "/api";

async function http<T>(path: string, init?: RequestInit): Promise<T> {
  const res = await fetch(`${API_BASE}${path}`, {
    headers: { "Content-Type": "application/json" },
    credentials: "include",
    ...init,
  });
  if (!res.ok) {
    const text = await res.text();
    throw new Error(text || `HTTP ${res.status}`);
  }
  return (await res.json()) as T;
}

export class WebBridge implements PlatformBridge {
  async getUserSettings(): Promise<UserSettings> {
    return http<UserSettings>("/settings");
  }

  async setUserSettings(settings: Partial<UserSettings>): Promise<UserSettings> {
    return http<UserSettings>("/settings", {
      method: "POST",
      body: JSON.stringify(settings),
    });
  }

  async listApps(): Promise<any> {
    return http<any>("/apps");
  }

  // Placeholder stream implementation using SSE for web
  streamMessage(
    prompt: string,
    options: {
      selectedComponent: ComponentSelection | null;
      chatId: number;
      redo?: boolean;
      attachments?: FileAttachment[];
      onUpdate: (messages: any[]) => void;
      onEnd: (response: ChatResponseEnd) => void;
      onError: (error: string) => void;
      onProblems?: (problems: any) => void;
    },
  ): void {
    // Not implemented yet; surface a clear error for now
    options.onError("Streaming not implemented in web yet");
  }

  async runApp(_appId: number, _onOutput: (output: AppOutput) => void): Promise<void> {
    throw new Error("runApp is not implemented in web yet");
  }

  onMcpToolConsentRequest(): () => void {
    return () => {};
  }

  respondToMcpConsentRequest(): void {}
}


