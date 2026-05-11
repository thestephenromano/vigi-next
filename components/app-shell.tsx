"use client";

import Image from "next/image";
import {
  ArrowRight,
  Bell,
  CalendarPlus,
  Check,
  ChevronDown,
  Copy,
  Download,
  Eye,
  FilePlus2,
  Filter,
  Gauge,
  MoreHorizontal,
  Play,
  Plus,
  RefreshCw,
  Search,
  Send,
  Share2,
  WandSparkles
} from "lucide-react";
import { useMemo, useState } from "react";
import {
  assets,
  campaigns,
  communityCards,
  integrationCards,
  momentum,
  recommendations,
  Sparkle,
  templateCards,
  utilityNav,
  weekPlan,
  workspaceNav,
  workspaces,
  type NavItem,
  type ViewId
} from "@/lib/data";

const viewTitles: Record<ViewId, { title: string; eyebrow: string }> = {
  home: { title: "Command Center", eyebrow: "" },
  planner: { title: "Content Planner", eyebrow: "Growth Guide" },
  campaigns: { title: "Campaign Portfolio", eyebrow: "Strategy and reuse" },
  studio: { title: "Studio", eyebrow: "Create and edit" },
  templates: { title: "Templates", eyebrow: "Reusable playbooks" },
  analytics: { title: "Analytics", eyebrow: "Performance intelligence" },
  community: { title: "Community", eyebrow: "Shared growth playbooks" },
  integrations: { title: "Integrations", eyebrow: "Data and distribution" },
  settings: { title: "Settings", eyebrow: "Workspace control" },
  support: { title: "Support", eyebrow: "Onboarding and help" }
};

export function AppShell() {
  const [activeView, setActiveView] = useState<ViewId>("home");
  const [workspace, setWorkspace] = useState(workspaces[0]);
  const current = viewTitles[activeView];

  return (
    <main className="app-shell">
      <aside className="sidebar" aria-label="Primary navigation">
        <div className="brand">
          <Image
            src="/vigi-logo.svg"
            alt="ViGi"
            width={118}
            height={42}
            priority
          />
          <span>Video Marketing OS</span>
        </div>

        <label className="workspace-label" htmlFor="workspace-switcher">
          Workspace
        </label>
        <div className="workspace-switcher">
          <select
            id="workspace-switcher"
            value={workspace}
            onChange={(event) => setWorkspace(event.target.value)}
          >
            {workspaces.map((item) => (
              <option key={item}>{item}</option>
            ))}
          </select>
          <ChevronDown size={16} aria-hidden="true" />
        </div>

        <NavGroup
          title="Workspace"
          items={workspaceNav}
          activeView={activeView}
          onSelect={setActiveView}
        />
        <NavGroup
          title="Tools"
          items={utilityNav}
          activeView={activeView}
          onSelect={setActiveView}
        />

        <div className="upgrade-panel">
          <p>Agency Plan</p>
          <strong>7 users / 4 clients</strong>
          <button type="button">
            <Sparkle size={16} />
            Upgrade
          </button>
        </div>
      </aside>

      <section className="workspace">
        <header className="topbar">
          <div>
            {current.eyebrow ? <span>{current.eyebrow}</span> : null}
            <h1>{current.title}</h1>
          </div>
          <div className="topbar-actions">
            <button className="icon-button" type="button" aria-label="Search">
              <Search size={19} />
            </button>
            <button
              className="icon-button"
              type="button"
              aria-label="Notifications"
            >
              <Bell size={19} />
            </button>
            <button className="primary-button" type="button">
              <Plus size={18} />
              Create
            </button>
          </div>
        </header>

        <div className="mobile-tabs" aria-label="Mobile navigation">
          {[...workspaceNav, ...utilityNav].map((item) => (
            <button
              key={item.id}
              type="button"
              className={activeView === item.id ? "active" : ""}
              onClick={() => setActiveView(item.id)}
            >
              {item.label}
            </button>
          ))}
        </div>

        {activeView === "home" && <HomeView />}
        {activeView === "planner" && <PlannerView />}
        {activeView === "campaigns" && <CampaignsView />}
        {activeView === "studio" && <StudioView />}
        {activeView === "templates" && <TemplatesView />}
        {activeView === "analytics" && <AnalyticsView />}
        {activeView === "community" && <CommunityView />}
        {activeView === "integrations" && <IntegrationsView />}
        {activeView === "settings" && <SettingsView />}
        {activeView === "support" && <SupportView />}
      </section>
    </main>
  );
}

function NavGroup({
  title,
  items,
  activeView,
  onSelect
}: {
  title: string;
  items: NavItem[];
  activeView: ViewId;
  onSelect: (view: ViewId) => void;
}) {
  return (
    <nav className="nav-group" aria-label={title}>
      <p>{title}</p>
      {items.map((item) => {
        const Icon = item.icon;
        return (
          <button
            key={item.id}
            type="button"
            className={activeView === item.id ? "active" : ""}
            onClick={() => onSelect(item.id)}
          >
            <Icon size={18} />
            <span>{item.label}</span>
          </button>
        );
      })}
    </nav>
  );
}

function HomeView() {
  return (
    <div className="page-grid home-grid">
      <section className="hero-band">
        <div>
          <p className="category-pill">The Video Marketing OS</p>
          <h2>Turn video into a repeatable growth system.</h2>
          <p className="hero-copy">
            Plan campaigns, create videos, track performance, and know what to
            make next.
          </p>
        </div>
        <div className="hero-actions">
          <button className="primary-button" type="button">
            <WandSparkles size={18} />
            Build My Week
          </button>
          <button className="secondary-button" type="button">
            <FilmIcon />
            Create Video
          </button>
        </div>
      </section>

      <section className="metric-row">
        {momentum.map((item) => (
          <article className={`metric-card ${item.tone}`} key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </section>

      <PlannerPreview />
      <ActionPanel />
    </div>
  );
}

function PlannerView() {
  return (
    <div className="page-grid planner-layout">
      <section className="toolbar-band">
        <div>
          <h2>This Week</h2>
          <p>Campaigns, scheduled assets, empty slots, and recommended actions.</p>
        </div>
        <div className="toolbar-actions">
          <button className="secondary-button" type="button">
            <Filter size={17} />
            Filter
          </button>
          <button className="primary-button" type="button">
            <CalendarPlus size={17} />
            Add Content
          </button>
        </div>
      </section>

      <section className="campaign-timeline">
        {campaigns.slice(0, 2).map((campaign) => (
          <div className="timeline-row" key={campaign.name}>
            <div>
              <strong>{campaign.name}</strong>
              <span>{campaign.dates}</span>
            </div>
            <div className="timeline-track">
              <span style={{ width: `${campaign.progress}%` }} />
            </div>
          </div>
        ))}
      </section>

      <PlannerPreview expanded />
    </div>
  );
}

function CampaignsView() {
  return (
    <div className="page-grid">
      <section className="toolbar-band">
        <div>
          <h2>Campaigns</h2>
          <p>Portfolio view for active, reusable, and archived growth initiatives.</p>
        </div>
        <button className="primary-button" type="button">
          <Plus size={17} />
          New Campaign
        </button>
      </section>

      <section className="campaign-grid">
        {campaigns.map((campaign) => (
          <article className="campaign-card" key={campaign.name}>
            <div className="card-header">
              <span>{campaign.badge}</span>
              <button className="ghost-icon" type="button" aria-label="More">
                <MoreHorizontal size={18} />
              </button>
            </div>
            <h3>{campaign.name}</h3>
            <p>{campaign.goal}</p>
            <div className="progress-line">
              <span style={{ width: `${campaign.progress}%` }} />
            </div>
            <div className="campaign-stats">
              <span>{campaign.assets} assets</span>
              <span>{campaign.leads} leads</span>
              <span>{campaign.ctr}</span>
            </div>
            <div className="card-actions">
              <button type="button">
                <Eye size={16} />
                View
              </button>
              <button type="button">
                <Copy size={16} />
                Run Again
              </button>
            </div>
          </article>
        ))}
      </section>

      <CampaignDetail />
    </div>
  );
}

function StudioView() {
  return (
    <div className="page-grid studio-layout">
      <section className="studio-panel">
        <div className="toolbar-band compact">
          <div>
            <h2>Create from Context</h2>
            <p>Linked to Spring Whitening Promo / Day 10 FAQ Explainer.</p>
          </div>
          <button className="primary-button" type="button">
            <Send size={17} />
            Generate
          </button>
        </div>

        <div className="mode-grid">
          {["Website URL", "Prompt", "Template", "Remix Existing"].map((mode) => (
            <button type="button" key={mode}>
              <FilePlus2 size={18} />
              {mode}
            </button>
          ))}
        </div>

        <div className="form-shell">
          <label>
            Campaign asset
            <input value="Day 10 - FAQ Explainer" readOnly />
          </label>
          <label>
            Call to action
            <input value="Book a consultation" readOnly />
          </label>
          <label>
            Prompt
            <textarea
              value="Create a concise FAQ video explaining professional whitening options for new patients."
              readOnly
            />
          </label>
        </div>
      </section>

      <section className="preview-panel">
        <video src="/assets/portrait-demo.mp4" controls muted playsInline />
        <div className="preview-meta">
          <div>
            <span>Status</span>
            <strong>Draft preview</strong>
          </div>
          <div className="preview-buttons">
            <button className="secondary-button" type="button">
              <Download size={17} />
              Export
            </button>
            <button className="secondary-button" type="button">
              <Share2 size={17} />
              Share
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}

function TemplatesView() {
  return (
    <div className="page-grid">
      <section className="toolbar-band">
        <div>
          <h2>Templates</h2>
          <p>ViGi templates, private workspace templates, campaign templates, and saved remixes.</p>
        </div>
        <button className="primary-button" type="button">
          <Plus size={17} />
          Save Template
        </button>
      </section>
      <section className="template-tabs">
        {["ViGi Templates", "My Templates", "Campaign Templates", "Saved Remixes"].map(
          (tab, index) => (
            <button className={index === 0 ? "active" : ""} type="button" key={tab}>
              {tab}
            </button>
          )
        )}
      </section>
      <section className="template-grid">
        {templateCards.map((template) => (
          <article className="template-card" key={template.title}>
            <div className="poster">
              <Image
                src="/assets/blog-poster.webp"
                alt=""
                width={420}
                height={260}
              />
              <span>{template.tag}</span>
            </div>
            <h3>{template.title}</h3>
            <p>{template.type}</p>
            <div className="card-actions">
              <button type="button">
                <Play size={16} />
                Use Template
              </button>
              <span>{template.uses}</span>
            </div>
          </article>
        ))}
      </section>
    </div>
  );
}

function AnalyticsView() {
  const bars = useMemo(() => [72, 58, 86, 43, 64], []);

  return (
    <div className="page-grid analytics-layout">
      <section className="metric-row">
        {[
          ["Total Views", "8,421"],
          ["CTA Clicks", "316"],
          ["Leads", "42"],
          ["Best Template", "Dental FAQ"]
        ].map(([label, value]) => (
          <article className="metric-card blue" key={label}>
            <span>{label}</span>
            <strong>{value}</strong>
          </article>
        ))}
      </section>

      <section className="chart-panel">
        <div className="toolbar-band compact">
          <div>
            <h2>Campaign Performance</h2>
            <p>Weekly conversion signal by campaign asset.</p>
          </div>
          <button className="secondary-button" type="button">
            <RefreshCw size={17} />
            Refresh
          </button>
        </div>
        <div className="bar-chart">
          {bars.map((height, index) => (
            <span key={height} style={{ height: `${height}%` }}>
              <em>W{index + 1}</em>
            </span>
          ))}
        </div>
      </section>

      <ActionPanel />
    </div>
  );
}

function CommunityView() {
  return (
    <div className="page-grid">
      <section className="toolbar-band">
        <div>
          <h2>Community Playbooks</h2>
          <p>Shared templates and campaigns become a marketplace after V1 proof.</p>
        </div>
        <button className="secondary-button" type="button">
          <Search size={17} />
          Browse
        </button>
      </section>
      <section className="community-grid">
        {communityCards.map((card) => (
          <article className="community-card" key={card.title}>
            <div className="rating">{card.rating}</div>
            <h3>{card.title}</h3>
            <p>{card.creator}</p>
            <strong>{card.metric}</strong>
            <button type="button">
              <Copy size={16} />
              Save Playbook
            </button>
          </article>
        ))}
      </section>
    </div>
  );
}

function IntegrationsView() {
  return (
    <div className="page-grid">
      <section className="toolbar-band">
        <div>
          <h2>Integrations</h2>
          <p>Tracking and distribution connections for performance accountability.</p>
        </div>
        <button className="primary-button" type="button">
          <Plus size={17} />
          Add Integration
        </button>
      </section>
      <section className="integration-grid">
        {integrationCards.map((integration) => (
          <article className="integration-card" key={integration.name}>
            <div className="integration-icon">
              <Check size={18} />
            </div>
            <h3>{integration.name}</h3>
            <p>{integration.detail}</p>
            <span>{integration.status}</span>
          </article>
        ))}
      </section>
      <section className="code-panel">
        <div>
          <h3>Tracking install</h3>
          <p>Workspace script configured for Drake Dental.</p>
        </div>
        <code>{"<script src=\"https://cdn.vigi.app/tracker.js\" data-workspace=\"wrk_24\" async></script>"}</code>
      </section>
    </div>
  );
}

function SettingsView() {
  return (
    <div className="page-grid settings-layout">
      <section className="settings-panel">
        <h2>Users & Roles</h2>
        {[
          ["Morgan", "Admin", "Active"],
          ["Sarah", "Editor", "Active"],
          ["Alex", "Viewer", "Pending"]
        ].map(([name, role, status]) => (
          <div className="table-row" key={name}>
            <strong>{name}</strong>
            <span>{role}</span>
            <em>{status}</em>
          </div>
        ))}
        <button className="secondary-button" type="button">
          <Plus size={17} />
          Add User
        </button>
      </section>

      <section className="settings-panel">
        <h2>Brand Kit</h2>
        <div className="brand-preview">
          <Image src="/vigi-logo.svg" alt="ViGi" width={140} height={50} />
          <div className="swatches">
            <span className="swatch pink" />
            <span className="swatch navy" />
            <span className="swatch green" />
          </div>
        </div>
        <div className="table-row">
          <strong>Default CTA</strong>
          <span>Book a consultation</span>
          <em>Active</em>
        </div>
      </section>
    </div>
  );
}

function SupportView() {
  return (
    <div className="page-grid support-layout">
      <section className="settings-panel">
        <h2>Onboarding</h2>
        {[
          "Create first campaign",
          "Install tracking script",
          "Publish first video",
          "Review campaign analytics"
        ].map((item, index) => (
          <div className="check-row" key={item}>
            <span className={index < 2 ? "checked" : ""}>
              <Check size={14} />
            </span>
            {item}
          </div>
        ))}
      </section>
      <section className="settings-panel">
        <h2>Support Queue</h2>
        <div className="ticket">
          <strong>Tracking script verification</strong>
          <p>Last updated 18 minutes ago</p>
        </div>
        <div className="ticket">
          <strong>Campaign import question</strong>
          <p>Awaiting user reply</p>
        </div>
      </section>
    </div>
  );
}

function PlannerPreview({ expanded = false }: { expanded?: boolean }) {
  return (
    <section className={expanded ? "planner-board expanded" : "planner-board"}>
      {weekPlan.map((day) => (
        <article className="day-card" key={day.day}>
          <div>
            <strong>{day.day}</strong>
            <span>{day.date}</span>
          </div>
          {day.items.length === 0 ? (
            <button type="button" className="empty-slot">
              <Plus size={17} />
              Add Content
            </button>
          ) : (
            day.items.map((item) => (
              <div className="asset-chip" key={item.title}>
                <span>{item.status}</span>
                <strong>{item.title}</strong>
                <em>{item.platform}</em>
              </div>
            ))
          )}
        </article>
      ))}
    </section>
  );
}

function CampaignDetail() {
  return (
    <section className="detail-panel">
      <div className="toolbar-band compact">
        <div>
          <h2>Spring Whitening Promo</h2>
          <p>Goal: 10 consultation bookings / May 11-24 / Active</p>
        </div>
        <button className="secondary-button" type="button">
          <ArrowRight size={17} />
          View in Planner
        </button>
      </div>
      <div className="asset-list">
        {assets.map((asset) => (
          <article key={asset.title}>
            <span>{asset.day}</span>
            <strong>{asset.title}</strong>
            <em>{asset.status}</em>
            <button type="button">{asset.metric}</button>
          </article>
        ))}
      </div>
    </section>
  );
}

function ActionPanel() {
  return (
    <section className="action-panel">
      <div className="panel-title">
        <Gauge size={20} />
        <div>
          <h2>Next Best Actions</h2>
          <p>Rule-based for V1, AI-assisted later.</p>
        </div>
      </div>
      {recommendations.map((item) => (
        <article className="recommendation" key={item}>
          <Sparkle size={18} />
          <p>{item}</p>
          <button type="button">
            <ArrowRight size={16} />
          </button>
        </article>
      ))}
    </section>
  );
}

function FilmIcon() {
  return <Play size={18} />;
}
