import { createContext, useContext, useMemo, type ReactNode } from "react";
import type { PlatformBridge } from "./PlatformBridge";
import { ElectronBridge } from "./ElectronBridge";
import { WebBridge } from "./WebBridge";

const BridgeContext = createContext<PlatformBridge | null>(null);

export function BridgeProvider({ children }: { children: ReactNode }) {
  const bridge = useMemo<PlatformBridge>(() => {
    const isElectron = Boolean((window as any).electron);
    const target = import.meta.env.VITE_PLATFORM;
    if (isElectron || target === "electron") return new ElectronBridge();
    return new WebBridge();
  }, []);

  return <BridgeContext.Provider value={bridge}>{children}</BridgeContext.Provider>;
}

export function useBridge(): PlatformBridge {
  const ctx = useContext(BridgeContext);
  if (!ctx) throw new Error("BridgeProvider is missing in the React tree");
  return ctx;
}


