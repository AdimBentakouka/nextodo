import { PropsWithChildren } from "react";

interface IModal {
    title: string;
    onClose: () => void;
}
export const Modal = ({
    title,
    onClose,
    children,
}: PropsWithChildren<IModal>) => {
    return (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 overflow-y-auto h-full w-full">
            <div className="mx-auto w-96">
                <div className="relative top-28 shadow-lg   ">
                    <div className="relative rounded-lg shadow bg-gray-700 p-4">
                        <div className="flex items-center justify-between">
                        <h3 className="px-6 lg:px-8 text-xl font-medium text-white">
                            {title}
                        </h3>
                        <button
                            type="button"
                            className=" p-2 text-gray-400 bg-transparent rounded-lg hover:bg-gray-800 hover:text-white"
                            onClick={onClose}
                        >
                            <svg
                                aria-hidden="true"
                                className="w-5 h-5"
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    fill-rule="evenodd"
                                    d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                                    clip-rule="evenodd"
                                ></path>
                            </svg>
                        </button>
                        </div>
                        
                        <div className="px-6 py-6 lg:px-8">{children}</div>
                    </div>
                </div>
            </div>
        </div>
    );
};
