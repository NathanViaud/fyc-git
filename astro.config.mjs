// @ts-check
import { defineConfig } from "astro/config";
import starlight from "@astrojs/starlight";

// https://astro.build/config
export default defineConfig({
    site: "https://NathanViaud.github.io",
    base: "fyc-git",
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
                github: "https://github.com/NathanViaud/fyc-git",
            },
            sidebar: [
                {
                    label: "Vidéos",
                    autogenerate: { directory: "01-videos" },
                },
                {
                    label: "Débutant",
                    collapsed: false,
                    items: [
                        "02-beginner/01-prerequisites",
                        "02-beginner/02-intro",
                        {
                            label: "Premiers pas",
                            autogenerate: { directory: "02-beginner/03-first-steps" },
                        },
                        {
                            label: "Principes des branches",
                            autogenerate: { directory: "02-beginner/04-branches" },
                        },
                        {
                            label: "Exemples d'utilisation",
                            autogenerate: { directory: "02-beginner/05-examples" },
                        },
                        "02-beginner/06-practical",
                    ],
                },
                {
                    label: "Avancés",
                    collapsed: false,
                    items: [
                        "03-advanced/01-concepts",
                        {
                            label: "Commandes",
                            autogenerate: { directory: "03-advanced/02-commands" },
                        },
                        "03-advanced/03-branching-strategy",
                        "03-advanced/04-tags",
                        "03-advanced/05-security",
                    ],
                },
                {
                    label: "Outils complémentaires",
                    collapsed: false,
                    items: [
                        "04-tools/01-platforms",
                        "04-tools/02-pull-requests",
                        "04-tools/03-ci",
                        "04-tools/04-deployment",
                    ],
                },
                {
                    label: "Self-hosted GitLab",
                    autogenerate: { directory: "05-self-hosted" },
                },
            ],
        }),
    ],
});
