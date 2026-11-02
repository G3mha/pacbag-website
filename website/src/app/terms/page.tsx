import type { Metadata } from 'next'
import LegalPage, { LegalSection } from '@/components/LegalPage'

export const metadata: Metadata = {
  title: 'Terms of Use',
  alternates: {
    canonical: 'https://pacbag.app/terms',
  },
}

export default function TermsPage() {
  return (
    <LegalPage title="Terms of Use" lastUpdated="November 2026">
      <LegalSection title="1. Agreement">
        <p>
          These terms sit alongside <a href="https://www.apple.com/legal/internet-services/itunes/dev/stdeula/">Apple&apos;s Standard EULA</a>.
        </p>
      </LegalSection>

      <LegalSection title="2. What PacBag is">
        <p>PacBag is a packing list app. It&apos;s free, and you don&apos;t need an account. We may change it or stop offering it.</p>
      </LegalSection>

      <LegalSection title="3. Estimates">
        <p>Weights, categories and names marked as estimates can be wrong. Don&apos;t rely on them without checking them yourself. Weigh your bag before you travel. Your airline&apos;s scale and rules decide.</p>
        <p>PacBag doesn&apos;t promise you&apos;ll avoid fees or meet a limit.</p>
      </LegalSection>

      <LegalSection title="4. Your content">
        <p>What you put in PacBag is yours. We don&apos;t claim any rights to it.</p>
      </LegalSection>

      <LegalSection title="5. No warranty, limited liability">
        <p>To the extent the law allows, PacBag comes as is, with no warranty, and we aren&apos;t liable for losses from using it.</p>
        <p>Nothing here limits rights you have under the consumer laws of where you live.</p>
      </LegalSection>

      <LegalSection title="6. Changes">
        <p>We&apos;ll post changes to these terms on this page and update the date above. If a change is material, we&apos;ll give notice.</p>
      </LegalSection>

      <LegalSection title="7. Contact">
        <p>Enricco Gemha, <a href="mailto:me@enriccogemha.dev">me@enriccogemha.dev</a>.</p>
      </LegalSection>
    </LegalPage>
  )
}
