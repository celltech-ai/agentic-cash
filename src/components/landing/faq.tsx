import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const faqs = [
  {
    question: "Do I need coding experience?",
    answer: "Volume 1 requires no coding—it's pure strategy. Volume 2 includes complete source code, but you should be comfortable opening a terminal, running npm install, and editing config files. You don't need to be a developer. The book walks through every step with copy-paste code examples.",
  },
  {
    question: "How much money do I need to start?",
    answer: "For Volume 1 (manual flipping): £50-100 in starting capital. Buy 2-3 items, sell them, reinvest the profit. For Volume 2 (automated system): ~£135/month running costs (Apify scraping ~£120, VPS ~£4, Gemini vision ~£10). Your first profitable deal covers the month.",
  },
  {
    question: "How quickly will I see results?",
    answer: "Volume 1 readers typically find their first profitable deal within the first week if they follow the 30-day action plan. Volume 2 readers can have a working scanner running in 4 hours (the Chapter 2 build). First automated deal alert usually arrives within 24-48 hours of going live.",
  },
  {
    question: "Is this legal?",
    answer: "Yes. We use official APIs where available (eBay Browse API, Etsy Open API, Pinterest API). For platforms without APIs, we use managed scraping services (Apify) that handle compliance. We monitor listings. We never auto-purchase, create fake accounts, or access private data. Every purchase decision is made by a human.",
  },
  {
    question: "What if it doesn't work for me?",
    answer: "30-day money-back guarantee. No questions asked. Email us and we'll refund you within 48 hours. We've had less than 2% refund rate because the system works—but we want you to feel confident trying it risk-free.",
  },
  {
    question: "Do I get updates?",
    answer: "Yes. You get lifetime updates to all volumes. As marketplaces change their fees, new tools emerge, or new strategies develop, we update the content and you get it free. We've already shipped 3 major updates since launch.",
  },
  {
    question: "Can I sell this to my clients or students?",
    answer: "The license is for personal use only. You cannot resell the ebooks or code. However, you CAN use the strategies to build your own subscription service, consulting business, or coaching program. Volume 3, Chapter 4 covers monetization blueprints in detail.",
  },
  {
    question: "What's the difference between the three volumes?",
    answer: "Volume 1 is strategy (no code): marketplaces, categories, profit math, sourcing, selling. Volume 2 is technical: complete scanner codebase, AI vision, deployment. Volume 3 is advanced: cross-platform matching, trend detection, cook group intel, monetization. The Complete System ($97) includes all three plus bonuses.",
  },
  {
    question: "Do I need a VPS to run the scanner?",
    answer: "You can run it locally on your laptop, but a VPS (£4/month on Hetzner) lets it run 24/7 while you sleep. The deployment script in Volume 2 sets everything up automatically. Most users recoup the VPS cost with their first deal.",
  },
  {
    question: "Which marketplaces does the scanner support?",
    answer: "The scanner supports eBay (13 country domains), Vinted (16 countries), Facebook Marketplace, Depop, Mercari, Etsy, and charity shop online stores. Volume 2, Chapter 8 shows you how to add more marketplaces.",
  },
  {
    question: "How accurate is the AI vision analysis?",
    answer: "Gemini 2.0 Flash achieves ~95% accuracy for brand authentication and condition grading. It's not perfect—we recommend manual verification for high-value items (£100+). The AI is a force multiplier, not a replacement for human judgment.",
  },
  {
    question: "Can I use this outside the UK?",
    answer: "Yes. The strategies work globally. The scanner supports multiple eBay domains (US, UK, DE, FR, IT, ES, AU, CA, NL, AT, CH, IE, PL) and Vinted countries. You'll need to adapt fee calculations and shipping costs for your region.",
  },
];

export function FAQ() {
  return (
    <section className="bg-slate-950 py-20">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <div className="mb-10 text-center">
          <h2 className="mb-3 text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Frequently Asked{" "}
            <span className="bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
              Questions
            </span>
          </h2>
          <p className="mx-auto max-w-2xl text-base text-slate-400">
            Everything you need to know about Agentic Cash Pipelines. Can't find what you're looking for?{" "}
            <a href="mailto:support@agenticsystems.cash" className="text-blue-400 hover:text-blue-300">
              Contact us
            </a>
            .
          </p>
        </div>

        <Accordion className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-slate-800">
              <AccordionTrigger className="text-left text-base font-medium text-white hover:text-blue-400">
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-sm text-slate-400">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>

        <div className="mt-10 text-center">
          <p className="mb-3 text-sm text-slate-400">Still have questions?</p>
          <a
            href="mailto:support@agenticsystems.cash"
            className="inline-flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300"
          >
            Email us at support@agenticsystems.cash
          </a>
        </div>
      </div>
    </section>
  );
}
