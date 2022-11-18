import "./buttons.css";
export const Buttons = ({ buttonName }) => {
  return (
    <div>
      <button className="buttons-primary">{buttonName}</button>
    </div>
  );
};
