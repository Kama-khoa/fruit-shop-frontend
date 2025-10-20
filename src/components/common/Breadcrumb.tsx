import Link from 'next/link';
import { ChevronRight } from 'lucide-react';
import { ROUTES } from '@/lib/utils/routes';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: Props) {
  return (
    <nav className="flex items-center text-xs font-normal text-gray-500" aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2">
        <li className="inline-flex items-center">
          <Link href={ROUTES.ROOT} className="hover:text-gray-900">
            Trang chủ
          </Link>
        </li>
        {items.map((item, index) => (
          <li key={index}>
            <div className="flex items-center">
              <ChevronRight className="w-3 h-3 text-gray-400" />
              {item.href ? (
                <Link href={item.href} className="ml-1 md:ml-2 hover:text-gray-900">
                  {item.label}
                </Link>
              ) : (
                <span className="ml-1 md:ml-2 text-gray-900">{item.label}</span>
              )}
            </div>
          </li>
        ))}
      </ol>
    </nav>
  );
}
