import type { Metadata } from "next";
import LegalPage from "@/components/LegalPage";
import { accountDeletion } from "@/content/account-deletion";
import { site } from "@/content/site";

export const metadata: Metadata = {
  title: site.accountDeletion,
};

export default function AccountDeletionPage() {
  return <LegalPage title={accountDeletion.title} lastUpdated={accountDeletion.lastUpdated} sections={accountDeletion.sections} />;
}
