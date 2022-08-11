import Link from 'next/link'

type Props = {
  text: string;
  href: string;
};

export default function index({ text, href }:Props) {
  return (
    <Link href={ href }>
        <a>{ text }</a>
    </Link>
  )
}