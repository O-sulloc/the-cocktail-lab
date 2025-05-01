import { 
  FaInstagram, FaFacebookF, FaWhatsapp, FaLinkedinIn,
  FaInstagramSquare, FaFacebookSquare, FaWhatsappSquare, FaLinkedin
} from 'react-icons/fa';

export const socialLinks = [
  { 
    name: 'WhatsApp',
    href: process.env.NEXT_PUBLIC_WHATSAPP_URL || '#',
    OutlinedIcon: FaWhatsapp,
    FilledIcon: FaWhatsappSquare
  },
  { 
    name: 'Instagram',
    href: process.env.NEXT_PUBLIC_INSTAGRAM_URL || '#',
    OutlinedIcon: FaInstagram,
    FilledIcon: FaInstagramSquare
  },
  { 
    name: 'Facebook',
    href: process.env.NEXT_PUBLIC_FACEBOOK_URL || '#',
    OutlinedIcon: FaFacebookF,
    FilledIcon: FaFacebookSquare
  },
  { 
    name: 'LinkedIn',
    href: process.env.NEXT_PUBLIC_LINKEDIN_URL || '#',
    OutlinedIcon: FaLinkedinIn,
    FilledIcon: FaLinkedin
  }
]; 