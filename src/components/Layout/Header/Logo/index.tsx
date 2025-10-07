import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src={`${getImagePrefix()}/images/semmesterlogo1.png.png`}
        alt="logo"
        width={125}
        height={70}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
