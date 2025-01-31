/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const BugOutlined: FC<GlyphIcon> = ({
  className,
  color = "currentColor",
  onClick,
}) => {
  const classes = useStyles();
  return (
    <svg
      className={cx({
        [classes.root]: true,
        [className || ""]: className,
      })}
      xmlns="http://www.w3.org/2000/svg"
      width={20}
      height={20}
      viewBox="0 0 20 20"
      onClick={onClick}
    >
      <g fill={color} fillRule="nonzero">
        <path d="M10 4.857c-2.794 0-4.786 2.097-4.786 5.143 0 3.107 2.046 5.5 4.786 5.5 2.74 0 4.786-2.393 4.786-5.5 0-3.046-1.992-5.143-4.786-5.143Zm0 1c2.23 0 3.786 1.638 3.786 4.143 0 2.587-1.636 4.5-3.786 4.5-2.15 0-3.786-1.913-3.786-4.5 0-2.505 1.556-4.143 3.786-4.143Z" />
        <path d="m13.523 13.455.068.06L14.8 14.8a.5.5 0 0 1 .095.145l.028.083.403 1.715a.5.5 0 0 1-.945.314l-.028-.085-.373-1.584-1.118-1.188a.5.5 0 0 1-.039-.64l.06-.067a.5.5 0 0 1 .565-.084l.074.046Zm-6.407.038a.5.5 0 0 1 .077.636l-.056.07-1.118 1.188-.373 1.585a.5.5 0 0 1-.512.385l-.089-.013a.5.5 0 0 1-.385-.512l.013-.09.403-1.714a.5.5 0 0 1 .069-.16l.054-.068 1.21-1.286a.5.5 0 0 1 .707-.021Zm8.934-2.707a.5.5 0 0 1 .412.216l.04.07.807 1.715a.5.5 0 0 1-.859.504l-.045-.078-.673-1.428h-1.295a.5.5 0 0 1-.492-.41l-.008-.09a.5.5 0 0 1 .41-.491l.09-.008h1.613Zm-10.487 0a.5.5 0 0 1 .09.992l-.09.008H4.266l-.67 1.427a.5.5 0 0 1-.581.27l-.085-.03a.5.5 0 0 1-.27-.581l.03-.085.807-1.714a.5.5 0 0 1 .37-.28l.083-.007h1.613Zm10.916-6.428.09.012a.5.5 0 0 1 .384.512l-.013.09-.806 3.428a.5.5 0 0 1-.243.322l-.077.035-1.21.429a.5.5 0 0 1-.416-.905l.082-.038.953-.338.744-3.162a.5.5 0 0 1 .512-.385Zm-12.475.299.029.086.743 3.162.954.338a.5.5 0 0 1 .327.55l-.023.088a.5.5 0 0 1-.55.327l-.088-.022-1.21-.429a.5.5 0 0 1-.294-.277l-.026-.08-.807-3.428a.5.5 0 0 1 .945-.315Zm4.004-1.486.04.081.806 2.143a.5.5 0 0 1-.896.434l-.04-.081-.806-2.143a.5.5 0 0 1 .845-.505l.051.071Zm4.588-.21a.5.5 0 0 1 .316.557l-.024.087-.807 2.143a.5.5 0 0 1-.96-.266l.024-.087.807-2.143a.5.5 0 0 1 .644-.291Z" />
      </g>
    </svg>
  );
};

export default BugOutlined;
