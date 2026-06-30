import {
  Bird,
  Warehouse,
  Store,
  Factory,
  ClipboardCheck,
  ShieldCheck,
  Truck,
  Building2,
  Boxes,
  type LucideIcon,
} from "lucide-react"

export interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
}

export const services: ServiceItem[] = [
  {
    icon: Bird,
    title: "Bird Extraction",
    description:
      "Safe, humane capture and removal of birds that have entered your building, using proven, low-stress methods.",
  },
  {
    icon: Warehouse,
    title: "Warehouse Bird Removal",
    description:
      "Targeted removal for high-ceiling warehouses and storage areas where birds roost in rafters and racking.",
  },
  {
    icon: Store,
    title: "Retail Facility Bird Removal",
    description:
      "Discreet removal for stores and customer-facing spaces, protecting inventory and the shopping experience.",
  },
  {
    icon: Factory,
    title: "Industrial Facility Bird Removal",
    description:
      "Removal solutions for manufacturing plants and industrial buildings with complex layouts and equipment.",
  },
  {
    icon: ClipboardCheck,
    title: "Wildlife Assessment",
    description:
      "On-site evaluation to identify entry points, roosting areas, and the scope of activity in your facility.",
  },
  {
    icon: ShieldCheck,
    title: "Prevention Recommendations",
    description:
      "Practical guidance on exclusion and deterrents to help keep birds out long after the removal is complete.",
  },
]

export interface ReasonItem {
  icon: LucideIcon
  title: string
  description: string
}

export const reasons: ReasonItem[] = [
  {
    icon: Bird,
    title: "Humane removal methods",
    description: "We prioritize safe, ethical techniques that protect both wildlife and your facility.",
  },
  {
    icon: Truck,
    title: "Fast response times",
    description: "We understand downtime is costly and move quickly to assess and resolve the problem.",
  },
  {
    icon: Factory,
    title: "Commercial facility experience",
    description: "Hands-on experience with warehouses, distribution centers, and industrial buildings.",
  },
  {
    icon: ClipboardCheck,
    title: "Reliable communication",
    description: "Clear updates and straightforward recommendations from start to finish.",
  },
  {
    icon: ShieldCheck,
    title: "Southern California based",
    description: "Local, dependable service from a team that knows the region and its facilities.",
  },
]

export interface IndustryItem {
  icon: LucideIcon
  title: string
  description: string
}

export const industries: IndustryItem[] = [
  {
    icon: Warehouse,
    title: "Warehousing",
    description: "High-bay storage and fulfillment buildings.",
  },
  {
    icon: Truck,
    title: "Logistics",
    description: "Distribution centers and transfer hubs.",
  },
  {
    icon: Store,
    title: "Retail",
    description: "Stores, big-box locations, and showrooms.",
  },
  {
    icon: Factory,
    title: "Manufacturing",
    description: "Production plants and processing facilities.",
  },
  {
    icon: Building2,
    title: "Property Management",
    description: "Commercial portfolios and managed buildings.",
  },
  {
    icon: Boxes,
    title: "Industrial",
    description: "Cold storage, yards, and mixed-use sites.",
  },
]

export interface Testimonial {
  quote: string
  name: string
  role: string
}

export const testimonials: Testimonial[] = [
  {
    quote:
      "FlightPath responded the same day and cleared the birds from our distribution center without disrupting operations. Professional from start to finish.",
    name: "Operations Manager",
    role: "Regional Distribution Center",
  },
  {
    quote:
      "Brandon was upfront about the plan and the timeline. The humane approach mattered to us, and the results spoke for themselves.",
    name: "Facility Manager",
    role: "Manufacturing Plant",
  },
  {
    quote:
      "Reliable communication and a practical prevention plan. We have not had a recurring issue since they handled it.",
    name: "Property Manager",
    role: "Commercial Real Estate Group",
  },
]

export interface FaqItem {
  question: string
  answer: string
}

export const faqs: FaqItem[] = [
  {
    question: "How quickly can you respond to a service request?",
    answer:
      "We prioritize commercial facilities and aim to schedule an assessment as quickly as possible, often the same or next business day depending on location and scope.",
  },
  {
    question: "Are your removal methods humane?",
    answer:
      "Yes. We use safe, low-stress capture and exclusion techniques designed to protect the birds while resolving the issue in your facility.",
  },
  {
    question: "Do you work around our operating hours?",
    answer:
      "We understand downtime is costly. Whenever possible, we schedule work to minimize disruption to your operation, including off-peak windows.",
  },
  {
    question: "Can you help prevent birds from coming back?",
    answer:
      "After removal, we provide practical prevention recommendations, including entry-point exclusion and deterrent guidance tailored to your building.",
  },
  {
    question: "What areas do you serve?",
    answer:
      "We serve warehouses, distribution centers, retail, and industrial facilities throughout Southern California.",
  },
]
