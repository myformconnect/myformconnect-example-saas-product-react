import React from 'react';
import ScrollReveal from '../common/ScrollReveal';
import { 
  Rocket, 
  Cpu, 
  CreditCard, 
  Cable, 
  Shield, 
  HelpCircle, 
  ArrowRight,
  FileText 
} from 'lucide-react';
import { helpCategories } from '../../data/helpData';

const iconMap = {
  Rocket,
  Cpu,
  CreditCard,
  Cable,
  Shield,
  HelpCircle
};

export default function HelpCategories({ searchQuery, onSelectArticle }) {
  // If user searched, filter articles across all categories
  const isSearching = searchQuery.trim().length > 0;
  const q = searchQuery.toLowerCase();

  const filteredCategories = isSearching
    ? helpCategories
        .map((cat) => ({
          ...cat,
          articles: cat.articles.filter(
            (art) =>
              art.title.toLowerCase().includes(q) ||
              cat.title.toLowerCase().includes(q)
          ),
        }))
        .filter((cat) => cat.articles.length > 0)
    : helpCategories;

  return (
    <section className="py-16 bg-white border-b border-stone-200">
      <div className="container-custom">
        {isSearching && (
          <div className="mb-8 text-xs text-stone-500 font-mono">
            Showing results for &quot;<strong className="text-slate-800">{searchQuery}</strong>&quot; ({
              filteredCategories.reduce((acc, cat) => acc + cat.articles.length, 0)
            } articles found)
          </div>
        )}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCategories.map((cat, i) => {
            const Icon = iconMap[cat.icon] || Rocket;
            return (
              <ScrollReveal
                key={cat.id}
                delay={i * 60}
                className="flex"
              >
                <div
                  className="w-full b2b-card b2b-card-interactive rounded-2xl p-6 bg-white flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-3">
                      <div className="w-9 h-9 rounded-xl bg-stone-100 text-stone-800 flex items-center justify-center border border-stone-200/60">
                        <Icon className="w-4 h-4 text-stone-700" />
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-slate-900">{cat.title}</h3>
                        <span className="text-[11px] text-stone-400 font-mono">{cat.articles.length} guides</span>
                      </div>
                    </div>

                    <p className="text-xs text-slate-500 mb-5 leading-relaxed">
                      {cat.description}
                    </p>

                    <ul className="space-y-2.5">
                      {cat.articles.map((article) => (
                        <li key={article.id}>
                          <button
                            type="button"
                            onClick={() => onSelectArticle(article)}
                            className="w-full text-left flex items-center justify-between gap-2 text-xs text-slate-700 hover:text-orange-600 transition-colors py-1 group cursor-pointer"
                          >
                            <div className="flex items-center gap-2 truncate">
                              <FileText className="w-3.5 h-3.5 text-stone-400 group-hover:text-orange-600 shrink-0" />
                              <span className="truncate">{article.title}</span>
                            </div>
                            <span className="text-[10px] text-stone-400 font-mono shrink-0">
                              {article.reads}
                            </span>
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6 pt-3 border-t border-stone-100">
                    <span className="text-[11px] font-medium text-orange-600 hover:text-orange-700 flex items-center gap-1">
                      <span>Explore topic</span>
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12 b2b-card p-8 bg-stone-50">
            <p className="text-sm font-medium text-slate-800">No articles matched your query.</p>
            <p className="text-xs text-slate-500 mt-1">
              Try searching for &quot;webhooks&quot;, &quot;tokens&quot;, or scroll below to open a ticket directly with our technical team.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
