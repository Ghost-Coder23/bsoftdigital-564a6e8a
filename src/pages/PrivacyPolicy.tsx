import { useEffect } from "react";

const PrivacyPolicy = () => {
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
        <h1 className="font-heading font-bold text-3xl md:text-4xl text-foreground mb-2">Privacy Policy</h1>
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
  { title: "1. Introduction", content: [
    "BsoftDigital (\"we\", \"us\", or \"our\") is committed to protecting your personal information and your right to privacy. This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.",
    "By using our website or services, you agree to the collection and use of information in accordance with this policy."
  ]},
  { title: "2. Information We Collect", content: [
    "We may collect personal information that you voluntarily provide to us when you contact us, request a quote, or use our services. This includes your name, email address, phone number, company name, and any other information you choose to provide.",
    "We automatically collect certain information when you visit our website, including your IP address, browser type, operating system, referring URLs, and pages viewed. We may also use cookies and similar tracking technologies."
  ]},
  { title: "3. How We Use Your Information", content: [
    "We use the information we collect to: provide and maintain our services; respond to your enquiries and fulfil your requests; send you marketing communications (with your consent); improve our website and services; comply with legal obligations; and protect against fraudulent or illegal activity."
  ]},
  { title: "4. Sharing Your Information", content: [
    "We do not sell, trade, or rent your personal information to third parties. We may share your information with trusted service providers who assist us in operating our website and conducting our business, provided they agree to keep your information confidential.",
    "We may also disclose your information where required by law, regulation, or legal process."
  ]},
  { title: "5. Data Security", content: [
    "We implement appropriate technical and organisational security measures to protect your personal information against unauthorised access, alteration, disclosure, or destruction. However, no method of transmission over the Internet is 100% secure, and we cannot guarantee absolute security."
  ]},
  { title: "6. Data Retention", content: [
    "We retain your personal information only for as long as necessary to fulfil the purposes outlined in this policy, unless a longer retention period is required or permitted by law."
  ]},
  { title: "7. Your Rights", content: [
    "Depending on your location, you may have the right to: access the personal information we hold about you; request correction of inaccurate data; request deletion of your data; object to or restrict processing of your data; and withdraw consent at any time.",
    "To exercise any of these rights, please contact us at info@bsoftdigital.co.zw."
  ]},
  { title: "8. Cookies", content: [
    "Our website may use cookies to enhance your browsing experience. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, some features of the website may not function properly without cookies."
  ]},
  { title: "9. Third-Party Links", content: [
    "Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of those sites. We encourage you to read the privacy policy of every website you visit."
  ]},
  { title: "10. Changes to This Policy", content: [
    "We may update this Privacy Policy from time to time. We will notify you of any changes by posting the new policy on this page and updating the \"Last updated\" date. Your continued use of our services after any changes constitutes acceptance of the updated policy."
  ]},
  { title: "11. Contact Us", content: [
    "If you have any questions about this Privacy Policy, please contact us at: info@bsoftdigital.co.zw | +263 777 448 666 | Harare, Zimbabwe."
  ]},
];

export default PrivacyPolicy;
