import React from "react"
import { Fragment, useState } from "react"

import { Disclosure, Menu, Switch, Transition } from "@headlessui/react"
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid"
import {
  Bars3Icon,
  BellIcon,
  CogIcon,
  CreditCardIcon,
  KeyIcon,
  SquaresPlusIcon,
  UserCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline"

const user = {
  name: "Debbie Lewis",
  handle: "deblewis",
  email: "debbielewis@example.com",
  imageUrl:
    "https://images.unsplash.com/photo-1517365830460-955ce3ccd263?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=320&h=320&q=80",
}
const navigation = [
  { name: "Dashboard", href: "#", current: true },
  { name: "Jobs", href: "#", current: false },
  { name: "Applicants", href: "#", current: false },
  { name: "Company", href: "#", current: false },
]
const subNavigation = [
  { name: "Profile", href: "#", icon: UserCircleIcon, current: true },
  { name: "Account", href: "#", icon: CogIcon, current: false },
  { name: "Password", href: "#", icon: KeyIcon, current: false },
  { name: "Notifications", href: "#", icon: BellIcon, current: false },
  { name: "Billing", href: "#", icon: CreditCardIcon, current: false },
  { name: "Integrations", href: "#", icon: SquaresPlusIcon, current: false },
]
const userNavigation = [
  { name: "Your Profile", href: "#" },
  { name: "Settings", href: "#" },
  { name: "Sign out", href: "#" },
]

const Settings = () => {
  return (
    <div>
      <form className="divide-y divide-gray-200 lg:col-span-9" action="#" method="POST">
        {/* Profile section */}
        <div className="py-6 px-4 sm:p-6 lg:pb-8">
          <div>
            <h2 className="text-lg font-medium leading-6 text-white">Profile</h2>
            <p className="mt-1 text-sm text-gray-500">
              This information will be displayed publicly so be careful what you share.
            </p>
          </div>

          <div className="mt-6 flex flex-col lg:flex-row">
            <div className="flex-grow space-y-6">
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-300">
                  Username
                </label>
                <div className="mt-1 flex rounded-md shadow-sm">
                  <span className="inline-flex items-center rounded-l-md border border-r-0 border-gray-300 bg-gray-50 px-3 text-gray-500 sm:text-lg">
                    Fdapp.com/
                  </span>
                  <input
                    type="text"
                    name="username"
                    id="username"
                    autoComplete="username"
                    className="block w-full min-w-0 flex-grow rounded-none rounded-r-md border-gray-300 focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    defaultValue={user.handle}
                  />
                </div>
              </div>

              <div>
                <label htmlFor="about" className="block text-sm font-medium text-gray-300">
                  About
                </label>
                <div className="mt-1">
                  <textarea
                    id="about"
                    name="about"
                    rows={3}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-sky-500 focus:ring-sky-500 sm:text-sm"
                    defaultValue={""}
                  />
                </div>
                <p className="mt-2 text-sm text-gray-500">
                  Brief description for your profile. URLs are hyperlinked.
                </p>
              </div>
            </div>

            <div className="mt-6 flex-grow lg:mt-0 lg:ml-6 lg:flex-shrink-0 lg:flex-grow-0">
              <p className="text-sm font-medium text-gray-300" aria-hidden="true">
                Photo
              </p>
              <div className="mt-1 lg:hidden">
                <div className="flex items-center">
                  <div
                    className="inline-block h-12 w-12 flex-shrink-0 overflow-hidden rounded-full"
                    aria-hidden="true"
                  >
                    <img className="h-full w-full rounded-full" src={user.imageUrl} alt="" />
                  </div>
                  <div className="ml-5 rounded-md shadow-sm">
                    <div className="group relative flex items-center justify-center rounded-md border border-gray-300 py-2 px-3 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 hover:bg-gray-50">
                      <label
                        htmlFor="mobile-user-photo"
                        className="pointer-events-none relative text-sm font-medium leading-4 text-gray-300"
                      >
                        <span>Change</span>
                        <span className="sr-only"> user photo</span>
                      </label>
                      <input
                        id="mobile-user-photo"
                        name="user-photo"
                        type="file"
                        className="absolute h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                      />
                    </div>
                  </div>
                </div>
              </div>

              <div className="relative hidden overflow-hidden rounded-full lg:block">
                <img className="relative h-40 w-40 rounded-full" src={user.imageUrl} alt="" />
                <label
                  htmlFor="desktop-user-photo"
                  className="absolute inset-0 flex h-full w-full items-center justify-center bg-black bg-opacity-75 text-sm font-medium text-white opacity-0 focus-within:opacity-100 hover:opacity-100"
                >
                  <span>Change</span>
                  <span className="sr-only"> user photo</span>
                  <input
                    type="file"
                    id="desktop-user-photo"
                    name="user-photo"
                    className="absolute inset-0 h-full w-full cursor-pointer rounded-md border-gray-300 opacity-0"
                  />
                </label>
              </div>
            </div>
          </div>

          <div className="mt-6 grid grid-cols-12 gap-6">
            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-300">
                First name
              </label>
              <input
                type="text"
                name="first-name"
                id="first-name"
                autoComplete="given-name"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                Last name
              </label>
              <input
                type="text"
                name="last-name"
                id="last-name"
                autoComplete="family-name"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              />
            </div>

            <div className="col-span-12">
              <label htmlFor="url" className="block text-sm font-medium text-gray-300">
                URL
              </label>
              <input
                type="text"
                name="url"
                id="url"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              />
            </div>

            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="company" className="block text-sm font-medium text-gray-300">
                Company
              </label>
              <input
                type="text"
                name="company"
                id="company"
                autoComplete="organization"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              />
            </div>
            <div className="col-span-12 sm:col-span-6">
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-300">
                Time Zone
              </label>
              <select
                id="time-zone"
                name="time-zone"
                className="mt-1 block w-full rounded-md border border-gray-300 py-2 px-3 text-black shadow-sm focus:border-sky-500 focus:outline-none focus:ring-sky-500 sm:text-sm"
              >
                <option value="-12:00">(GMT -12:00) Eniwetok, Kwajalein</option>
                <option value="-11:00">(GMT -11:00) Midway Island, Samoa</option>
                <option value="-10:00">(GMT -10:00) Hawaii</option>
                <option value="-09:50">(GMT -9:30) Taiohae</option>
                <option value="-09:00">(GMT -9:00) Alaska</option>
                <option value="-08:00">(GMT -8:00) Pacific Time (US &amp; Canada)</option>
                <option value="-07:00">(GMT -7:00) Mountain Time (US &amp; Canada)</option>
                <option value="-06:00">
                  (GMT -6:00) Central Time (US &amp; Canada), Mexico City
                </option>
                <option value="-05:00">
                  (GMT -5:00) Eastern Time (US &amp; Canada), Bogota, Lima
                </option>
                <option value="-04:50">(GMT -4:30) Caracas</option>
                <option value="-04:00">(GMT -4:00) Atlantic Time (Canada), Caracas, La Paz</option>
                <option value="-03:50">(GMT -3:30) Newfoundland</option>
                <option value="-03:00">(GMT -3:00) Brazil, Buenos Aires, Georgetown</option>
                <option value="-02:00">(GMT -2:00) Mid-Atlantic</option>
                <option value="-01:00">(GMT -1:00) Azores, Cape Verde Islands</option>
                <option value="+00:00">
                  (GMT) Western Europe Time, London, Lisbon, Casablanca
                </option>
                <option value="+01:00">(GMT +1:00) Brussels, Copenhagen, Madrid, Paris</option>
                <option value="+02:00">(GMT +2:00) Kaliningrad, South Africa</option>
                <option value="+03:00">(GMT +3:00) Baghdad, Riyadh, Moscow, St. Petersburg</option>
                <option value="+03:50">(GMT +3:30) Tehran</option>
                <option value="+04:00">(GMT +4:00) Abu Dhabi, Muscat, Baku, Tbilisi</option>
                <option value="+04:50">(GMT +4:30) Kabul</option>
                <option value="+05:00">
                  (GMT +5:00) Ekaterinburg, Islamabad, Karachi, Tashkent
                </option>
                <option value="+05:50">(GMT +5:30) Bombay, Calcutta, Madras, New Delhi</option>
                <option value="+05:75">(GMT +5:45) Kathmandu, Pokhara</option>
                <option value="+06:00">(GMT +6:00) Almaty, Dhaka, Colombo</option>
                <option value="+06:50">(GMT +6:30) Yangon, Mandalay</option>
                <option value="+07:00">(GMT +7:00) Bangkok, Hanoi, Jakarta</option>
                <option value="+08:00">(GMT +8:00) Beijing, Perth, Singapore, Hong Kong</option>
                <option value="+08:75">(GMT +8:45) Eucla</option>
                <option value="+09:00">(GMT +9:00) Tokyo, Seoul, Osaka, Sapporo, Yakutsk</option>
                <option value="+09:50">(GMT +9:30) Adelaide, Darwin</option>
                <option value="+10:00">(GMT +10:00) Eastern Australia, Guam, Vladivostok</option>
                <option value="+10:50">(GMT +10:30) Lord Howe Island</option>
                <option value="+11:00">(GMT +11:00) Magadan, Solomon Islands, New Caledonia</option>
                <option value="+11:50">(GMT +11:30) Norfolk Island</option>
                <option value="+12:00">(GMT +12:00) Auckland, Wellington, Fiji, Kamchatka</option>
                <option value="+12:75">(GMT +12:45) Chatham Islands</option>
                <option value="+13:00">(GMT +13:00) Apia, Nukualofa</option>
                <option value="+14:00">(GMT +14:00) Line Islands, Tokelau</option>
              </select>
            </div>
          </div>
        </div>

        {/* Privacy section */}
        <div className="divide-y divide-gray-200 pt-6">
          <div className="px-4 sm:px-6">
            <div>
              <h2 className="text-lg font-medium leading-6 text-white">Privacy</h2>
              <p className="mt-1 text-sm text-gray-500">
                All these information are available to the public.
              </p>
            </div>
          </div>
          <div className="mt-4 flex justify-end py-4 px-4 sm:px-6">
            <button
              type="button"
              className="inline-flex justify-center rounded-md border border-gray-300 bg-white py-2 px-4 text-sm font-medium text-gray-900 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="ml-5 inline-flex justify-center rounded-md border border-transparent bg-sky-700 py-2 px-4 text-sm font-medium text-white shadow-sm hover:bg-sky-800 focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
            >
              Save
            </button>
          </div>
        </div>
      </form>
    </div>
  )
}

export default Settings
