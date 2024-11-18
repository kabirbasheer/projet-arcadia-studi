import { FlowbiteCardTheme } from "flowbite-react/components/Card";

export const customCardTheme: FlowbiteCardTheme = {
  "root": {
    "base": "flex rounded-lg border-2 border-secondary-950 hover:border-primary-800",
    "children": "flex h-full flex-col justify-center gap-4 p-6",
    "horizontal": {
      "off": "flex-col",
      "on": "flex-col md:max-w-xl md:flex-row"
    },
    "href": "hover:bg-gray-100 dark:hover:bg-gray-700"
  },
  "img": {
    "base": "",
    "horizontal": {
      "off": "rounded-t-lg",
      "on": "h-96 w-full rounded-t-lg object-cover md:h-auto md:w-48 md:rounded-none md:rounded-l-lg"
    }
  }
}