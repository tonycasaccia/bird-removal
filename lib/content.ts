import {
  Bird,
  Feather,
  PawPrint,
  Warehouse,
  Store,
  Factory,
  Boxes,
  GraduationCap,
  Plane,
  type LucideIcon,
} from "lucide-react"

export interface ServiceItem {
  icon: LucideIcon
  title: string
  description: string
  points: string[]
}

export const services: ServiceItem[] = [
  {
    icon: Bird,
    title: "Commercial Bird Removal",
    description:
      "Our core service. We safely and humanely remove birds from warehouses, retail stores, manufacturing facilities, and other commercial buildings. We also remove nests and identify entry points to help prevent birds from returning.",
    points: [
      "Humane extraction of trapped birds and flocks",
      "Nest removal and site clean-up",
      "Exclusion and prevention strategies",
    ],
  },
  {
    icon: Feather,
    title: "Falconry & Bird Deterrence",
    description:
      "Trained falconry provides a natural, effective solution for ongoing outdoor bird pressure. We discourage resident flocks from settling around parking lots, warehouses, campuses, airports, and other commercial properties.",
    points: [
      "Falconry-based abatement for outdoor spaces",
      "Resident flock management and dispersal",
      "Ideal for lots, rooftops, airports, and campuses",
    ],
  },
  {
    icon: PawPrint,
    title: "General Wildlife Removal",
    description:
      "Birds are not the only wildlife that causes problems. We safely and humanely remove raccoons, opossums, skunks, feral cats, and other nuisance wildlife from commercial properties, giving you one reliable company for all your wildlife control needs.",
    points: [
      "Raccoons, possums, and skunks",
      "Feral cats and other nuisance wildlife",
      "One provider for birds and wildlife",
    ],
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
    title: "Warehouses & Logistics",
    description: "High-bay storage, fulfillment, and distribution hubs.",
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
    icon: Boxes,
    title: "Industrial",
    description: "Cold storage, yards, and mixed-use sites.",
  },
  {
    icon: GraduationCap,
    title: "Schools",
    description: "Campuses, athletic facilities, and common areas.",
  },
  {
    icon: Plane,
    title: "Airports",
    description: "Terminals, hangars, and airfield perimeters.",
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
      "The team was upfront about the plan and the timeline. The humane approach mattered to us, and the results spoke for themselves.",
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
