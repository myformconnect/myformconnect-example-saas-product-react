import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { ShieldCheck, Lock, FileCheck2, Database, KeyRound, Server } from 'lucide-react';

export default function SecuritySection() {
  const securityItems = [
    {
      icon: ShieldCheck,
      title: 'SOC 2 Type II Certified',
      desc: 'Independently audited annually covering security, availability, and confidentiality trust principles.'
    },
    {
      icon: Lock,
      title: 'End-to-End Encryption',
      desc: 'Payloads and credentials encrypted using AES-256 at rest and TLS 1.3 in transit with TLS termination at VPC edge.'
    },
    {
      icon: FileCheck2,
      title: 'GDPR & CCPA Compliant',
      desc: 'Complete Data Processing Agreements (DPA), data residency controls, and automated right-to-erasure tooling.'
    },
    {
      icon: KeyRound,
      title: 'SAML 2.0 & SCIM',
      desc: 'Seamless user provisioning and authentication through Okta, Azure Active Directory, and Google Workspace.'
    },
    {
      icon: Database,
      title: 'Immutable Audit Trails',
      desc: 'Every configuration change, permission grant, and pipeline deployment is permanently stamped and exportable.'
    },
    {
      icon: Server,
      title: '99.99% Guaranteed SLA',
      desc: 'Multi-region redundancy across independent AWS availability zones with automatic failover and status transparency.'
    }
  ];

  return (
    <section className="py-20 bg-white border-b border-stone-200" id="security">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Security & Trust"
            title="Enterprise-grade reliability without compromises."
            description="Built from the ground up for strict data governance, stringent regulatory compliance, and resilience."
          />
        </ScrollReveal>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {securityItems.map((item, i) => {
            const Icon = item.icon;
            return (
              <ScrollReveal
                key={item.title}
                delay={i * 60}
                className="flex"
              >
                <div
                  className="w-full p-6 rounded-2xl border border-stone-200 bg-stone-50/40 b2b-card b2b-card-interactive flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xl bg-white border border-stone-200 text-stone-800 flex items-center justify-center mb-4 shadow-2xs">
                      <Icon className="w-5 h-5 text-orange-600" />
                    </div>
                    <h4 className="text-sm font-semibold text-slate-900 mb-2">{item.title}</h4>
                    <p className="text-xs text-slate-600 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
