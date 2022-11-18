import "./button.css";

export const Button = ({ onClick, children }) => {
  return (
    <div>
      <button
        className="buttons-primary"
        type="button"
        onClick={() => onClick()}
      >
        {children}
      </button>
    </div>
  );
};
