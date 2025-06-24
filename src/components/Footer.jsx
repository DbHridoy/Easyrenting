import {
  Facebook,
  LinkedIn,
  NavIcon,
  PhoneIcon,
  Twitter,
  Vector,
  Youtube,
} from "./SvgIcons";

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <span className="flex items-center gap-1">
              <NavIcon className="w-10 h-9 inline-block" />{" "}
              <span className="text-4xl text-cyan-500 font-extrabold">
                EASYRENTING
              </span>
            </span>
            <p className="text-gray-400 mb-4">
              Sed ut perspiciatis undmnis is iste natus error sit amet
              voluptatem totam rem aperiam.
            </p>
            <span className="flex items-center gap-1">
              <PhoneIcon className="w-4 h-4 inline-block" />{" "}
              <span className="text-white">+012 (345) 678 99</span>
            </span>
          </div>

          <div>
            <h4 className="font-bold mb-4">Resources</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Browse Properties
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact Us{" "}
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  How it Works
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  FAQ
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Terms of Conditions
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold mb-4">Follow Us On</h4>
            <div className="flex space-x-4">
              <Facebook />
              <Twitter />
              <Youtube />
              <LinkedIn />
            </div>
            <p className="text-gray-400 text-sm mt-4">© 2023 Invitte.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
