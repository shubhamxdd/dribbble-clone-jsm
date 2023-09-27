import { Menu, Transition } from "@headlessui/react";
import Image from "next/image";
import { Fragment } from "react";

interface Props {
  title: string;
  state: string;
  filters: string[];
  setState: (value: string) => void;
}

const CustomMenu = ({ filters, setState, state, title }: Props) => {
  return (
    <div className="flexStart flex-col w-full gap-7 relative">
      <label htmlFor={title} className="w-full text-gray-100">
        {title}
      </label>
      <Menu as="div" className="self-start relative">
        <div>
          <Menu.Button className="flexCenter custom_menu-btn">
            {state || "Select a category"}
            <Image
              src="/arrow-down.svg"
              alt="arrow down"
              height={5}
              width={10}
            />
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="flexStart custom_menu-items">
            {filters.map((filter) => (
              <Menu.Item key={filter}>
                <button
                  type="button"
                  value={filter}
                  className="custom_menu-item"
                  onClick={(e) => setState(e.currentTarget.value)}
                >
                  {filter}
                </button>
              </Menu.Item>
            ))}
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default CustomMenu;
