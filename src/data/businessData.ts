import communityCare from "@/assets/kotla/community-care.webp";
import babyCareIllustration from "@/assets/kotla/categories/baby-care.svg";
import elderCareIllustration from "@/assets/kotla/categories/elder-care.svg";
import firstAidIllustration from "@/assets/kotla/categories/first-aid.svg";
import homeHealthcareIllustration from "@/assets/kotla/categories/home-healthcare.svg";
import medicalDevicesIllustration from "@/assets/kotla/categories/medical-devices.svg";
import medicinesIllustration from "@/assets/kotla/categories/medicines.svg";
import personalCareIllustration from "@/assets/kotla/categories/personal-care.svg";
import vitaminsWellnessIllustration from "@/assets/kotla/categories/vitamins-wellness.svg";
import essentials from "@/assets/kotla/essentials.webp";
import healthCamp from "@/assets/kotla/health-camp.webp";
import interior from "@/assets/kotla/interior.webp";
import storefront from "@/assets/kotla/storefront.webp";

export const businessData = {
  name: "Kotla Medicals",
  legalName: "Kotla Medical Store",
  tagline: "Trusted Healthcare Partner",
  description:
    "Your trusted local medical store in Kovvur for medicines, healthcare essentials, wellness and everyday medical needs.",
  address: {
    street: "Main Road, Opposite Lakshmi Cafe",
    locality: "Kovvur",
    region: "Andhra Pradesh",
    postalCode: "534350",
    country: "India",
    formatted:
      "Main Road, Opposite Lakshmi Cafe, Kovvur, Andhra Pradesh 534350, India",
  },
  phonePrimary: "+91 92908 76450",
  phoneSecondary: "+91 96662 96766",
  phoneHref: "tel:+919290876450",
  secondaryPhoneHref: "tel:+919666296766",
  email: "kotla.medical@gmail.com",
  emailHref: "mailto:kotla.medical@gmail.com",
  websiteHref: "https://kotlamedicalstores.com/",
  whatsapp:
    "https://wa.me/919290876450?text=Hello%20Kotla%20Medicals%2C%20I%20would%20like%20to%20enquire%20about%20a%20healthcare%20product.",
  directions:
    "https://www.google.com/maps/search/?api=1&query=Kotla+Medical+Store,+Main+Road,+Opposite+Lakshmi+Cafe,+Kovvur,+Andhra+Pradesh+534350",
  mapEmbed:
    "https://maps.google.com/maps?q=Kotla+Medical+Store,+Main+Road,+Opposite+Lakshmi+Cafe,+Kovvur,+Andhra+Pradesh+534350&output=embed",
  services: [
    {
      title: "Medicines",
      description: "Everyday medicine needs with convenient local access in Kovvur.",
      accent: "electric" as const,
    },
    {
      title: "Healthcare essentials",
      description: "First aid, hygiene and home healthcare essentials for daily care.",
      accent: "mint" as const,
    },
    {
      title: "Wellness & personal care",
      description: "Vitamins, wellness, oral care and personal care categories in one place.",
      accent: "violet" as const,
    },
  ],
  categories: [
    {
      name: "Medicines",
      image: medicinesIllustration,
      imageAlt: "Colorful illustration of medicine tablets and a medicine bottle",
    },
    {
      name: "First aid",
      image: firstAidIllustration,
      imageAlt: "Colorful illustration of a first-aid kit and bandage",
    },
    {
      name: "Home healthcare",
      image: homeHealthcareIllustration,
      imageAlt: "Colorful illustration of a home health monitor",
    },
    {
      name: "Elder care",
      image: elderCareIllustration,
      imageAlt: "Colorful illustration representing elder care and mobility support",
    },
    {
      name: "Baby care",
      image: babyCareIllustration,
      imageAlt: "Colorful illustration of a baby bottle and baby-care items",
    },
    {
      name: "Personal care",
      image: personalCareIllustration,
      imageAlt: "Colorful illustration of personal-care bottles and a leaf",
    },
    {
      name: "Vitamins & wellness",
      image: vitaminsWellnessIllustration,
      imageAlt: "Colorful illustration of vitamins and a fresh orange",
    },
    {
      name: "Medical devices",
      image: medicalDevicesIllustration,
      imageAlt: "Colorful illustration of a health monitor and thermometer",
    },
  ],
  images: { storefront, interior, essentials, healthCamp, communityCare },
} as const;