"use client";

import { useEffect, useState } from "react";

type Article = {
  slug: string;
  category: string;
  readTime: string;
  title: string;
  paragraphs: string[];
  sources?: { label: string; url: string }[];
};

export function ArticleList({ articles }: { articles: Article[] }) {
  const defaultOpen = articles.filter((article, index) => index === 0 || article.slug === "pilot-process-not-goals").map(article => article.slug);
  const [openSlugs, setOpenSlugs] = useState(defaultOpen);

  useEffect(() => {
    const openHashArticle = () => {
      const slug = window.location.hash.slice(1);
      if (!articles.some(article => article.slug === slug)) return;
      setOpenSlugs(previous => previous.includes(slug) ? previous : [...previous, slug]);
      window.requestAnimationFrame(() => document.getElementById(slug)?.scrollIntoView({ block: "start" }));
    };
    openHashArticle();
    window.addEventListener("hashchange", openHashArticle);
    return () => window.removeEventListener("hashchange", openHashArticle);
  }, [articles]);

  return (
    <div className="article-list">
      {articles.map((article, index) => (
        <details className="article" key={article.slug} id={article.slug} open={openSlugs.includes(article.slug)} onToggle={event => {
          const isOpen = (event.currentTarget as HTMLDetailsElement).open;
          setOpenSlugs(previous => isOpen ? [...new Set([...previous, article.slug])] : previous.filter(slug => slug !== article.slug));
        }}>
          <summary>
            <span className="article-index">0{index + 1}</span>
            <span className="article-title"><small>{article.category} · {article.readTime}</small><span className="article-name">{article.title}</span><a className="article-link" href={`#${article.slug}`} aria-label={`Share ${article.title}`} onClick={event => event.stopPropagation()}>↗</a></span>
            <span className="article-toggle" aria-hidden="true">+</span>
          </summary>
          <div className="article-body">
            {article.paragraphs.map((paragraph, pIndex) => <p key={pIndex}>{paragraph}</p>)}
            {article.sources && (
              <div className="sources">
                <strong>Sources</strong>
                {article.sources.map(source => <a href={source.url} target="_blank" rel="noreferrer" key={source.url}>{source.label} <span aria-hidden="true">↗</span></a>)}
              </div>
            )}
          </div>
        </details>
      ))}
    </div>
  );
}
