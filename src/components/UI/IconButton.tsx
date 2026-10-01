import { memo, type ComponentPropsWithoutRef, type ComponentType } from 'react';

import { log } from '../../log';

type IconButtonProps = ComponentPropsWithoutRef<'button'> & {
  icon: ComponentType<ComponentPropsWithoutRef<'svg'>>;
};

const IconButton = memo(function IconButton({
  children,
  icon,
  ...props
}: IconButtonProps) {
  log('<IconButton /> rendered', 2);

  const Icon = icon;
  return (
    <button {...props} className="button">
      <Icon className="button-icon" />
      <span className="button-text">{children}</span>
    </button>
  );
});

export default IconButton;