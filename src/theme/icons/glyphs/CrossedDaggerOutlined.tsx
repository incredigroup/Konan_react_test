/* eslint-disable max-len */
import { FC } from "react";
import cx from "clsx";

// types
import { GlyphIcon } from "./shared";

// styles
import { useStyles } from "./shared/styles";

const CrossedDaggerOutlined: FC<GlyphIcon> = ({
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
      fill="none"
      viewBox="0 0 20 20"
      onClick={onClick}
    >
      <g
        fill={color}
        fillRule="evenodd"
        clipPath="url(#mitreattack-sm_svg__a)"
        clipRule="evenodd"
      >
        <path d="M16.731 2.304a.5.5 0 0 1 .147.354v3.19a.5.5 0 0 1-.171.376L13.03 9.44a.5.5 0 1 1-.658-.753l3.506-3.067V3.158h-2.463l-2.927 3.345a.5.5 0 1 1-.752-.659l3.076-3.515a.5.5 0 0 1 .376-.171h3.19a.5.5 0 0 1 .353.146Zm-6.306 8.752a.5.5 0 0 1-.047.706l-2.164 1.893-.166.166.71.71a1.252 1.252 0 0 1-1.77 1.77l-.71-.71-2.305 2.305a.5.5 0 0 1-.24.133l-1.729.399a.5.5 0 0 1-.466-.134l-.397-.397-.001-.001-.4-.397a.5.5 0 0 1-.134-.467l.4-1.729a.5.5 0 0 1 .134-.24l2.304-2.305-.71-.71a1.252 1.252 0 0 1 1.77-1.77l.71.71.167-.167 1.724-1.97a.5.5 0 1 1 .752.659l-1.735 1.982a.46.46 0 0 1-.022.025l-.178.178 1.419 1.419.178-.178a.522.522 0 0 1 .024-.023L9.72 11.01a.5.5 0 0 1 .706.047ZM4.15 13.465l-2.203 2.203-.305 1.318.204.203.203.202 1.318-.304 2.203-2.203-1.42-1.419Zm-.353-2.48a.252.252 0 0 0-.356.356l4.252 4.253a.252.252 0 0 0 .356-.356l-4.252-4.253Z" />
        <path d="M3.395 2.304a.5.5 0 0 1 .354-.146h3.19a.5.5 0 0 1 .376.17l7.43 8.493.167.167.71-.71a1.252 1.252 0 1 1 1.77 1.77l-.71.71 2.304 2.304a.5.5 0 0 1 .142.282l.27 1.86a.5.5 0 0 1-.144.429l-.268.263-.258.262a.5.5 0 0 1-.427.145l-1.865-.266a.5.5 0 0 1-.283-.141l-2.304-2.305-.71.71a1.252 1.252 0 0 1-1.77-1.77l.71-.71-.167-.166L3.42 6.224a.5.5 0 0 1-.171-.377v-3.19a.5.5 0 0 1 .146-.353Zm9.39 10.81 1.42-1.42-.178-.177a.577.577 0 0 1-.023-.025L6.711 3.158H4.25V5.62l8.334 7.293a.437.437 0 0 1 .024.023l.179.178Zm1.77 1.77 2.187 2.187 1.45.206.09-.091.09-.089-.21-1.445-2.187-2.187-1.42 1.42Zm-2.479.354a.252.252 0 1 0 .356.356l4.253-4.253a.252.252 0 0 0-.356-.356l-4.253 4.253Z" />
      </g>
      <defs>
        <clipPath id="mitreattack-sm_svg__a">
          <path fill="#fff" d="M0 0h20v20H0z" />
        </clipPath>
      </defs>
    </svg>
  );
};

export default CrossedDaggerOutlined;
