import type { Metadata } from 'next'
import LegalPage, { LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Privacy Policy',
  alternates: {
    canonical: 'https://pacbag.app/privacy',
  },
}

export default function PrivacyPage() {
  return (
    <LegalPage title="Privacy Policy" lastUpdated="November 2026">
      <p className="mt-6">
        Vercel hosts pacbag.app and logs visits, including IP addresses. The site sets no cookies and has no analytics. Everything below, apart from the email line, is about the PacBag app.
      </p>

      <LegalSection title="Key points">
        <ul>
          <li>The PacBag app doesn&apos;t collect personal data</li>
          <li>All data stays in your iCloud account</li>
          <li>We cannot access your information</li>
          <li>You have complete control</li>
        </ul>
      </LegalSection>

      <LegalSection title="1. Information collection">
        <p>The PacBag app doesn&apos;t collect personal data, and it doesn&apos;t send or store personal information on external servers:</p>
        <ul>
          <li>No user accounts or registration required</li>
          <li>No analytics or tracking</li>
          <li>No advertising</li>
          <li>No data mining</li>
          <li>No third-party data sharing</li>
        </ul>
      </LegalSection>

      <LegalSection title="2. Data storage">
        <h3 className="font-bold">iCloud storage (CloudKit)</h3>
        <ul>
          <li>All trips, bags, items, and packing lists are stored in your personal iCloud container</li>
          <li>Data is set to sync between your devices signed into the same iCloud account</li>
          <li>Only you can access your data through your Apple ID</li>
          <li>We cannot see, access, or retrieve any of your information</li>
        </ul>
        <h3 className="font-bold">Local storage</h3>
        <ul>
          <li>App preferences and settings</li>
          <li>Temporary cache data</li>
          <li>Notification schedules</li>
        </ul>
      </LegalSection>

      <LegalSection title="3. Photos and media">
        <ul>
          <li>Photos you add are copied into the item and stored with your PacBag data, which is set to sync through your own iCloud account</li>
          <li>The app only accesses photos you explicitly select</li>
          <li>PacBag uses Apple&apos;s photo picker, so it only sees photos you pick</li>
        </ul>
      </LegalSection>

      <LegalSection title="4. Notifications">
        <ul>
          <li>All reminders are local notifications</li>
          <li>No push notification servers are used</li>
          <li>No notification data is transmitted externally</li>
          <li>You control all notification settings</li>
        </ul>
      </LegalSection>

      <LegalSection title="5. Data security">
        <p>Your data is protected by:</p>
        <ul>
          <li>Apple&apos;s iCloud security infrastructure</li>
          <li>iCloud data encrypted in transit and at rest, and end-to-end if you have Advanced Data Protection turned on</li>
          <li>Your device passcode, Face ID or Touch ID</li>
          <li>iOS app sandboxing</li>
        </ul>
      </LegalSection>

      <LegalSection title="6. Your rights">
        <p>You have complete control:</p>
        <ul>
          <li>Delete individual items, bags, or trips at any time</li>
          <li>Use Reset All Data in Settings to delete trips, bags, items and categories. Custom templates stay. Deleting the app doesn&apos;t delete your iCloud copy.</li>
          <li>Disable iCloud sync in your device&apos;s iCloud settings</li>
          <li>Deleting the app removes all local data</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Children's privacy">
        <p>PacBag is rated 4+ and suitable for all ages. The PacBag app doesn&apos;t collect personal information from anyone.</p>
      </LegalSection>

      <LegalSection title="8. Third-party services">
        <p>The PacBag app doesn&apos;t talk to any server of ours. It uses Apple&apos;s frameworks, and your data is set to sync through iCloud:</p>
        <ul>
          <li>CloudKit for data sync</li>
          <li>PhotosUI for image selection</li>
          <li>UserNotifications for local reminders</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. GDPR compliance">
        <p>For EU users:</p>
        <ul>
          <li>The app collects no personal data</li>
          <li>Data minimization</li>
          <li>User control over all data</li>
          <li>Right to deletion</li>
          <li>Data portability (via iCloud)</li>
        </ul>
      </LegalSection>

      <LegalSection title="Contact">
        <p>If you have any questions about this Privacy Policy or PacBag&apos;s privacy practices, contact the developer, Enricco Gemha, at <a href="mailto:me@enriccogemha.dev">me@enriccogemha.dev</a>.</p>
        <p>If you email us, your address and message go through Cloudflare Email Routing to my mailbox at Gmail. I keep them for 12 months.</p>
      </LegalSection>
    </LegalPage>
  )
}
