// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    integrations: [
        starlight({
            title: "FYC Git",
            locales: {
                root: {
                    label: "Français",
                    lang: "fr-FR",
                },
            },
            customCss: ["./src/styles/custom.css"],
            social: {
                github: "https://github.com/withastro/starlight",
            },
            sidebar: [
                {
                    label: "Débutant",
                    collapsed: false,
                    items: [
                        "01-beginner/01-prerequisites",
                        "01-beginner/02-intro",
                        {
                            label: "Premiers pas",
                            autogenerate: { directory: "01-beginner/03-first-steps" },
                        },
                        {
                            label: "Principes des branches",
                            autogenerate: { directory: "01-beginner/04-branches" },
                        },
                        {
                            label: "Exemples d'utilisation",
                            autogenerate: { directory: "01-beginner/05-examples" },
                        },
                        "01-beginner/06-practical",
                    ],
                },
                {
                    label: "Avancés",
                    items: [
                        "02-advanced/01-concepts",
                        {
                            label: "Commandes",
                            autogenerate: { directory: "02-advanced/02-commands" },
                        },
                        "02-advanced/03-branching-strategy",
                        "02-advanced/04-tags",
                        "02-advanced/05-security",
                    ],
                },
            ],
        }),
    ],
});
