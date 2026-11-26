import type { ReactNode } from "react";
import { ConfigProvider } from "antd";

type Props = {
  dark: boolean;
  children: ReactNode;
};

/** No tema escuro, ajusta os botões do antd ao azul das faixas (topo e contato). */
export default function BandTheme({ dark, children }: Props) {
  return (
    <ConfigProvider
      theme={dark ? { token: { colorBgContainer: "#12213a", colorBorder: "#2f4568" } } : undefined}
    >
      {children}
    </ConfigProvider>
  );
}
