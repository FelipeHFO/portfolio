import Image from "next/image";
import Link from "next/link";
import React from "react";
import styles from "./SocialNetworksCard.module.css";

type SocialNetworksCardProps = {
  link: string;
  image: string;
  alt: string;
}

const SocialNetworksCard = ({ link, image, alt }: SocialNetworksCardProps) => (
  <Link href={link} passHref>
    <a href="#" target="_blank" className={styles.btn_social_network}>
      <Image
        width={100}
        height={100}
        src={image}
        alt={alt}
      />
    </a>
  </Link>
);

export default SocialNetworksCard;