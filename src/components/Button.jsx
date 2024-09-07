const Button = ({ classname, text, href, newTab, bg, onClick, ...props }) => {
  const baseClasses = "rounded-full";

  const target = newTab && href ? "_blank" : undefined;

  if (href) {
    return (
      <a
        href={href}
        className={`${baseClasses} ${classname}`}
        target={target}
        rel="noopener noreferrer"
        {...props}
      >
        {text}
      </a>
    );
  } else {
    return (
      <button
        onClick={onClick}
        className={`${baseClasses} ${classname} flex gap-5`}
        {...props}
      >
        {text}
      </button>
    );
  }
};

export default Button;
