import { ChangeEvent, InputHTMLAttributes, memo, useEffect, useRef, useState } from 'react';
import { Mods, classNames } from 'shared/lib/classNames';
import cls from './input.module.scss';

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange' | 'readOnly'>;

interface InputProps extends HTMLInputProps {
  className?: string;
  value?: string | number;
  onChange?: (value: string) => void;
  autofocus?: boolean;
  placeholder?: string;
  readonly?: boolean;
}

export const Input = memo(
  ({ className, value, onChange, type = 'text', autofocus, placeholder, readonly }: InputProps) => {
    const ref = useRef<HTMLInputElement>(null);
    const [isFocused, setIsFocused] = useState(false);
    const [caretPosition, setCaretPosition] = useState(0);

    const mods: Mods = {
      [cls.readonly]: readonly,
    };

    const onBlur = () => {
      setIsFocused(false);
    };

    const onFocus = () => {
      setIsFocused(true);
    };

    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.target.value);
      setCaretPosition(e.target.value.length);
    };

    const onSelect = (e: any) => {
      setCaretPosition(e?.target?.selectionStart || 0);
    };

    const isCaretVisible = isFocused && !readonly;

    useEffect(() => {
      if (autofocus) {
        setIsFocused(true);
        ref.current?.focus();
      }
    }, [autofocus]);

    return (
      <div className={classNames(cls.InputWrapper, mods, [className])}>
        {placeholder && <div className={cls.placeholder}>{`${placeholder}>`}</div>}
        <div className={cls.caretWrapper}>
          <input
            ref={ref}
            type={type}
            value={value}
            onChange={onChangeHandler}
            className={cls.input}
            onFocus={onFocus}
            onBlur={onBlur}
            onSelect={onSelect}
            readOnly={readonly}
            autoFocus={autofocus}
          />
          {isCaretVisible && <span className={cls.caret} style={{ left: `${caretPosition * 9}px` }} />}
        </div>
      </div>
    );
  },
);
