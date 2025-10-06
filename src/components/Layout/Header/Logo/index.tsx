import { getImagePrefix } from "@/utils/util";
import Image from "next/image";
import Link from "next/link";

const Logo: React.FC = () => {
  return (
    <Link href="/">
      <Image
        src= {`${getImagePrefix()}images/semmesterlogo1.png.png`}
        alt="logo"
        width={10}
        height={50}
        style={{ width: "125px", height: "70px" }}
        quality={100}
      />
    </Link>
  );
};

export default Logo;
