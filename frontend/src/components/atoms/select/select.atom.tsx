import { Listbox, Transition } from "@headlessui/react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import { CheckIcon } from "@heroicons/react/outline";
import { FC, Fragment, useState } from "react";

interface ISelectItems {
  id: string | number;
  name: string;
  value: string | number | undefined;
}

interface ISelect {
  datasets: ISelectItems[];
  wrapperClassName: string;
  isIconDropdown?: boolean;
  isCheckIcon?: boolean;
  selectedClassName?: string;
  optionsClassName?: string;
}

const Select: FC<ISelect> = ({
  datasets,
  wrapperClassName,
  selectedClassName,
  optionsClassName,
  isIconDropdown,
  isCheckIcon,
}) => {
  const [selected, setSelected] = useState<ISelectItems>(
    datasets[0] as ISelectItems
  );
  return (
    <div className={wrapperClassName}>
      <Listbox value={selected} onChange={setSelected}>
        <div className="relative mt-1">
          <Listbox.Button className={selectedClassName}>
            <span className="block truncate">{selected.name}</span>
            {isIconDropdown && (
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
                <ChevronDownIcon
                  className="h-5 w-5 text-gray-400"
                  aria-hidden="true"
                />
              </span>
            )}
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className={optionsClassName}>
              {datasets.map((data, index) => (
                <Listbox.Option
                  key={index}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-amber-100 text-amber-900" : "text-gray-900"
                    }`
                  }
                  value={data}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {data.name}
                      </span>
                      {selected && isCheckIcon ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-amber-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

Select.defaultProps = {
  datasets: [
    { name: "Wade Cooper", id: 1, value: 1 },
    { name: "Arlene Mccoy", id: 2, value: 1 },
    { name: "Devon Webb", id: 3, value: 1 },
    { name: "Tom Cook", id: 4, value: 1 },
    { name: "Tanya Fox", id: 5, value: 1 },
    { name: "Hellen Schmidt", id: 6, value: 1 },
  ],
  isIconDropdown: true,
  wrapperClassName: "fixed top-16 w-72",
  optionsClassName:
    "absolute mt-1 max-h-60 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none sm:text-sm",
  selectedClassName:
    "relative w-full cursor-default rounded-lg bg-white py-2 pl-3 pr-10 text-left shadow-md focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm",
  isCheckIcon: false,
};
export { Select };
