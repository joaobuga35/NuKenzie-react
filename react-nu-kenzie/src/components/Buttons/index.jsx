import "./button.css";

export const Button = ({ onClick, children, className }) => {
  return (
    <div>
      <button className={className} onClick={() => onClick()}>
        {children}
      </button>
    </div>
  );
};
