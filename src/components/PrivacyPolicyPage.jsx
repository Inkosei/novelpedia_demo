import { motion } from "framer-motion";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const Section = ({ title, children }) => (
  <motion.section className="mb-10" variants={sectionVariants}>
    <h2 className="text-2xl font-bold text-violet-300 mb-4 pb-2 border-b border-violet-800/50">
      {title}
    </h2>
    <div className="space-y-4 text-gray-300 leading-relaxed">
      {children}
    </div>
  </motion.section>
);

export default function PrivacyPolicyPage() {
  const lastUpdatedDate = new Date().toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return (
    <div className="min-h-screen w-full px-4 pt-32 pb-20 md:pt-40 text-gray-200 flex justify-center">
      <motion.div
        className="max-w-4xl w-full"
        initial="hidden"
        animate="visible"
        variants={{ visible: { transition: { staggerChildren: 0.1 } } }}
      >
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-center text-violet-300 mb-4"
          style={{ textShadow: "0 0 15px #a78bfa, 0 0 25px #8b5cf6" }}
          variants={sectionVariants}
        >
          Data Privacy & Security
        </motion.h1>
        <motion.p className="text-center text-gray-400 mb-12" variants={sectionVariants}>
          Last updated: {lastUpdatedDate}
        </motion.p>

        <motion.p className="text-lg text-gray-200 mb-12" variants={sectionVariants}>
          NovelPedia is committed to protecting user data and ensuring compliance with global privacy laws while maintaining a secure and transparent platform. User privacy is a top priority, and NovelPedia never sells personal data to third parties.
        </motion.p>

        <Section title="1.1 User Data Protection & Privacy Compliance">
          <p>NovelPedia complies with all applicable data protection laws, including but not limited to:</p>
          <ul className="pl-4 space-y-2">
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>General Data Protection Regulation (GDPR) (European Union)</li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>California Consumer Privacy Act (CCPA) (United States)</li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>Other relevant international privacy laws</li>
          </ul>
          <p className="font-semibold text-gray-100 pt-2">Key data protection principles:</p>
          <ul className="pl-4 space-y-2">
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>User data is never sold to third parties.</li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>Personal data is collected only for essential purposes.</li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>Users have the right to view, modify, or delete their personal data.</li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>All sensitive data is encrypted and stored using industry-standard security measures.</li>
          </ul>
        </Section>

        <Section title="1.2 How We Collect & Use Data">
          <p>NovelPedia collects and processes only the data necessary for platform functionality and security. This may include account details, IP addresses, payment information (processed by secure third parties), and activity logs.</p>
          <p className="font-semibold text-gray-100 pt-2">How data is used:</p>
          <ul className="pl-4 space-y-2">
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>Security & account verification.</li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>Fraud prevention.</li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>Platform improvements and bug detection.</li>
            <li className="flex items-start"><span className="text-violet-400 mr-3 mt-1">▸</span>Aggregate and anonymized data for performance insights.</li>
          </ul>
        </Section>

        <Section title="1.3 Right to Request Account Deletion & Data Removal">
          <p>Users may request full account deletion. Some data may be retained for legal, tax, and compliance reasons. Account deletion is permanent. Requests will be processed within 30 days.</p>
        </Section>
        
        <Section title="1.4 Third-Party Integrations & Data Sharing">
            <p>NovelPedia may integrate with third-party services like payment processors and authentication services. These services operate under their own privacy policies. We are not responsible for data shared with third-party providers beyond the scope of essential platform functions.</p>
        </Section>

        <Section title="Children's Privacy">
          <p>Our Service does not address anyone under the age of 13. We do not knowingly collect personally identifiable information from anyone under 13. If you are a parent or guardian and you are aware that your child has provided us with Personal Data, please contact us.</p>
        </Section>

        <Section title="Links to Other Websites">
          <p>Our Service may contain links to other websites that are not operated by us. If you click on a third-party link, you will be directed to that site. We have no control over and assume no responsibility for the content, privacy policies or practices of any third-party sites or services.</p>
        </Section>

        <Section title="Changes to this Privacy Policy">
          <p>We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page and updating the "Last updated" date.</p>
        </Section>
        
        <Section title="Contact Us">
          <p>If you have any questions about this Privacy Policy, you can contact us by sending an email to: <a href="mailto:admin@novelpedia.com" className="font-semibold text-violet-300 hover:underline">admin@novelpedia.com</a></p>
        </Section>
      </motion.div>
    </div>
  );
}