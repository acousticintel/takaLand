import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
//custom
const FaTwitter = dynamic(
  async () => (await import("react-icons/fa")).FaTwitter
);
const MdEmail = dynamic(async () => (await import("react-icons/md")).MdEmail);
const FaPhone = dynamic(async () => (await import("react-icons/fa")).FaPhone);

export default function Footer() {
  return (
    <footer className="footer p-10 bg-teal-600 text-neutral-content">
      <div>
        <div className="flex items-center gap-2">
          <div className="relative h-10 w-5">
            <Image
              src="/assets/logo.png"
              layout="fill"
              className="object-contain"
              alt=""
            />
          </div>
          <h1 className="text-4xl font-bold">TAKA</h1>
        </div>
        <p>Documenting Climate Action in Africa.</p>
      </div>
      <div>
        <span className="footer-title">Social</span>
        <div className="grid grid-flow-col gap-4">
          <Link href="tel:+254784471476">
            <a>
              <FaPhone size="2em" />
            </a>
          </Link>
          <Link href="mailto:info@avantgardec.com">
            <a>
              <MdEmail size="2em" />
            </a>
          </Link>
          <a
            target="_blank"
            rel="noopener noreferrer"
            href="https://twitter.com/earth_taka?t=tMKgq8GMhsKKqpGkO-dQuQ&s=09"
          >
            <FaTwitter size="2em" />
          </a>
        </div>
      </div>
    </footer>
  );
}
