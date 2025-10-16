import type { UserSettings } from "@/lib/schemas";
import type {
  AppOutput,
  ChatResponseEnd,
  FileAttachment,
  ComponentSelection,
} from "@/ipc/ipc_types";

export interface PlatformBridge {
  getUserSettings(): Promise<UserSettings>;
  setUserSettings(settings: Partial<UserSettings>): Promise<UserSettings>;

  listApps(): Promise<any>;

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
  ): void;

  runApp(appId: number, onOutput: (output: AppOutput) => void): Promise<void>;

  // MCP consent
  onMcpToolConsentRequest(
    handler: (payload: {
      requestId: string;
      serverId: number;
      serverName: string;
      toolName: string;
      toolDescription?: string | null;
      inputPreview?: string | null;
    }) => void,
  ): () => void;
  respondToMcpConsentRequest(
    requestId: string,
    decision: "accept-once" | "accept-always" | "decline",
  ): void;
}


