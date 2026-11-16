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
          <li>Your trips, bags and items stay in your iCloud account, and we can&apos;t read them there</li>
          <li>AI estimates are off until you turn them on</li>
          <li>When they&apos;re on, the item names you type and the photos you choose go to our server and to Anthropic</li>
          <li>You can turn them off any time in Settings</li>
          <li>To show a photo of where you&apos;re going, the app sends a trip&apos;s destination to Wikipedia</li>
        </ul>
      </LegalSection>

      <LegalSection title="1. Information collection">
        <p>We collect user data only if you turn on AI estimates. With them off, the PacBag app doesn&apos;t send your data to any server of ours.</p>
        <p>With AI estimates on, the app sends these when it needs an estimate:</p>
        <ul>
          <li>Item names you typed that the app can&apos;t answer on its own</li>
          <li>Photos you choose to fill in an item, shrunk first and with their location data removed</li>
          <li>Your category names</li>
          <li>Your language, so a name from a photo comes back in it</li>
          <li>Apple&apos;s signed record that this copy of the app came from the App Store. We use it to limit requests per day, and we hold only a hash of it that changes daily, in memory</li>
          <li>Your IP address and the time of the request, which our host logs</li>
        </ul>
        <p>PacBag has no user accounts, analytics, tracking or advertising, and we don&apos;t sell data.</p>
      </LegalSection>

      <LegalSection title="AI estimates">
        <p>PacBag uses artificial intelligence to estimate an item&apos;s weight and category, and to fill in an item from a photo. The model is Claude, from Anthropic. It reads what you send and generates the estimate. Our server passes your request along and doesn&apos;t save the names or photos.</p>
        <p>Estimates can be wrong. PacBag marks them as estimates, and a weight you type is never replaced by one. Check anything that matters, like an airline limit.</p>
        <p>If something you send suggests you may be thinking about harming yourself, PacBag stops and shows support information.</p>
      </LegalSection>

      <LegalSection title="2. Data storage">
        <h3 className="font-bold">iCloud storage (CloudKit)</h3>
        <ul>
          <li>All trips, bags, items, and packing lists are stored in your personal iCloud container</li>
          <li>Data is set to sync between your devices signed into the same iCloud account</li>
          <li>Only you can access your data through your Apple ID</li>
          <li>We can&apos;t see or retrieve what&apos;s in your iCloud container</li>
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
          <li>A photo leaves your device only if AI estimates are on and you choose it to fill in an item</li>
          <li>A photo you add to a trip stays with the trip in your iCloud</li>
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
          <li>Turn off AI estimates in Settings, and nothing more is sent</li>
          <li>Our server keeps no names or photos, so there&apos;s nothing of yours for us to delete there. Anthropic and our host keep what&apos;s described in section 8 for up to 30 days</li>
          <li>Deleting the app removes all local data</li>
        </ul>
      </LegalSection>

      <LegalSection title="7. Children's privacy">
        <p>PacBag is rated 4+. AI estimates are off by default, and the screen that turns them on asks anyone under 18 to ask a parent first.</p>
      </LegalSection>

      <LegalSection title="8. Third-party services">
        <p>With AI estimates on, these companies receive data:</p>
        <ul>
          <li>Anthropic (AI provider): item names, category names, chosen photos and your language, to generate estimates. Anthropic may keep them for up to 30 days</li>
          <li>Railway (hosts our server): your IP address and the time of each request, in logs we can read for up to 30 days</li>
        </ul>
        <p>Whether AI estimates are on or off, the app asks Wikipedia for a photo of each trip&apos;s destination:</p>
        <ul>
          <li>Wikimedia Foundation (runs Wikipedia): the destination you typed or picked, your IP address and the time, when you open a trip that has no photo of your own. Wikimedia keeps them under its own privacy policy</li>
        </ul>
        <p>The app also uses Apple&apos;s frameworks, and your data is set to sync through iCloud:</p>
        <ul>
          <li>CloudKit for data sync</li>
          <li>PhotosUI for image selection</li>
          <li>MapKit to suggest cities as you type a destination, which sends what you type to Apple</li>
          <li>UserNotifications for local reminders</li>
          <li>StoreKit for the App Store record described in section 1</li>
        </ul>
      </LegalSection>

      <LegalSection title="9. GDPR compliance">
        <p>For EU users:</p>
        <ul>
          <li>With AI estimates off, the app sends no personal data to us</li>
          <li>With them on, we rely on your consent, which you can withdraw in Settings</li>
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
