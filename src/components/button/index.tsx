import cn from 'classnames';
import { Link } from 'react-router-dom';

import { getExtraClasses } from '@utils/common';

import styles from './styles.scss';


const Button: React.FC<any> = (props: any) => {
  const {
    children,
    onClick,
    className,
    element,
    href,
    type,
    disabled,
    name,
    id,
    onChange,
    target,
    accept,
    multiple = false,
  } = props;
  const extraClasses = getExtraClasses(styles, className);
  if (element === 'a') {
    const isExternalLink = (href || '').indexOf('http') !== -1;
    if (isExternalLink) {
      return (
        <a
          className={cn(styles.btn, extraClasses)}
          href={href}
          onClick={onClick}
          target={target}
          rel="nofollow noopener noreferrer"
        >
          {children}
        </a>
      );
    }
    return (
      <Link
        className={cn(styles.btn, extraClasses)}
        type={type || 'button'}
        to={href}
        onClick={onClick}
        target={target}
      >
        {children}
      </Link>
    );
  }
  if (element === 'file') {
    return (
      <div className={cn(styles.btn, extraClasses)}>
        <span>{children}</span>
        <input
          type="file"
          name={name}
          id={id}
          onClick={onClick}
          accept={accept}
          onChange={onChange}
          multiple={multiple}
        />
      </div>
    );
  }
  return (
    <button
      className={cn(styles.btn, extraClasses)}
      disabled={disabled}
      type={type || 'button'}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
export default Button;
