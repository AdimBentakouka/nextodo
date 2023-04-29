import { ChangeEvent } from "react";

export type SelectOption = {
    id: number;
    label: string;
};

interface ISelectBoxProps {
    id: string;
    defaultValue?: string;
    options: SelectOption[];
    onChange: (param : string) => void;
}



export const SelectBox = ({ id, defaultValue = "default", options, onChange }: ISelectBoxProps) => {

    const handlerChange = (event : ChangeEvent<HTMLSelectElement>) => {
        onChange(event.target.value)
    }

    return (
        <select
            id={id}
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  p-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 h-12"
            defaultValue={"default"}
            onChange={(event) => handlerChange(event)}
        >
            <option value="default" disabled>
                Choisir un projet
            </option>
            {options.map(({ label, id }, key) => (
                <option key={key} value={id}>{label}</option>
            ))}
        </select>
    );
};
