'use client';

import {
  ArrowUpRight,
  Braces,
  GitFork,
  GraduationCap,
  House,
  Mail,
  Sparkles,
  Trophy,
  Wrench,
} from 'lucide-react';
import { useEffect, useState } from 'react';

import { ToggleGroup, ToggleGroupItem } from '@/components/ui/toggle-group';
import { contact, type Language, resumeContent } from './resume-data';

const sectionIcons = { overview: House, project: Braces, competitions: Trophy, skills: Wrench, contact: Mail };

function isEditableTarget(target: EventTarget | null) {
  if (!(target instanceof HTMLElement)) return false;
  return target.isContentEditable || ['INPUT', 'TEXTAREA', 'SELECT'].includes(target.tagName);
}

export function ResumeSite() {
  const [language, setLanguage] = useState<Language>('en');
  const content = resumeContent[language];

  useEffect(() => {
    const saved = window.localStorage.getItem('ken-cv-language');
    if (saved === 'en' || saved === 'zh') setLanguage(saved);
  }, []);

  useEffect(() => {
    document.documentElement.lang = language === 'zh' ? 'zh-Hans' : 'en';
    window.localStorage.setItem('ken-cv-language', language);
  }, [language]);

  useEffect(() => {
    const handleShortcut = (event: KeyboardEvent) => {
      if (event.shiftKey && event.key.toLowerCase() === 'l' && !isEditableTarget(event.target)) {
        event.preventDefault();
        setLanguage((current) => (current === 'en' ? 'zh' : 'en'));
      }
    };
    window.addEventListener('keydown', handleShortcut);
    return () => window.removeEventListener('keydown', handleShortcut);
  }, []);

  const navItems = [
    { id: 'top', label: content.nav.overview },
    { id: 'education', label: content.nav.education },
    { id: 'project', label: content.nav.project },
    { id: 'competitions', label: content.nav.competitions },
    { id: 'skills', label: content.nav.skills },
    { id: 'contact', label: content.nav.contact },
  ];
  const mobileItems = [
    { id: 'top', label: content.nav.overview, icon: sectionIcons.overview },
    { id: 'project', label: content.nav.project, icon: sectionIcons.project },
    { id: 'competitions', label: content.nav.competitions, icon: sectionIcons.competitions },
    { id: 'skills', label: content.nav.skills, icon: sectionIcons.skills },
    { id: 'contact', label: content.nav.contact, icon: sectionIcons.contact },
  ];

  return (
    <div className="site-shell">
      <a className="skip-link" href="#content">{language === 'zh' ? '跳至主要内容' : 'Skip to content'}</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="brand" href="#top" aria-label={content.nav.overview}>
            <span className="brand-mark">KC</span><span className="brand-name">Ken Chen</span>
          </a>
          <nav className="desktop-nav" aria-label={language === 'zh' ? '页面导航' : 'Page navigation'}>
            {navItems.slice(1).map((item) => <a key={item.id} href={`#${item.id}`}>{item.label}</a>)}
          </nav>
          <div className="language-control" aria-keyshortcuts="Shift+L">
            <ToggleGroup
              aria-label={language === 'zh' ? '切换语言' : 'Switch language'}
              className="language-toggle"
              spacing={0}
              value={[language]}
              onValueChange={(value) => {
                const next = value[0];
                if (next === 'en' || next === 'zh') setLanguage(next);
              }}
            >
              <ToggleGroupItem className="language-option" value="en" aria-label="English">EN</ToggleGroupItem>
              <ToggleGroupItem className="language-option" value="zh" aria-label="中文">中</ToggleGroupItem>
            </ToggleGroup>
            <span className="shortcut-hint" title={language === 'zh' ? '键盘快捷键' : 'Keyboard shortcut'}>⇧ L</span>
          </div>
        </div>
      </header>

      <main id="content">
        <section className="hero section-wrap" id="top">
          <div className="hero-copy">
            <p className="eyebrow">{content.hero.eyebrow}</p>
            <h1><span>{content.hero.greeting}</span><strong>{content.hero.name}<i>.</i></strong></h1>
            <p className="formal-name">{content.hero.formalName}</p>
            <p className="hero-tagline">{content.hero.tagline}</p>
            <p className="hero-about">{content.hero.about}</p>
            <div className="hero-actions">
              <a className="primary-action" href={`mailto:${contact.email}`}><Mail aria-hidden="true" />{content.actions.email}</a>
              <a className="secondary-action" href={contact.githubUrl} target="_blank" rel="noreferrer">
                <GitFork aria-hidden="true" />{content.actions.github}<ArrowUpRight aria-hidden="true" />
              </a>
            </div>
          </div>
          <div className="identity-panel" aria-label={content.hero.profileLabel}>
            <div className="identity-panel-top">
              <span>{content.hero.profileLabel}</span>
              <Braces aria-hidden="true" />
            </div>
            <div className="identity-monogram" aria-hidden="true">KC</div>
            <div className="identity-focus">
              {content.hero.focus.map((item) => <span key={item}>{item}</span>)}
            </div>
            <div className="status-card">
              <span className="status-pulse" aria-hidden="true" />
              <span><small>{content.hero.currentLabel}</small><strong>{content.hero.currentValue}</strong></span>
            </div>
          </div>
        </section>

        <section className="content-section section-wrap" id="education">
          <div className="section-heading"><p className="section-kicker">{content.education.kicker}</p><div><h2>{content.education.title}</h2><p>{content.education.description}</p></div></div>
          <article className="education-card">
            <div className="education-icon" aria-hidden="true"><GraduationCap /></div>
            <div className="education-main"><h3>{content.education.school}</h3><p>{content.education.degree}</p></div>
            <time>{content.education.date}</time>
          </article>
        </section>

        <section className="content-section section-wrap" id="project">
          <div className="section-heading"><p className="section-kicker">{content.project.kicker}</p><div><h2>{content.project.title}</h2><p>{content.project.description}</p></div></div>
          <article className="project-card">
            <div className="project-orbit" aria-hidden="true" />
            <div className="project-topline"><div><span className="project-label">{content.project.kind}</span><h3>{content.project.name}</h3></div><Sparkles aria-hidden="true" /></div>
            <div className="stack-list" aria-label={language === 'zh' ? '技术栈' : 'Technology stack'}>{content.project.stack.map((item) => <span key={item}>{item}</span>)}</div>
            <ul className="project-points">{content.project.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
          </article>
        </section>

        <section className="content-section section-wrap" id="competitions">
          <div className="section-heading"><p className="section-kicker">{content.competitions.kicker}</p><div><h2>{content.competitions.title}</h2><p>{content.competitions.description}</p></div></div>
          <div className="competition-list">
            {content.competitions.items.map((item, index) => (
              <article className="competition-item" key={item.name}>
                <div className="timeline-index" aria-hidden="true">{String(index + 1).padStart(2, '0')}</div>
                <div className="competition-content">
                  <div className="competition-heading">
                    <div><time>{item.date}</time><h3>{item.name}</h3></div>
                    {item.award ? <span className="award-badge"><Trophy aria-hidden="true" /><span><small>{content.competitions.awardLabel}</small>{item.award}</span></span> : null}
                  </div>
                  <ul>{item.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="content-section section-wrap" id="skills">
          <div className="section-heading"><p className="section-kicker">{content.skills.kicker}</p><div><h2>{content.skills.title}</h2><p>{content.skills.description}</p></div></div>
          <div className="skills-grid">
            {content.skills.groups.map((group, index) => (
              <article className="skill-card" key={group.title}>
                <span className="skill-number">0{index + 1}</span><h3>{group.title}</h3>
                <ul>{group.items.map((item) => <li key={item.name}><span>{item.name}</span>{item.level ? <small>{item.level}</small> : null}</li>)}</ul>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section section-wrap" id="contact">
          <div className="contact-copy"><p className="section-kicker light">{content.contact.kicker}</p><h2>{content.contact.title}</h2><p>{content.contact.description}</p></div>
          <div className="contact-links">
            <a href={`mailto:${contact.email}`}><span className="contact-icon"><Mail aria-hidden="true" /></span><span><small>{content.contact.emailNote}</small><strong>{contact.email}</strong></span><ArrowUpRight aria-hidden="true" /></a>
            <a href={contact.githubUrl} target="_blank" rel="noreferrer"><span className="contact-icon"><GitFork aria-hidden="true" /></span><span><small>{content.contact.githubNote}</small><strong>{contact.githubLabel}</strong></span><ArrowUpRight aria-hidden="true" /></a>
          </div>
        </section>
      </main>

      <footer className="site-footer section-wrap"><span>© {new Date().getFullYear()} Ken Chen</span><span>{content.footer}</span></footer>
      <nav className="mobile-dock" aria-label={language === 'zh' ? '快捷导航' : 'Quick navigation'}>
        {mobileItems.map((item) => { const Icon = item.icon; return <a key={item.id} href={`#${item.id}`} aria-label={item.label}><Icon aria-hidden="true" /><span>{item.label}</span></a>; })}
      </nav>
    </div>
  );
}
