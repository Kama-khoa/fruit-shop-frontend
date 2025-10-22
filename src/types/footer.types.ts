export interface LinkItem {
  label: string;
  href: string;
}

export interface SocialLink {
  name: string;
  href: string;
  color: string;
}

export interface ContactInfo {
  phone: string;
  email: string;
  hours: string;
}

// Config file for easy maintenance
export const FOOTER_CONFIG = {
  contact: {
    phone: '1900 9999',
    phoneHref: 'tel:19009999',
    email: 'contact@fruityfruit.com',
    emailHref: 'mailto:contact@fruityfruit.com',
    hours: 'Thứ 2 - Thứ 6: 8h - 22h',
  },
  
  support: [
    { label: 'Đơn hàng của bạn', href: '/don-hang' },
    { label: 'Hoàn hàng và đổi trả', href: '/hoan-tra' },
    { label: 'Chính sách giao hàng', href: '/chinh-sach-giao-hang' },
    { label: 'Chính sách đổi trả', href: '/chinh-sach-doi-tra' },
    { label: 'Chính sách bảo mật', href: '/chinh-sach-bao-mat' },
    { label: 'Trung tâm hỗ trợ', href: '/ho-tro' },
  ],
  
  info: [
    { label: 'Cơ hội việc làm tại Fruity Fruit', href: '/tuyen-dung' },
    { label: 'Về Fruity Fruit', href: '/gioi-thieu' },
    { label: 'Các nhà đầu tư', href: '/nha-dau-tu' },
    { label: 'Đánh giá khách hàng', href: '/danh-gia' },
    { label: 'Trách nhiệm cộng đồng', href: '/trach-nhiem-cong-dong' },
    { label: 'Các cơ sở cửa hàng', href: '/cua-hang' },
  ],
  
  apps: {
    googlePlay: 'https://play.google.com/store',
    appStore: 'https://apps.apple.com',
  },
  
  social: [
    { name: 'Facebook', href: 'https://facebook.com/fruityfruit' },
    { name: 'Instagram', href: 'https://instagram.com/fruityfruit' },
    { name: 'Youtube', href: 'https://youtube.com/@fruityfruit' },
    { name: 'Twitter', href: 'https://twitter.com/fruityfruit' },
  ],
};