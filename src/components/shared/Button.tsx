interface ButtonProps {
   text: string;
   version: string;
   type: "button" | "submit" | "reset";
   isDisabled: boolean;
}

export const Button: React.FC<ButtonProps> = ({
   text,
   version,
   type,
   isDisabled,
}) => {
   return (
      <button
         type={type}
         disabled={isDisabled}
         className={`btn btn-${version}`}
      >
         {text}
      </button>
   );
};
