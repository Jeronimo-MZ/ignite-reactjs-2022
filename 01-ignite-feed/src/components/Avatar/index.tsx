import styles from "./avatar.module.css";

type AvatarProps = {
    src: string;
    alt?: string;
    hasBorder?: boolean;
};
export function Avatar({ src, alt, hasBorder = false }: AvatarProps) {
    return (
        <div
            className={
                hasBorder ? styles.imgWrapperWithBorder : styles.imgWrapper
            }
        >
            <img src={src} alt={alt} />
        </div>
    );
}
