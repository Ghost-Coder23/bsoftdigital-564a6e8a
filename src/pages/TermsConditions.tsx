import { useEffect } from "react";

const TermsConditions = () => {
  useEffect(() => { window.scrollTo(0, 0); }, []);

  return (
    <div className="min-h-screen bg-background">
      <nav className="bg-white shadow-sm py-4">
        <div className="container mx-auto px-6 flex items-center justify-between">
          <a href="/" className="flex items-center gap-2">
            <i className="fa-solid fa-bolt text-accent-green text-2xl" />
            <span className="font-heading font-bold text-xl text-primary">BsoftDigital</span>
          </a>
          <a href="/" className="text-sm text-primary hover:text-accent-green transition-colors font-medium">← Back to Home</a>
        </div>
      </nav>

      <div className="container mx-auto px-6 py-16 max-w-3xl">
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">Terms & Conditions</h1>
        <p className="text-muted-foreground text-sm mb-10">Last updated: March 17, 2026</p>

        {sections.map((s, i) => (
          <div key={i} className="mb-8">
            <h2 className="font-heading font-semibold text-lg text-foreground mb-3">{s.title}</h2>
            <div className="text-muted-foreground text-sm leading-relaxed space-y-3">
              {s.content.map((p, j) => <p key={j}>{p}</p>)}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const sections = [
  { title: "1. Acceptance of Terms", content: [
    "By accessing and using the BsoftDigital website and services, you accept and agree to be bound by these Terms and Conditions. If you do not agree to these terms, please do not use our website or services."
  ]},
  { title: "2. Services", content: [
    "BsoftDigital provides web development, mobile application development, digital consulting, and related technology services. The specific scope, deliverables, timeline, and pricing for each project will be outlined in a separate project agreement or proposal.",
    "We reserve the right to modify, suspend, or discontinue any part of our services at any time without prior notice."
  ]},
  { title: "3. Client Obligations", content: [
    "You agree to provide accurate and complete information when engaging our services. You are responsible for providing all necessary content, assets, and feedback in a timely manner. Delays in providing required materials may affect project timelines and delivery dates."
  ]},
  { title: "4. Payment Terms", content: [
    "Payment terms will be specified in your project agreement. Unless otherwise stated, a deposit of 50% is required before work commences, with the remaining balance due upon project completion.",
    "All prices are quoted in the currency specified in your agreement. Late payments may incur additional charges. We reserve the right to suspend work on any project with outstanding payments."
  ]},
  { title: "5. Intellectual Property", content: [
    "Upon full payment, you will own the final deliverables created specifically for your project. BsoftDigital retains the right to use general tools, frameworks, and methodologies developed during the project.",
    "We reserve the right to showcase completed projects in our portfolio unless otherwise agreed in writing. Any pre-existing intellectual property, third-party licenses, or open-source components used in the project remain subject to their respective licences."
  ]},
  { title: "6. Revisions and Changes", content: [
    "Each project includes a reasonable number of revision rounds as specified in your project agreement. Additional revisions or scope changes beyond the agreed specification may incur extra charges.",
    "Significant changes to the project scope after work has commenced will require a revised agreement and may affect the timeline and cost."
  ]},
  { title: "7. Warranties and Disclaimers", content: [
    "We strive to deliver high-quality work that meets the agreed specifications. However, our services are provided \"as is\" without warranties of any kind, either express or implied, including but not limited to implied warranties of merchantability or fitness for a particular purpose.",
    "We do not guarantee that our website or services will be uninterrupted, error-free, or free from viruses or other harmful components."
  ]},
  { title: "8. Limitation of Liability", content: [
    "To the fullest extent permitted by law, BsoftDigital shall not be liable for any indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, or business opportunities, arising from or related to the use of our services.",
    "Our total liability for any claim arising from our services shall not exceed the total amount paid by you for the specific service giving rise to the claim."
  ]},
  { title: "9. Termination", content: [
    "Either party may terminate a project agreement with 14 days' written notice. Upon termination, you are responsible for payment for all work completed up to the date of termination.",
    "We reserve the right to terminate services immediately if you breach any of these terms or engage in any unlawful activity."
  ]},
  { title: "10. Confidentiality", content: [
    "Both parties agree to keep confidential any proprietary or sensitive information shared during the course of the project. This obligation survives the termination of any agreement between the parties."
  ]},
  { title: "11. Governing Law", content: [
    "These Terms and Conditions shall be governed by and construed in accordance with the laws of Zimbabwe. Any disputes arising from these terms shall be subject to the exclusive jurisdiction of the courts of Zimbabwe."
  ]},
  { title: "12. Changes to These Terms", content: [
    "We reserve the right to update these Terms and Conditions at any time. Changes will be effective immediately upon posting to our website. Your continued use of our services after any changes constitutes acceptance of the updated terms."
  ]},
  { title: "13. Contact Us", content: [
    "If you have any questions about these Terms and Conditions, please contact us at: info@bsoftdigital.co.zw | +263 777 448 666 | Harare, Zimbabwe."
  ]},
];

export default TermsConditions;
