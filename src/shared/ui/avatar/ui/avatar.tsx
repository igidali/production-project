import { CSSProperties, useMemo } from 'react';
import { Mods, classNames } from 'shared/lib/classNames';
import cls from './avatar.module.scss';

interface AvatarProps {
  className?: string;
  src?: string;
  alt?: string;
  size?: number;
}

export const Avatar = ({ className, src, alt, size = 100 }: AvatarProps) => {
  const mods: Mods = {};

  const styles = useMemo<CSSProperties>(
    () => ({
      width: size || 100,
      height: size || 100,
    }),
    [size],
  );

  return (
    <img
      className={classNames(cls.Avatar, mods, [className])}
      src={src}
      alt={alt}
      width={size}
      height={size}
      style={styles}
    />
  );
};
