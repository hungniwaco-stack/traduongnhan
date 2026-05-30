type Props = { href: string; label?: string };

export default function AffiliateButton({ href, label = "Xem sản phẩm trên Shopee" }: Props) {
  return (
    <a className="btn btn-primary" href={href} target="_blank" rel="noopener noreferrer sponsored nofollow">
      {label}
    </a>
  );
}
