import type { PlatformBridge } from "./PlatformBridge";
import type { UserSettings } from "@/lib/schemas";
import type {
  AppOutput,
  ChatResponseEnd,
  FileAttachment,
  ComponentSelection,
} from "@/ipc/ipc_types";
import { IpcClient } from "@/ipc/ipc_client";

export class ElectronBridge implements PlatformBridge {
  private readonly ipc: IpcClient;

  constructor() {
    this.ipc = IpcClient.getInstance();
  }

  async getUserSettings(): Promise<UserSettings> {
    return this.ipc.getUserSettings();
  }

  async setUserSettings(settings: Partial<UserSettings>): Promise<UserSettings> {
    return this.ipc.setUserSettings(settings);
  }

  async listApps(): Promise<any> {
    return this.ipc.listApps();
  }

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
    this.ipc.streamMessage(prompt, options as any);
  }

  async runApp(appId: number, onOutput: (output: AppOutput) => void): Promise<void> {
    return this.ipc.runApp(appId, onOutput);
  }

  onMcpToolConsentRequest(
    handler: (payload: {
      requestId: string;
      serverId: number;
      serverName: string;
      toolName: string;
      toolDescription?: string | null;
      inputPreview?: string | null;
    }) => void,
  ): () => void {
    return this.ipc.onMcpToolConsentRequest(handler);
  }

  respondToMcpConsentRequest(
    requestId: string,
    decision: "accept-once" | "accept-always" | "decline",
  ): void {
    this.ipc.respondToMcpConsentRequest(requestId, decision);
  }
}


