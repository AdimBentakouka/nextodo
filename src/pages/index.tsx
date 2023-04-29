import Head from "next/head";
import { useEffect, useState } from "react";

import { NavBar } from "@/components/navbar";
import { Button } from "@/components/button";
import { SelectBox, SelectOption } from "@/components/selectbox";
import { Modal } from "@/components/modal";

const listProject: SelectOption[] = [
    {
        id: 1,
        label: "Project 1",
    },
    {
        id: 2,
        label: "Project 2",
    },
];

export default function Home() {

    const [openModal, setOpenModal] = useState<string>();

    return (
        <>
            <Head>
                <title>Nextodo</title>
            </Head>
            <main>
                <NavBar title="Nextodo" img="/nextodo.png">
                    <SelectBox
                        id="project"
                        options={listProject}
                        onChange={(param) => {
                            alert(`#TODO redirect ${param}`)
                        }}
                    />
                    <Button
                        label="Créer un projet"
                        color="default"
                        onClick={() => setOpenModal("createProject")}
                    />
                </NavBar>
                {openModal === "createProject" ? <ModalCreateProject onClose={() => setOpenModal("")} /> : null}
            </main>
        </>
    );
}

interface IModalHome {
    onClose: () => void
}

const ModalCreateProject = ({onClose} : IModalHome) => {

    const [inputValue, setInputValue] = useState<string>();

    const onSubmit = () => {
        alert(`#TODO createProject ${inputValue}`)
    }

    return (
        <Modal
            title={"Créer un projet"}
            onClose={onClose}
        >
            <div className="space-y-6">
                <div>
                    <label
                        htmlFor="project"
                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                    >
                        Nom du projet
                    </label>
                    <input
                        type="text"
                        name="project"
                        id="project"
                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                        placeholder="project#1"
                        onChange={(event) => setInputValue(event.target.value)}
                        value = {inputValue}
                        required
                    />
                </div>

                <button
                    className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                    onClick={() => onSubmit()}
                >
                    Créer le projet
                </button>
            </div>
        </Modal>
    );
};
