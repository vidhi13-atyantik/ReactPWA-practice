import { forwardRef } from "react";
import { getExtraClasses } from "@utils/common";
import cn from "classnames";
import styles from "./styles.scss";

interface IInputProps
  extends React.DetailedHTMLProps<
    React.InputHTMLAttributes<HTMLInputElement>,
    HTMLInputElement
  > {
  lefticon?: string;
  righticon?: string;
  // children:string
  ParentClass?: string;
}

export const Input = forwardRef<any, IInputProps>(
  (
    { className, lefticon, righticon, ParentClass, ...restInputProps },
    ref
  ) => {
    const classNames = getExtraClasses(styles, className);
    const ParentClassname = getExtraClasses(styles, ParentClass);
    return (
      <>
        <div className={cn(ParentClassname)}>
          <input
            ref={ref} 
            className={cn(classNames, styles.formControl)}
            {...restInputProps}
          />
          {lefticon && (
            <span className={cn(styles["left-icon"])}>
              <img src={lefticon} className="icon" />
            </span>
          )}
          {righticon && (
            <span className={cn(styles["right-icon"])}>
              <img
                src={righticon}
                className={cn(styles["input-icon"], "icon")}
              />
            </span>
          )}
        </div>
      </>
    );
  }
);
