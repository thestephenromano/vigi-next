import {
  BarChart3,
  CalendarDays,
  Clapperboard,
  Compass,
  FileStack,
  Film,
  Home,
  LifeBuoy,
  PlugZap,
  Settings,
  Sparkles,
  UsersRound
} from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type ViewId =
  | "home"
  | "planner"
  | "campaigns"
  | "studio"
  | "templates"
  | "analytics"
  | "community"
  | "integrations"
  | "settings"
  | "support";

export type NavItem = {
  id: ViewId;
  label: string;
  icon: LucideIcon;
};

export const workspaceNav: NavItem[] = [
  { id: "home", label: "Home", icon: Home },
  { id: "planner", label: "Content Planner", icon: CalendarDays },
  { id: "campaigns", label: "Campaigns", icon: Clapperboard },
  { id: "studio", label: "Studio", icon: Film },
  { id: "templates", label: "Templates", icon: FileStack },
  { id: "analytics", label: "Analytics", icon: BarChart3 },
  { id: "community", label: "Community", icon: UsersRound }
];

export const utilityNav: NavItem[] = [
  { id: "integrations", label: "Integrations", icon: PlugZap },
  { id: "settings", label: "Settings", icon: Settings },
  { id: "support", label: "Support", icon: LifeBuoy }
];

export const workspaces = [
  "ViGi Agency",
  "Drake Dental",
  "Brookhaven Law",
  "Atlanta CPA Group"
];

export const momentum = [
  { label: "This Week", value: "5 scheduled", tone: "blue" },
  { label: "This Month", value: "18 published", tone: "green" },
  { label: "Best Performer", value: "FAQ Video", tone: "pink" },
  { label: "Consistency", value: "3-week streak", tone: "amber" }
];

export const weekPlan = [
  {
    day: "Mon",
    date: "May 11",
    items: [
      { title: "Whitening FAQ", status: "Ready", platform: "Website + YouTube" }
    ]
  },
  {
    day: "Tue",
    date: "May 12",
    items: [
      { title: "Spring Promo Intro", status: "Published", platform: "Facebook" }
    ]
  },
  { day: "Wed", date: "May 13", items: [] },
  {
    day: "Thu",
    date: "May 14",
    items: [
      { title: "Patient Testimonial", status: "Draft", platform: "Instagram" }
    ]
  },
  { day: "Fri", date: "May 15", items: [] }
];

export const campaigns = [
  {
    name: "Spring Whitening Promo",
    goal: "10 consultation bookings",
    status: "Active",
    progress: 68,
    dates: "May 11-24",
    assets: 5,
    leads: 14,
    ctr: "4.8%",
    badge: "Top Performer"
  },
  {
    name: "Evergreen FAQ Series",
    goal: "Rank for local search topics",
    status: "Recurring",
    progress: 42,
    dates: "Weekly",
    assets: 12,
    leads: 21,
    ctr: "3.6%",
    badge: "Reusable"
  },
  {
    name: "New Patient Trust Builder",
    goal: "Improve booking confidence",
    status: "Draft",
    progress: 24,
    dates: "Unscheduled",
    assets: 4,
    leads: 0,
    ctr: "-",
    badge: "Needs Approval"
  }
];

export const assets = [
  {
    day: "Day 1",
    title: "Intro Offer Video",
    status: "Published",
    metric: "4.2% CTR"
  },
  {
    day: "Day 5",
    title: "Patient Testimonial",
    status: "Scheduled",
    metric: "May 14"
  },
  {
    day: "Day 10",
    title: "FAQ Explainer",
    status: "Draft",
    metric: "Open in Studio"
  }
];

export const templateCards = [
  {
    title: "Dental New Patient Funnel",
    type: "Campaign Template",
    uses: "187 uses",
    tag: "Dental"
  },
  {
    title: "Law Firm Intake Explainer",
    type: "ViGi Template",
    uses: "94 uses",
    tag: "Legal"
  },
  {
    title: "CPA Tax Deadline Sprint",
    type: "Saved Remix",
    uses: "41 uses",
    tag: "Accounting"
  }
];

export const integrationCards = [
  { name: "ViGi Tracking Script", status: "Installed", detail: "Events active" },
  { name: "Google Analytics", status: "Pending", detail: "OAuth needed" },
  { name: "Stripe", status: "Connected", detail: "Agency plan" },
  { name: "HubSpot", status: "Later", detail: "Deferred for V1" }
];

export const communityCards = [
  {
    title: "Dental Recall Campaign",
    creator: "Dental Growth Lab",
    metric: "Used 247 times",
    rating: "4.8"
  },
  {
    title: "Legal Consultation Sprint",
    creator: "AgencyPro Media",
    metric: "42 new uses",
    rating: "4.7"
  },
  {
    title: "Local Authority FAQ Pack",
    creator: "ViGi Team",
    metric: "Featured",
    rating: "4.9"
  }
];

export const recommendations = [
  "Testimonial videos are outperforming campaign average by 2.1x.",
  "Friday has no scheduled content.",
  "Move the CTA asset earlier in Spring Whitening Promo."
];

export const Sparkle = Sparkles;
