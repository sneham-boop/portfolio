import { IconsInfoObject } from "../../hooks/useIcons";

// This component is reused in Project component.
export default function Icons({
  size = 50,
  descShowFlag = true,
  iconNames = Object.keys(IconsInfoObject),
}) {
  const iconsComponentArray = iconNames.map((key, index) => {
    const { slug: IconComponent, color, text } = IconsInfoObject[key] || IconsInfoObject["html"];
    return (
      <li key={`li-${index}`} className="skill">
        <IconComponent key={index} size={size} color={color} />
        {descShowFlag && <span className="skill-name">{text}</span>}
      </li>
    );
  });
  return <>{iconsComponentArray}</>;
}
