import React from 'react';
import SectionHeading from '../common/SectionHeading';
import ScrollReveal from '../common/ScrollReveal';
import { comparisonCategories } from '../../data/pricing';
import { Check, Minus } from 'lucide-react';

export default function ComparisonTable() {
  const renderValue = (val) => {
    if (typeof val === 'boolean') {
      return val ? (
        <Check className="w-4 h-4 text-orange-600 mx-auto" />
      ) : (
        <Minus className="w-4 h-4 text-slate-300 mx-auto" />
      );
    }
    return <span className="text-xs font-medium text-slate-700">{val}</span>;
  };

  return (
    <section className="py-20 bg-stone-50/50 border-t border-b border-stone-200" id="compare">
      <div className="container-custom">
        <ScrollReveal>
          <SectionHeading
            eyebrow="Detailed Matrix"
            title="Compare all features by plan"
            description="Everything you need to select the right tier for your engineering and operational workloads."
          />
        </ScrollReveal>

        <ScrollReveal delay={100} className="b2b-card bg-white overflow-hidden shadow-xs">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-stone-200 bg-stone-50/80 text-xs text-slate-500 font-semibold uppercase tracking-wider">
                  <th className="py-4 px-6 w-2/5">Features & Specifications</th>
                  <th className="py-4 px-4 text-center w-1/5">Starter</th>
                  <th className="py-4 px-4 text-center w-1/5 bg-orange-50/40 text-orange-950 border-x border-orange-100/60">
                    Professional
                  </th>
                  <th className="py-4 px-4 text-center w-1/5">Enterprise</th>
                </tr>
              </thead>

              <tbody>
                {comparisonCategories.map((cat) => (
                  <React.Fragment key={cat.category}>
                    <tr className="bg-stone-100/70 border-y border-stone-200">
                      <td
                        colSpan={4}
                        className="py-2.5 px-6 text-xs font-semibold text-slate-900 tracking-wide"
                      >
                        {cat.category}
                      </td>
                    </tr>

                    {cat.features.map((feat) => (
                      <tr
                        key={feat.name}
                        className="border-b border-stone-100 hover:bg-stone-50/50 transition-colors"
                      >
                        <td className="py-3.5 px-6 text-xs text-slate-800 font-medium">
                          {feat.name}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {renderValue(feat.starter)}
                        </td>
                        <td className="py-3.5 px-4 text-center bg-orange-50/20 border-x border-orange-100/40">
                          {renderValue(feat.pro)}
                        </td>
                        <td className="py-3.5 px-4 text-center">
                          {renderValue(feat.enterprise)}
                        </td>
                      </tr>
                    ))}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
