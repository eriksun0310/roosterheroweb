import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { privacy } from "@/content/privacy";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.privacy,
};

export default function PrivacyPage() {
  return <LegalPage title={privacy.title} lastUpdated={privacy.lastUpdated} sections={privacy.sections} />;
}
