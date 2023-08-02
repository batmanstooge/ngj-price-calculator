import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.ng.price-calculator",
  appName: "price-calculator",
  webDir: "dist",
  server: {
    androidScheme: "https",
  },
};

export default config;
